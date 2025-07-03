import Header from '@/components/Header';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { FloatingWhatsAppButton } from '@/components/FloatingWhatsAppButton';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await the params before using its properties
  const { locale } = await params;

  // Set title and description based on locale
  const titles = {
    en: 'MilkyWay - UAE Travel Specialists',
    ru: 'MilkyWay - Путешествия по ОАЭ',
  };

  const descriptions = {
    en: 'Expert UAE travel services across all 7 emirates with MilkyWay',
    ru: 'Путешествия по всем 7 эмиратам ОАЭ с MilkyWay',
  };

  return (
    <html lang={locale}>
      <head>
        <title>{titles[locale as keyof typeof titles] || titles.en}</title>
        <meta
          name="description"
          content={
            descriptions[locale as keyof typeof descriptions] ||
            descriptions.en
          }
        />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <LanguageProvider initialLocale={locale}>
          <Header />
          {children}
          <FloatingWhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}