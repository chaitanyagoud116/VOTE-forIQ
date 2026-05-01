/** All supported Indian languages with their native script names */
export interface Language {
  code: string;
  name: string;
  nativeName: string;
  states: string[];
}

export const INDIAN_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', states: ['Arunachal Pradesh', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Sikkim'] },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', states: ['Bihar', 'Chhattisgarh', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'] },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', states: ['Andhra Pradesh', 'Telangana'] },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', states: ['Tamil Nadu', 'Kerala'] },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', states: ['West Bengal', 'Tripura', 'Jharkhand', 'Assam'] },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', states: ['Maharashtra', 'Goa'] },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', states: ['Karnataka'] },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', states: ['Kerala'] },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', states: ['Gujarat'] },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', states: ['Punjab', 'Haryana'] },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', states: ['Odisha'] },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', states: ['Andhra Pradesh', 'Bihar', 'Karnataka', 'Telangana', 'Uttar Pradesh'] },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া', states: ['Assam'] },
  { code: 'mai', name: 'Maithili', nativeName: 'मैथिली', states: ['Bihar'] },
  { code: 'bho', name: 'Bhojpuri', nativeName: 'भोजपुरी', states: ['Bihar', 'Uttar Pradesh'] },
  { code: 'sa', name: 'Sanskrit', nativeName: 'संस्कृतम्', states: ['Uttarakhand'] },
  { code: 'kok', name: 'Konkani', nativeName: 'कोंकणी', states: ['Goa'] },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली', states: ['Sikkim', 'West Bengal'] },
  { code: 'mni', name: 'Meitei (Manipuri)', nativeName: 'মৈতৈলোন্', states: ['Manipur'] },
  { code: 'sat', name: 'Santali', nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ', states: ['Jharkhand'] },
  { code: 'bod', name: 'Bodo', nativeName: 'बड़ो', states: ['Assam'] },
  { code: 'kha', name: 'Khasi', nativeName: 'Ka Ktien Khasi', states: ['Meghalaya'] },
  { code: 'grt', name: 'Garo', nativeName: 'A·chik', states: ['Meghalaya'] },
  { code: 'lus', name: 'Mizo', nativeName: 'Mizo ṭawng', states: ['Mizoram'] },
  { code: 'nag', name: 'Nagamese', nativeName: 'Nagamese', states: ['Nagaland'] },
  { code: 'kok2', name: 'Kokborok', nativeName: 'Kokborok', states: ['Tripura'] },
  { code: 'tul', name: 'Tulu', nativeName: 'ತುಳು', states: ['Karnataka'] },
  { code: 'raj', name: 'Rajasthani', nativeName: 'राजस्थानी', states: ['Rajasthan'] },
  { code: 'hry', name: 'Haryanvi', nativeName: 'हरियाणवी', states: ['Haryana'] },
  { code: 'phr', name: 'Pahari', nativeName: 'पहाड़ी', states: ['Himachal Pradesh'] },
  { code: 'chg', name: 'Chhattisgarhi', nativeName: 'छत्तीसगढ़ी', states: ['Chhattisgarh'] },
  { code: 'grh', name: 'Garhwali', nativeName: 'गढ़वाली', states: ['Uttarakhand'] },
  { code: 'lep', name: 'Lepcha', nativeName: 'ᰛᰩᰵᰛᰧᰵ', states: ['Sikkim'] },
  { code: 'nyi', name: 'Nyishi', nativeName: 'Nyishi', states: ['Arunachal Pradesh'] },
  { code: 'adi', name: 'Adi', nativeName: 'Adi', states: ['Arunachal Pradesh'] },
];
