import { Redirect } from 'expo-router';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PrimaryButton } from '@/components/PrimaryButton';
import { DEFAULT_THEME } from '@/constants/themes';
import { useAuthStore } from '@/store/authStore';

type AuthScreenProps = {
  footer: ReactNode;
  mode: 'login' | 'sign-up';
};

export function AuthScreen({ footer, mode }: AuthScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = useAuthStore((state) => state.loading);
  const session = useAuthStore((state) => state.session);
  const signIn = useAuthStore((state) => state.signIn);
  const signUp = useAuthStore((state) => state.signUp);
  const isSignUp = mode === 'sign-up';

  if (session) {
    return <Redirect href="/(app)" />;
  }

  async function handleSubmit() {
    if (!email.trim() || password.length < 6) {
      Alert.alert('Revise os dados', 'Informe um email e uma senha com pelo menos 6 caracteres.');
      return;
    }

    const result = isSignUp ? await signUp(email, password) : await signIn(email, password);

    if (result.error) {
      Alert.alert('Nao foi possivel continuar', result.error);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', default: undefined })}
        style={styles.container}
      >
        <View style={styles.header}>
          <Text style={styles.eyebrow}>Copa Baltz</Text>
          <Text style={styles.title}>{isSignUp ? 'Crie sua conta' : 'Entre na sua conta'}</Text>
          <Text style={styles.subtitle}>
            Organize seus albuns da Copa com uma experiencia limpa e personalizada.
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              onChangeText={setEmail}
              placeholder="voce@email.com"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
              value={email}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              onChangeText={setPassword}
              placeholder="Minimo 6 caracteres"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              style={styles.input}
              value={password}
            />
          </View>

          <PrimaryButton
            label={isSignUp ? 'Criar conta' : 'Entrar'}
            loading={loading}
            onPress={handleSubmit}
            theme={DEFAULT_THEME}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>{isSignUp ? 'Ja tem cadastro?' : 'Novo por aqui?'}</Text>
          {footer}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: DEFAULT_THEME.background,
    flex: 1,
  },
  container: {
    flex: 1,
    gap: 32,
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    gap: 10,
  },
  eyebrow: {
    color: DEFAULT_THEME.primary,
    fontSize: 14,
    fontWeight: '800',
  },
  title: {
    color: DEFAULT_THEME.textPrimary,
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 0,
  },
  subtitle: {
    color: DEFAULT_THEME.textSecondary,
    fontSize: 17,
    lineHeight: 24,
  },
  form: {
    backgroundColor: DEFAULT_THEME.cardBackground,
    borderColor: DEFAULT_THEME.border,
    borderRadius: 24,
    borderWidth: 1,
    gap: 18,
    padding: 20,
  },
  field: {
    gap: 8,
  },
  label: {
    color: DEFAULT_THEME.textPrimary,
    fontSize: 14,
    fontWeight: '700',
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderColor: DEFAULT_THEME.border,
    borderRadius: 16,
    borderWidth: 1,
    color: DEFAULT_THEME.textPrimary,
    fontSize: 16,
    minHeight: 52,
    paddingHorizontal: 14,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  footerText: {
    color: DEFAULT_THEME.textSecondary,
    fontSize: 15,
  },
});
