'use client';

import { useTranslation } from 'react-i18next';

export const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-black relative z-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75 z-0"
        style={{
          backgroundImage: 'url(/desert.jpg)',
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#FFFFFF' }}
          >
            {t('features.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            className="bg-white p-6 rounded-lg shadow-lg border-t-4"
            style={{ borderTopColor: '#00AAF8' }}
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: 'rgba(0, 170, 248, 0.1)' }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: '#00AAF8' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0V9a1 1 0 011-1h4a1 1 0 011 1v11"
                />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: '#0160D6' }}
            >
              {t('features.emiratesCard.title')}
            </h3>
            <p className="text-gray-600">
              {t('features.emiratesCard.description')}
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-lg border-t-4"
            style={{ borderTopColor: '#F13B13' }}
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: 'rgba(241, 59, 19, 0.1)' }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: '#F13B13' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: '#0160D6' }}
            >
              {t('features.desertCard.title')}
            </h3>
            <p className="text-gray-600">
              {t('features.desertCard.description')}
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-lg border-t-4"
            style={{ borderTopColor: '#AAB624' }}
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: 'rgba(170, 182, 36, 0.1)' }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: '#AAB624' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: '#0160D6' }}
            >
              {t('features.luxuryCard.title')}
            </h3>
            <p className="text-gray-600">
              {t('features.luxuryCard.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
