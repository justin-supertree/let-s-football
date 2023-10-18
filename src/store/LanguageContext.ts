import { createContext, useContext } from 'react';

export type Language = 'eng' | 'kor';

type LanguageContextType = {
  language: Language;
  isFirst: boolean;
  isFetchNftList: boolean;
  setLanguage: (lang: Language) => void;
  setIsFirst: (bool: boolean) => void;
  setIsFetchNftList: (bool: boolean) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};

export default LanguageContext;
