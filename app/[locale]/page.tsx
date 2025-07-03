'use client';

import Homepage from '@/components/Homepage';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';


export default function Home() {
  const params = useParams();
  const { isHydrated } = useLanguage();

  if (!isHydrated) return null;

  // Extract locale from params - useParams already handles the async nature
  const locale = Array.isArray(params.locale) ? params.locale[0] : params.locale;

  return <Homepage locale={locale} />;
}
