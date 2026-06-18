import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemePreview } from '@/components/ThemePreview';
import { COUNTRIES } from '@/constants/countries';
import { getCountryTheme } from '@/constants/themes';
import { useAuthStore } from '@/store/authStore';

export default function ProfileScreen() {
  const [savingCountryCode, setSavingCountryCode] = useState<string | null>(null);
  const profile = useAuthStore((state) => state.profile);
  const session = useAuthStore((state) => state.session);
  const updateSelectedCountry = useAuthStore((state) => state.updateSelectedCountry);
  const signOut = useAuthStore((state) => state.signOut);
  const theme = getCountryTheme(profile?.selected_country_code);

  async function handleSelectCountry(countryCode: string) {
    setSavingCountryCode(countryCode);
    const result = await updateSelectedCountry(countryCode);
    setSavingCountryCode(null);

    if (result.error) {
      Alert.alert('Nao foi possivel salvar', result.error);
    }
  }

  async function handleSignOut() {
    const result = await signOut();
    if (result.error) {
      Alert.alert('Nao foi possivel sair', result.error);
    }
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View>
          <Text style={[styles.eyebrow, { color: theme.textSecondary }]}>Perfil</Text>
          <Text style={[styles.title, { color: theme.textPrimary }]}>Sua selecao</Text>
          <Text style={[styles.email, { color: theme.textSecondary }]}>
            {profile?.email ?? session?.user.email ?? 'Email nao disponivel'}
          </Text>
        </View>

        <View
          style={[
            styles.previewCard,
            { backgroundColor: theme.cardBackground, borderColor: theme.border },
          ]}
        >
          <Text style={styles.flag}>{profile?.selected_country_flag ?? '🏆'}</Text>
          <View style={styles.previewText}>
            <Text style={[styles.previewTitle, { color: theme.textPrimary }]}>
              {profile?.selected_country_name ?? 'Tema neutro'}
            </Text>
            <Text style={[styles.previewDescription, { color: theme.textSecondary }]}>
              O pais altera acentos visuais sem mudar a estrutura do app.
            </Text>
          </View>
          <ThemePreview theme={theme} />
        </View>

        <View style={styles.countryList}>
          {COUNTRIES.map((country) => {
            const selected = country.country_code === profile?.selected_country_code;
            const countryTheme = getCountryTheme(country.country_code);

            return (
              <Pressable
                accessibilityRole="button"
                disabled={savingCountryCode === country.country_code}
                key={country.country_code}
                onPress={() => handleSelectCountry(country.country_code)}
                style={[
                  styles.countryRow,
                  {
                    backgroundColor: selected ? countryTheme.secondary : theme.cardBackground,
                    borderColor: selected ? countryTheme.primary : theme.border,
                  },
                ]}
              >
                <Text style={styles.countryFlag}>{country.flag_emoji}</Text>
                <View style={styles.countryInfo}>
                  <Text style={[styles.countryName, { color: theme.textPrimary }]}>
                    {country.country_name}
                  </Text>
                  <Text style={[styles.countryCode, { color: theme.textSecondary }]}>
                    {savingCountryCode === country.country_code ? 'Salvando...' : country.country_code}
                  </Text>
                </View>
                <View style={[styles.colorDot, { backgroundColor: countryTheme.primary }]} />
              </Pressable>
            );
          })}
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={handleSignOut}
          style={[styles.logoutButton, { borderColor: theme.border }]}
        >
          <Text style={[styles.logoutText, { color: theme.textPrimary }]}>Sair da conta</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    gap: 22,
    padding: 24,
    paddingBottom: 42,
  },
  eyebrow: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0,
    marginBottom: 8,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 0,
  },
  email: {
    fontSize: 16,
    marginTop: 8,
  },
  previewCard: {
    borderRadius: 24,
    borderWidth: 1,
    gap: 14,
    padding: 20,
  },
  flag: {
    fontSize: 42,
  },
  previewText: {
    gap: 6,
  },
  previewTitle: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 0,
  },
  previewDescription: {
    fontSize: 15,
    lineHeight: 22,
  },
  countryList: {
    gap: 10,
  },
  countryRow: {
    alignItems: 'center',
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 14,
    padding: 14,
  },
  countryFlag: {
    fontSize: 28,
  },
  countryInfo: {
    flex: 1,
    gap: 3,
  },
  countryName: {
    fontSize: 17,
    fontWeight: '700',
  },
  countryCode: {
    fontSize: 13,
    fontWeight: '600',
  },
  colorDot: {
    borderRadius: 8,
    height: 16,
    width: 16,
  },
  logoutButton: {
    alignItems: 'center',
    borderRadius: 18,
    borderWidth: 1,
    padding: 16,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '700',
  },
});
