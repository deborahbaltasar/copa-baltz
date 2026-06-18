import type { CountryCode } from './countries';

export type CountryTheme = {
  primary: string;
  secondary: string;
  accent: string;
  success: string;
  warning: string;
  background: string;
  cardBackground: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
};

export const DEFAULT_THEME: CountryTheme = {
  primary: '#2563EB',
  secondary: '#EAF2FF',
  accent: '#7C8AA5',
  success: '#2F8F5B',
  warning: '#C78A12',
  background: '#F8FAFC',
  cardBackground: '#FFFFFF',
  border: '#E5E7EB',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
};

export const COUNTRY_THEMES: Record<CountryCode, CountryTheme> = {
  BR: {
    ...DEFAULT_THEME,
    primary: '#1F8A4C',
    secondary: '#EAF7EE',
    accent: '#E1B923',
  },
  AR: {
    ...DEFAULT_THEME,
    primary: '#4DA3D9',
    secondary: '#EAF7FF',
    accent: '#D6A93A',
  },
  MX: {
    ...DEFAULT_THEME,
    primary: '#2F7D4B',
    secondary: '#EEF7F1',
    accent: '#B84A42',
  },
  FR: {
    ...DEFAULT_THEME,
    primary: '#244C9A',
    secondary: '#EDF2FF',
    accent: '#C84D5A',
  },
  JP: {
    ...DEFAULT_THEME,
    primary: '#B83A4B',
    secondary: '#FFF1F3',
    accent: '#7A8494',
  },
  PT: {
    ...DEFAULT_THEME,
    primary: '#257C54',
    secondary: '#EEF8F2',
    accent: '#C9A23A',
  },
  DE: {
    ...DEFAULT_THEME,
    primary: '#1F2937',
    secondary: '#F3F4F6',
    accent: '#D5A419',
  },
  ES: {
    ...DEFAULT_THEME,
    primary: '#B94138',
    secondary: '#FFF4E2',
    accent: '#D9A51D',
  },
};

export function getCountryTheme(countryCode?: string | null): CountryTheme {
  if (!countryCode || !(countryCode in COUNTRY_THEMES)) {
    return DEFAULT_THEME;
  }

  return COUNTRY_THEMES[countryCode as CountryCode];
}
