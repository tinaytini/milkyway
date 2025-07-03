'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';
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
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

export const LanguageProvider: React.FC<{
  children: React.ReactNode;
  initialLocale?: string;
}> = ({ children, initialLocale = 'en' }) => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  // Initialize with the locale from the URL immediately
  const [currentLanguage, setCurrentLanguage] = useState(initialLocale);
  const [isHydrated, setIsHydrated] = useState(false);

  const availableLanguages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  ];

  const changeLanguage = (lang: string) => {
    const segments = pathname.split('/').filter(Boolean);

    // If current path has a locale, replace it; otherwise add the new locale
    if (segments[0] && ['ru', 'en'].includes(segments[0])) {
      segments[0] = lang;
    } else {
      segments.unshift(lang);
    }

    const newPath = '/' + segments.join('/');

    // Change language immediately
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);

    // Only access localStorage on client side
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang);
      document.documentElement.lang = lang;
    }

    router.push(newPath);
  };

  // Initialize i18n with the correct language immediately
  useEffect(() => {
    // Extract locale from URL pathname
    const segments = pathname.split('/').filter(Boolean);
    const urlLang = segments[0];
    const validLang = ['ru', 'en'].includes(urlLang) ? urlLang : initialLocale;

    // Set the language immediately, before hydration
    if (i18n.language !== validLang) {
      i18n.changeLanguage(validLang);
      setCurrentLanguage(validLang);
    }

    // Set HTML lang attribute
    if (typeof window !== 'undefined') {
      document.documentElement.lang = validLang;
    }

    setIsHydrated(true);
  }, [pathname, i18n, initialLocale]);

  // Also set language on initial render (synchronously)
  React.useMemo(() => {
    const segments = pathname.split('/').filter(Boolean);
    const urlLang = segments[0];
    const validLang = ['ru', 'en'].includes(urlLang) ? urlLang : initialLocale;
    
    if (i18n.language !== validLang) {
      i18n.changeLanguage(validLang);
    }
  }, [pathname, initialLocale, i18n]);

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, changeLanguage, availableLanguages, isHydrated }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
