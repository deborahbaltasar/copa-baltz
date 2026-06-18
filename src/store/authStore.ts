import type { Session } from '@supabase/supabase-js';
import { create } from 'zustand';

import { signInWithEmail, signOutUser, signUpWithEmail } from '@/services/auth';
import { getProfile, updateProfileCountry, upsertProfile } from '@/services/profiles';
import type { Profile } from '@/types/profile';
import { supabase } from '@/lib/supabase';

type AuthResult = {
  error: string | null;
};

type AuthState = {
  initialized: boolean;
  loading: boolean;
  profile: Profile | null;
  session: Session | null;
  initialize: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<AuthResult>;
  signUp: (email: string, password: string) => Promise<AuthResult>;
  signOut: () => Promise<AuthResult>;
  updateSelectedCountry: (countryCode: string) => Promise<AuthResult>;
};

async function loadProfile(session: Session | null) {
  if (!session) {
    return null;
  }

  const existing = await getProfile(session.user.id);
  if (existing.data) {
    return existing.data;
  }

  const created = await upsertProfile({
    userId: session.user.id,
    email: session.user.email,
  });

  return created.data;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  initialized: false,
  loading: false,
  profile: null,
  session: null,

  initialize: async () => {
    const { data } = await supabase.auth.getSession();
    const profile = await loadProfile(data.session);

    set({
      initialized: true,
      profile,
      session: data.session,
    });

    supabase.auth.onAuthStateChange(async (_event, session) => {
      const nextProfile = await loadProfile(session);
      set({ profile: nextProfile, session });
    });
  },

  signIn: async (email, password) => {
    set({ loading: true });
    const result = await signInWithEmail({ email, password });
    const profile = await loadProfile(result.data?.session ?? null);
    set({ loading: false, profile, session: result.data?.session ?? null });

    return { error: result.error };
  },

  signUp: async (email, password) => {
    set({ loading: true });
    const result = await signUpWithEmail({ email, password });
    const profile = await loadProfile(result.data?.session ?? null);
    set({ loading: false, profile, session: result.data?.session ?? null });

    return { error: result.error };
  },

  signOut: async () => {
    set({ loading: true });
    const result = await signOutUser();
    set({ loading: false, profile: null, session: null });

    return { error: result.error };
  },

  updateSelectedCountry: async (countryCode) => {
    const session = get().session;
    if (!session) {
      return { error: 'Sessao nao encontrada.' };
    }

    const result = await updateProfileCountry({
      countryCode,
      userId: session.user.id,
    });

    if (result.data) {
      set({ profile: { ...result.data, email: result.data.email ?? session.user.email ?? null } });
    }

    return { error: result.error };
  },
}));
