import { Pathnames } from 'next-intl/navigation';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${port}`;

export const defaultLocale = 'en' as const;
export const locales = ['en', 'fr', 'il'] as const;

export const pathnames = {
    '/': '/',
    '/how_we_work': {
        en: '/how_we_work',
        fr: '/how_we_work',
        il: '/how_we_work'
    },
    '/#services': {
        en: '/services',
        fr: '/services',
        il: '/services'
    }, '/contact_form': {
        en: '/contact_form',
        fr: '/contact_form',
        il: '/contact_form'
    },
    '/about_us': {
        en: '/about_us',
        fr: '/about_us',
        il: '/about_us'
    },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;