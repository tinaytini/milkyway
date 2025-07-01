'use client';

import { useTranslation } from 'react-i18next';

export const PopularTours = () => {
  const { t } = useTranslation('common');

  return (
    <section className="relative z-10" style={{backgroundColor: '#DED6C9'}}>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#317312'}}>
            {t('popularTours.title')}
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{color: '#333333'}}>
            {t('popularTours.subtitle')}
          </p>
        </div>

        {/* 6 Image Collage Grid */}
        <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[500px] md:h-[600px]">
          
          {/* Image 1 - Large featured image (Dubai Skyline) */}
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
              style={{backgroundImage: 'url(/burj.jpg)'}}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {t('popularTours.tours.dubaiSkyline.title')}
                </h3>
                <p className="text-base md:text-lg opacity-90">
                  {t('popularTours.tours.dubaiSkyline.description')}
                </p>
                <div className="mt-2 text-sm opacity-75">
                  {t('popularTours.tours.dubaiSkyline.duration')}
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold">
                {t('popularTours.tours.dubaiSkyline.badge')}
              </div>
            </div>
          </div>

          {/* Image 2 - Desert Safari (tall right) */}
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
              style={{backgroundImage: 'url(/de.jpg)'}}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold mb-1">
                  {t('popularTours.tours.desertSafari.title')}
                </h3>
                <p className="text-sm opacity-90">
                  {t('popularTours.tours.desertSafari.description')}
                </p>
                <div className="mt-1 text-sm opacity-75">
                  {t('popularTours.tours.desertSafari.duration')}
                </div>
              </div>
            </div>
          </div>

          {/* Image 3 - Sheikh Zayed Mosque */}
          <div className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
              style={{backgroundImage: 'url(/Sheikh.jpg)'}}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="text-2xl font-bold mb-1">
                  {t('popularTours.tours.grandMosque.title')}
                </h3>
                <p className="text-sm opacity-90">
                  {t('popularTours.tours.grandMosque.description')}
                </p>
              </div>
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white text-sm font-semibold">
                {t('popularTours.tours.grandMosque.badge')}
              </div>
            </div>
          </div>


          {/* Image 5 - Dubai Marina */}
          <div className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
              style={{backgroundImage: 'url(/marina.jpg)'}}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold mb-1">
                  {t('popularTours.tours.dubaiMarina.title')}
                </h3>
                <p className="text-sm opacity-90">
                  {t('popularTours.tours.dubaiMarina.description')}
                </p>
                <div className="mt-1 text-sm opacity-75">
                  {t('popularTours.tours.dubaiMarina.duration')}
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold">
                {t('popularTours.tours.dubaiMarina.badge')}
              </div>
            </div>
          </div>

          {/* Image 6 - Abu Dhabi Experience */}
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
              style={{backgroundImage: 'url(/abu-dhabi.jpg)'}}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold mb-1">
                  {t('popularTours.tours.abuDhabi.title')}
                </h3>
                <p className="text-sm opacity-90">
                  {t('popularTours.tours.abuDhabi.description')}
                </p>
                <div className="mt-1 text-xs opacity-75">
                  {t('popularTours.tours.abuDhabi.duration')}
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold">
                {t('popularTours.tours.abuDhabi.badge')}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};