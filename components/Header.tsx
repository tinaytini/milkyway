'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Header() {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  const handleLanguageChange = (langCode: string) => {
    changeLanguage(langCode);
    setIsLanguageDropdownOpen(false);
  };

  const currentLang = availableLanguages.find(lang => lang.code === currentLanguage);

  return (
    <header className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="flex items-center transition-transform hover:scale-105 duration-200"
            >
              <Image
                src="/logo.svg"
                alt="MilkyWay Travel Logo"
                width={120}
                height={40}
                className={`transition-all duration-300 ${
                  isScrolled 
                    ? 'brightness-100' 
                    : 'brightness-0 invert drop-shadow-lg'
                }`}
                priority
              />
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={scrollToTop}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-gray-900' 
                  : 'text-white/90 hover:text-white drop-shadow-md'
              }`}
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-gray-900' 
                  : 'text-white/90 hover:text-white drop-shadow-md'
              }`}
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('tours')}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-gray-900' 
                  : 'text-white/90 hover:text-white drop-shadow-md'
              }`}
            >
              {t('nav.tours')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-gray-900' 
                  : 'text-white/90 hover:text-white drop-shadow-md'
              }`}
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-gray-900' 
                  : 'text-white/90 hover:text-white drop-shadow-md'
              }`}
            >
              {t('nav.contact')}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                    : 'text-white/90 hover:text-white hover:bg-white/10 drop-shadow-md'
                }`}
              >
                <span>{currentLang?.flag}</span>
                <span>{currentLang?.code.toUpperCase()}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLanguageDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-32 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ${
                  isScrolled ? 'bg-white' : 'bg-slate-900'
                }`}>
                  <div className="py-1">
                    {availableLanguages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-2 transition-colors ${
                          isScrolled 
                            ? 'text-gray-700 hover:bg-gray-100' 
                            : 'text-white hover:bg-slate-800'
                        } ${currentLanguage === lang.code ? 'font-semibold' : ''}`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Switcher */}
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className={`px-2 py-1 rounded transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-gray-900' 
                  : 'text-white/90 hover:text-white drop-shadow-md'
              }`}
            >
              {currentLang?.flag}
            </button>

            <button 
              onClick={toggleMobileMenu}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-gray-900' 
                  : 'text-white/90 hover:text-white drop-shadow-md'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className={`rounded-lg mt-2 p-4 shadow-lg ${
            isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-slate-900 backdrop-blur-md'
          }`}>
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={scrollToTop}
                className={`transition-colors py-2 text-left ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white/90 hover:text-white drop-shadow-md'
                }`}
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`transition-colors py-2 text-left ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white/90 hover:text-white drop-shadow-md'
                }`}
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('tours')}
                className={`transition-colors py-2 text-left ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white/90 hover:text-white drop-shadow-md'
                }`}
              >
                {t('nav.tours')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`transition-colors py-2 text-left ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white/90 hover:text-white drop-shadow-md'
                }`}
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`transition-colors py-2 text-left ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white/90 hover:text-white drop-shadow-md'
                }`}
              >
                {t('nav.contact')}
              </button>

              {/* Mobile Language Options */}
              <div className="border-t pt-4">
                <div className="text-sm font-semibold mb-2 text-gray-500">Language:</div>
                {availableLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left py-2 flex items-center space-x-2 transition-colors ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-gray-900' 
                        : 'text-white/90 hover:text-white drop-shadow-md'
                    } ${currentLanguage === lang.code ? 'font-semibold' : ''}`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Language dropdown for mobile */}
        {isLanguageDropdownOpen && (
          <div className="md:hidden absolute right-4 top-16 mt-2 w-32 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg-white z-30">
            <div className="py-1">
              {availableLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-2 text-gray-700 hover:bg-gray-100 ${
                    currentLanguage === lang.code ? 'font-semibold' : ''
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}