'use client';

import { useTranslation } from 'react-i18next';

export const OurService = () => {
  const { t } = useTranslation('common');

  return (
    <section className="bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: '#166EF3' }}
          >
            {t('ourServices.title')}
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#333333' }}>
            {t('ourServices.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service 1 - Visa & Immigration */}
          <div
            className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-4"
            style={{ borderTopColor: '#24BAEC' }}
          >
            <div className="p-8 text-center">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(36, 186, 236, 0.1)' }}
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: '#24BAEC' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: '#166EF3' }}
              >
                {t('ourServices.services.visa.title')}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('ourServices.services.visa.description')}
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: '#6EBB2D' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t('ourServices.services.visa.features.tourist')}
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: '#6EBB2D' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t('ourServices.services.visa.features.work')}
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: '#6EBB2D' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t('ourServices.services.visa.features.residency')}
                </li>
              </ul>
            </div>
          </div>

          {/* Service 2 - Education */}
          <div
            className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-4"
            style={{ borderTopColor: '#6EBB2D' }}
          >
            <div className="p-8 text-center">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(110, 187, 45, 0.1)' }}
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: '#6EBB2D' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: '#166EF3' }}
              >
                {t('ourServices.services.education.title')}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('ourServices.services.education.description')}
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: '#6EBB2D' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t('ourServices.services.education.features.admissions')}
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: '#6EBB2D' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t('ourServices.services.education.features.studentVisa')}
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: '#6EBB2D' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t('ourServices.services.education.features.scholarships')}
                </li>
              </ul>
            </div>
          </div>

          {/* Service 3 - Travel & Tours */}
          <div
            className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-4"
            style={{ borderTopColor: '#317312' }}
          >
            <div className="p-8 text-center">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(49, 115, 18, 0.1)' }}
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: '#317312' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: '#166EF3' }}
              >
                {t('ourServices.services.travel.title')}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('ourServices.services.travel.description')}
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: '#6EBB2D' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t('ourServices.services.travel.features.packages')}
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: '#6EBB2D' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t('ourServices.services.travel.features.hotels')}
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: '#6EBB2D' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t('ourServices.services.travel.features.transportation')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
