'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../lib/i18n';

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
  availableLanguages: { code: string; name: string; flag: string }[];
  isHydrated: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('ru');
  const [isHydrated, setIsHydrated] = useState(false);

  const availableLanguages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang);
    }
  };

  useEffect(() => {
    // Only run on client side after hydration
    setIsHydrated(true);
    
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('preferred-language');
      if (savedLang && ['ru', 'en'].includes(savedLang)) {
        i18n.changeLanguage(savedLang);
        setCurrentLanguage(savedLang);
      }
    }
  }, [i18n]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, availableLanguages, isHydrated }}>
      {children}
    </LanguageContext.Provider>
  );
};