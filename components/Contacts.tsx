'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export const Contacts = () => {
  const { t } = useTranslation('common');

  return (
    <section id="contact" className="bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Contact Information */}
          <div>
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/logo.svg"
                alt="MilkyWay Travel Logo"
                width={180}
                height={60}
                className="transition-transform hover:scale-105 duration-200 cursor-pointer"
                priority
              />
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: '#166EF3' }}
            >
              {t('contacts.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              {t('contacts.subtitle')}
            </p>

            {/* Contact Details */}
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(22, 110, 243, 0.1)' }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: '#166EF3' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: '#166EF3' }}
                >
                  {t('contacts.contactInfo.phone.title')}
                </h3>
                <p className="text-gray-600">
                  {t('contacts.contactInfo.phone.value')}
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(36, 186, 236, 0.1)' }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: '#24BAEC' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: '#166EF3' }}
                >
                  {t('contacts.contactInfo.email.title')}
                </h3>
                <p className="text-gray-600">
                  {t('contacts.contactInfo.email.value')}
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'rgba(49, 115, 18, 0.1)' }}
                >
                  <a
                    href="https://instagram.com/milkywaytravel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: '#317312' }}
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: '#166EF3' }}
                >
                  {t('contacts.contactInfo.social.title')}
                </h3>
                <p className="text-gray-600">
                  {t('contacts.contactInfo.social.value')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
