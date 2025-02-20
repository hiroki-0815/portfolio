import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['ja', 'en'],
  // Used when no locale matches
  defaultLocale: 'ja',
  localeDetection: false
});

// Derive a "Locale" type from the "locales" array
// If locales is ['en', 'ja'], this type becomes: "en" | "ja"
export type Locale = (typeof routing)['locales'][number];

// Optional: Wrappers around Next.js navigation APIs
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
