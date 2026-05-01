import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './config';
import type { User as FirebaseUser } from 'firebase/auth';

export interface UserProfile {
  uid: string;
  name: string | null;
  email: string | null;
  createdAt: any;
  lastLogin: any;
}

export const createUserProfileDocument = async (
  userAuth: FirebaseUser,
  additionalData?: any
): Promise<void> => {
  if (!userAuth) return;

  try {
    const userRef = doc(db, 'users', userAuth.uid);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
      const { displayName, email, uid } = userAuth;
      const createdAt = serverTimestamp();

      await setDoc(userRef, {
        uid,
        name: displayName || additionalData?.name || 'Voter',
        email,
        createdAt,
        lastLogin: createdAt,
        ...additionalData
      });
    } else {
      // Update lastLogin on subsequent logins
      await setDoc(userRef, {
        lastLogin: serverTimestamp()
      }, { merge: true });
    }
  } catch (error) {
    console.error('Firestore Error: Database is likely not created or offline.', error);
    // We swallow the error here so the user can still log in even if the database fails
  }
};
