import { Link } from 'expo-router';

import { AuthScreen } from '@/features/auth/AuthScreen';

export default function SignUpScreen() {
  return (
    <AuthScreen
      footer={
        <Link href="/(auth)/login" style={{ color: '#1D4ED8', fontWeight: '700' }}>
          Ja tenho conta
        </Link>
      }
      mode="sign-up"
    />
  );
}
