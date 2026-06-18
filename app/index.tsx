import { Redirect } from 'expo-router';

import { LoadingState } from '@/components/LoadingState';
import { useAuthStore } from '@/store/authStore';

export default function IndexRoute() {
  const initialized = useAuthStore((state) => state.initialized);
  const session = useAuthStore((state) => state.session);

  if (!initialized) {
    return <LoadingState label="Preparando seu album" />;
  }

  return <Redirect href={session ? '/(app)' : '/(auth)/login'} />;
}
