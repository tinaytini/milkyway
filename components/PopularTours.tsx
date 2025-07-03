'use client';

import { useTranslation } from 'react-i18next';

export const PopularTours = () => {
  const { t } = useTranslation();

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

        {/* Mobile Layout - Stack vertically */}
        <div className="block sm:hidden space-y-4">
          {/* Dubai Skyline */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer h-64">
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

          {/* Desert Safari */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer h-64">
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

          {/* Sheikh Zayed Mosque */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer h-64">
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

          {/* Dubai Marina */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer h-64">
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

          {/* Abu Dhabi */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer h-64">
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

        {/* Tablet Layout - 2x3 grid */}
        <div className="hidden sm:block lg:hidden">
          <div className="grid grid-cols-2 grid-rows-3 gap-4 h-[600px]">
            {/* Dubai Skyline - spans 2 columns */}
            <div className="col-span-2 row-span-1 relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                style={{backgroundImage: 'url(/burj.jpg)'}}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {t('popularTours.tours.dubaiSkyline.title')}
                  </h3>
                  <p className="text-base opacity-90">
                    {t('popularTours.tours.dubaiSkyline.description')}
                  </p>
                  <div className="mt-1 text-sm opacity-75">
                    {t('popularTours.tours.dubaiSkyline.duration')}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold">
                  {t('popularTours.tours.dubaiSkyline.badge')}
                </div>
              </div>
            </div>

            {/* Desert Safari */}
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                style={{backgroundImage: 'url(/de.jpg)'}}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-lg font-bold mb-1">
                    {t('popularTours.tours.desertSafari.title')}
                  </h3>
                  <p className="text-sm opacity-90">
                    {t('popularTours.tours.desertSafari.description')}
                  </p>
                  <div className="mt-1 text-xs opacity-75">
                    {t('popularTours.tours.desertSafari.duration')}
                  </div>
                </div>
              </div>
            </div>

            {/* Grand Mosque */}
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                style={{backgroundImage: 'url(/Sheikh.jpg)'}}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-lg font-bold mb-1">
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

            {/* Marina and Abu Dhabi side by side */}
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                style={{backgroundImage: 'url(/marina.jpg)'}}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-lg font-bold mb-1">
                    {t('popularTours.tours.dubaiMarina.title')}
                  </h3>
                  <p className="text-sm opacity-90">
                    {t('popularTours.tours.dubaiMarina.description')}
                  </p>
                  <div className="mt-1 text-xs opacity-75">
                    {t('popularTours.tours.dubaiMarina.duration')}
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white text-sm font-semibold">
                  {t('popularTours.tours.dubaiMarina.badge')}
                </div>
              </div>
            </div>

            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                style={{backgroundImage: 'url(/abu-dhabi.jpg)'}}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-lg font-bold mb-1">
                    {t('popularTours.tours.abuDhabi.title')}
                  </h3>
                  <p className="text-sm opacity-90">
                    {t('popularTours.tours.abuDhabi.description')}
                  </p>
                  <div className="mt-1 text-xs opacity-75">
                    {t('popularTours.tours.abuDhabi.duration')}
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white text-sm font-semibold">
                  {t('popularTours.tours.abuDhabi.badge')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original 4x4 grid with improved responsiveness */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[500px] xl:h-[600px]">
            
            {/* Dubai Skyline - Large featured image */}
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                style={{backgroundImage: 'url(/burj.jpg)'}}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-bold mb-2">
                    {t('popularTours.tours.dubaiSkyline.title')}
                  </h3>
                  <p className="text-sm xl:text-base 2xl:text-lg opacity-90">
                    {t('popularTours.tours.dubaiSkyline.description')}
                  </p>
                  <div className="mt-2 text-xs xl:text-sm opacity-75">
                    {t('popularTours.tours.dubaiSkyline.duration')}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs xl:text-sm font-semibold">
                  {t('popularTours.tours.dubaiSkyline.badge')}
                </div>
              </div>
            </div>

            {/* Desert Safari */}
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                style={{backgroundImage: 'url(/de.jpg)'}}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl xl:text-2xl font-bold mb-1">
                    {t('popularTours.tours.desertSafari.title')}
                  </h3>
                  <p className="text-xs xl:text-sm opacity-90">
                    {t('popularTours.tours.desertSafari.description')}
                  </p>
                  <div className="mt-1 text-xs xl:text-sm opacity-75">
                    {t('popularTours.tours.desertSafari.duration')}
                  </div>
                </div>
              </div>
            </div>

            {/* Sheikh Zayed Mosque */}
            <div className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                style={{backgroundImage: 'url(/Sheikh.jpg)'}}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-lg xl:text-xl font-bold mb-1">
                    {t('popularTours.tours.grandMosque.title')}
                  </h3>
                  <p className="text-xs xl:text-sm opacity-90">
                    {t('popularTours.tours.grandMosque.description')}
                  </p>
                </div>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs font-semibold">
                  {t('popularTours.tours.grandMosque.badge')}
                </div>
              </div>
            </div>

            {/* Dubai Marina */}
            <div className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                style={{backgroundImage: 'url(/marina.jpg)'}}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg xl:text-xl font-bold mb-1">
                    {t('popularTours.tours.dubaiMarina.title')}
                  </h3>
                  <p className="text-xs xl:text-sm opacity-90">
                    {t('popularTours.tours.dubaiMarina.description')}
                  </p>
                  <div className="mt-1 text-xs opacity-75">
                    {t('popularTours.tours.dubaiMarina.duration')}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs font-semibold">
                  {t('popularTours.tours.dubaiMarina.badge')}
                </div>
              </div>
            </div>

            {/* Abu Dhabi Experience */}
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                style={{backgroundImage: 'url(/abu-dhabi.jpg)'}}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg xl:text-xl font-bold mb-1">
                    {t('popularTours.tours.abuDhabi.title')}
                  </h3>
                  <p className="text-xs xl:text-sm opacity-90">
                    {t('popularTours.tours.abuDhabi.description')}
                  </p>
                  <div className="mt-1 text-xs opacity-75">
                    {t('popularTours.tours.abuDhabi.duration')}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs xl:text-sm font-semibold">
                  {t('popularTours.tours.abuDhabi.badge')}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};