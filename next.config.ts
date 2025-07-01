import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    domains: [
      {
        domain: 'mwaytravels.com',
        defaultLocale: 'ru',
      }
    ],
  },
}

export default nextConfig;
