'use client';

import { useTranslation } from 'react-i18next';

export const Statistics = () => {
  const { t } = useTranslation('common');

  return (
    <section className="relative z-10" style={{ backgroundColor: '#F0ECE9' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: '#00AAF8' }}
              >
                25K+
              </div>
              <div className="text-gray-600">{t('statistics.stats.visitors')}</div>
            </div>
            <div>
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: '#0160D6' }}
              >
                7
              </div>
              <div className="text-gray-600">{t('statistics.stats.emirates')}</div>
            </div>
            <div>
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: '#AAB624' }}
              >
                12
              </div>
              <div className="text-gray-600">{t('statistics.stats.expertise')}</div>
            </div>
            <div>
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: '#F13B13' }}
              >
                500+
              </div>
              <div className="text-gray-600">{t('statistics.stats.experiences')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
