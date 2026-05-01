import React from 'react';
import { LogIn, LogOut, User as UserIcon } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { useAuth } from '../hooks/useAuth';

const Profile = () => {
  const { user, loading, loginWithGoogle, logout } = useAuth();

  if (loading) {
    return (
      <PageWrapper className="py-20 px-4 flex justify-center items-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Voter Profile</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Manage your saved frameworks and track your democratic IQ over time.
        </p>
      </div>

      <Card className="p-8">
        {!user ? (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-slate-100 dark:bg-dark-800 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
              <UserIcon size={40} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Sign in to save your progress</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
              Create an account to save your Decision Lab frameworks and keep track of your Quiz Center scores.
            </p>
            <Button onClick={loginWithGoogle} size="lg" className="mx-auto flex items-center gap-2">
              <LogIn size={20} /> Continue with Google
            </Button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-200 dark:border-slate-700">
              <img 
                src={user.photoURL || `https://ui-avatars.com/api/?name=${user.email}`} 
                alt="Profile" 
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
              />
              <div>
                <h2 className="text-2xl font-bold">{user.displayName || 'Voter'}</h2>
                <p className="text-slate-500">{user.email}</p>
              </div>
              <div className="ml-auto">
                <Button variant="ghost" onClick={logout} className="text-rose-500 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-900/20">
                  <LogOut size={20} /> Sign Out
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-dark-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-lg mb-2">Saved Frameworks</h3>
                <p className="text-slate-500 mb-4">You haven't saved any frameworks yet.</p>
                <Button variant="outline" size="sm">Go to Decision Lab</Button>
              </div>
              <div className="bg-slate-50 dark:bg-dark-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-lg mb-2">Quiz Scores</h3>
                <p className="text-slate-500 mb-4">No completed quizzes.</p>
                <Button variant="outline" size="sm">Take IQ Test</Button>
              </div>
            </div>
          </div>
        )}
      </Card>
    </PageWrapper>
  );
};

export default Profile;
