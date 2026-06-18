import { Link } from 'expo-router';

import { AuthScreen } from '@/features/auth/AuthScreen';

export default function LoginScreen() {
  return (
    <AuthScreen
      footer={
        <Link href="/(auth)/sign-up" style={{ color: '#1D4ED8', fontWeight: '700' }}>
          Criar conta
        </Link>
      }
      mode="login"
    />
  );
}
