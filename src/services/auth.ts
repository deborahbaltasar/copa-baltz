import { isSupabaseConfigured, supabase } from '@/lib/supabase';

export type AuthCredentials = {
  email: string;
  password: string;
};

function requireSupabaseConfig() {
  if (!isSupabaseConfigured) {
    return 'Configure EXPO_PUBLIC_SUPABASE_URL e EXPO_PUBLIC_SUPABASE_ANON_KEY no .env.';
  }

  return null;
}

export async function signInWithEmail({ email, password }: AuthCredentials) {
  const configError = requireSupabaseConfig();
  if (configError) {
    return { data: null, error: configError };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  });

  return { data, error: error?.message ?? null };
}

export async function signUpWithEmail({ email, password }: AuthCredentials) {
  const configError = requireSupabaseConfig();
  if (configError) {
    return { data: null, error: configError };
  }

  const { data, error } = await supabase.auth.signUp({
    email: email.trim(),
    password,
  });

  return { data, error: error?.message ?? null };
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut();

  return { error: error?.message ?? null };
}

export async function getCurrentSession() {
  const { data, error } = await supabase.auth.getSession();

  return { session: data.session, error: error?.message ?? null };
}
