'use client';

import { useTranslation } from 'react-i18next';

export const WhoWeareSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative z-10"
      style={{
        background:
          'linear-gradient(to bottom right, #F0ECE9, rgba(240, 236, 233, 0.8))',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: '#0160D6' }}
            >
              {t('whoWeAre.title')}
            </h2>
            <p
              className="text-lg mb-6 leading-relaxed"
              style={{ color: '#333333' }}
              dangerouslySetInnerHTML={{ __html: t('whoWeAre.description1') }}
            />
            <p
              className="text-lg mb-6 leading-relaxed"
              style={{ color: '#333333' }}
              dangerouslySetInnerHTML={{ __html: t('whoWeAre.description2') }}
            />
          </div>

          {/* Mission Card */}
          <div className="relative">
            <div
              className="rounded-2xl shadow-2xl overflow-hidden"
              style={{ backgroundColor: '#F0ECE9' }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url(/desert.jpg)',
                  backgroundSize: '140%',
                  backgroundPosition: 'center center',
                }}
              >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 text-center">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(to right, #F13B13, #AAB624)',
                  }}
                >
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('whoWeAre.mission.title')}
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  {t('whoWeAre.mission.description')}
                </p>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div
                        className="text-2xl font-bold text-white"
                        style={{ color: '#AAB624' }}
                      >
                        2013
                      </div>
                      <div className="text-sm text-white/70">
                        {t('whoWeAre.stats.founded')}
                      </div>
                    </div>
                    <div>
                      <div
                        className="text-2xl font-bold text-white"
                        style={{ color: '#AAB624' }}
                      >
                        100%
                      </div>
                      <div className="text-sm text-white/70">
                        {t('whoWeAre.stats.uaeFocus')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
