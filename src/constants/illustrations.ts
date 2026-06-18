import type { CountryCode } from './countries';

export type IllustrationProfile = {
  mascotVariant: string;
  decorativeElements: string[];
  usageGuidelines: string[];
};

const sharedUsageGuidelines = [
  'Use illustrations only as supporting elements.',
  'Keep the same line weight, proportions, and finish across countries.',
  'Never use official federation, FIFA, or team emblems.',
  'Prefer small accents in headers, empty states, cards, and avatars.',
];

export const COUNTRY_ILLUSTRATIONS: Record<CountryCode, IllustrationProfile> = {
  BR: {
    mascotVariant: 'sunny-green-kit',
    decorativeElements: ['soft-curves', 'small-stars', 'subtle-blue-dots'],
    usageGuidelines: sharedUsageGuidelines,
  },
  AR: {
    mascotVariant: 'air-light-blue-kit',
    decorativeElements: ['thin-rays', 'soft-gold-sparkles', 'pale-blue-dots'],
    usageGuidelines: sharedUsageGuidelines,
  },
  MX: {
    mascotVariant: 'warm-green-kit',
    decorativeElements: ['clean-festive-shapes', 'soft-red-dots', 'rounded-frames'],
    usageGuidelines: sharedUsageGuidelines,
  },
  FR: {
    mascotVariant: 'deep-blue-kit',
    decorativeElements: ['refined-lines', 'small-red-accents', 'minimal-badges'],
    usageGuidelines: sharedUsageGuidelines,
  },
  JP: {
    mascotVariant: 'minimal-white-kit',
    decorativeElements: ['red-circle-accent', 'quiet-grey-pattern', 'thin-frames'],
    usageGuidelines: sharedUsageGuidelines,
  },
  PT: {
    mascotVariant: 'classic-green-kit',
    decorativeElements: ['soft-gold-details', 'warm-red-dots', 'classic-frames'],
    usageGuidelines: sharedUsageGuidelines,
  },
  DE: {
    mascotVariant: 'graphite-kit',
    decorativeElements: ['small-yellow-bars', 'red-pin-dots', 'clean-dark-lines'],
    usageGuidelines: sharedUsageGuidelines,
  },
  ES: {
    mascotVariant: 'warm-red-kit',
    decorativeElements: ['soft-yellow-panels', 'dark-small-details', 'rounded-rays'],
    usageGuidelines: sharedUsageGuidelines,
  },
};

export function getIllustrationProfile(countryCode?: string | null) {
  if (!countryCode || !(countryCode in COUNTRY_ILLUSTRATIONS)) {
    return {
      mascotVariant: 'neutral-premium',
      decorativeElements: ['soft-neutral-dots', 'rounded-frames'],
      usageGuidelines: sharedUsageGuidelines,
    };
  }

  return COUNTRY_ILLUSTRATIONS[countryCode as CountryCode];
}
