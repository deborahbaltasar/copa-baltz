export type CountryCode =
  | 'BR'
  | 'AR'
  | 'MX'
  | 'FR'
  | 'JP'
  | 'PT'
  | 'DE'
  | 'ES';

export type Country = {
  country_code: CountryCode;
  country_name: string;
  flag_emoji: string;
};

export const COUNTRIES: Country[] = [
  { country_code: 'BR', country_name: 'Brasil', flag_emoji: '🇧🇷' },
  { country_code: 'AR', country_name: 'Argentina', flag_emoji: '🇦🇷' },
  { country_code: 'MX', country_name: 'Mexico', flag_emoji: '🇲🇽' },
  { country_code: 'FR', country_name: 'Franca', flag_emoji: '🇫🇷' },
  { country_code: 'JP', country_name: 'Japao', flag_emoji: '🇯🇵' },
  { country_code: 'PT', country_name: 'Portugal', flag_emoji: '🇵🇹' },
  { country_code: 'DE', country_name: 'Alemanha', flag_emoji: '🇩🇪' },
  { country_code: 'ES', country_name: 'Espanha', flag_emoji: '🇪🇸' },
];

export function getCountryByCode(countryCode?: string | null) {
  return COUNTRIES.find((country) => country.country_code === countryCode);
}
