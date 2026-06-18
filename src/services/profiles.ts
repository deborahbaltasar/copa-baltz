import { getCountryByCode } from '@/constants/countries';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';
import type { Profile } from '@/types/profile';

export async function getProfile(userId: string): Promise<{ data: Profile | null; error: string | null }> {
  if (!isSupabaseConfigured) {
    return { data: null, error: null };
  }

  const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single();

  return { data, error: error?.message ?? null };
}

export async function upsertProfile(input: {
  userId: string;
  email?: string | null;
}): Promise<{ data: Profile | null; error: string | null }> {
  if (!isSupabaseConfigured) {
    return { data: null, error: null };
  }

  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from('profiles')
    .upsert(
      {
        id: input.userId,
        email: input.email ?? null,
        updated_at: now,
      },
      { onConflict: 'id' },
    )
    .select('*')
    .single();

  return { data, error: error?.message ?? null };
}

export async function updateProfileCountry(input: {
  userId: string;
  countryCode: string;
}): Promise<{ data: Profile | null; error: string | null }> {
  const country = getCountryByCode(input.countryCode);

  if (!country) {
    return { data: null, error: 'Pais invalido.' };
  }

  if (!isSupabaseConfigured) {
    return {
      data: {
        id: input.userId,
        email: null,
        display_name: null,
        selected_country_code: country.country_code,
        selected_country_name: country.country_name,
        selected_country_flag: country.flag_emoji,
        created_at: null,
        updated_at: new Date().toISOString(),
      },
      error: null,
    };
  }

  const { data, error } = await supabase
    .from('profiles')
    .update({
      selected_country_code: country.country_code,
      selected_country_name: country.country_name,
      selected_country_flag: country.flag_emoji,
      updated_at: new Date().toISOString(),
    })
    .eq('id', input.userId)
    .select('*')
    .single();

  return { data, error: error?.message ?? null };
}
