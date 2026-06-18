import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';

import { PrimaryButton } from '@/components/PrimaryButton';
import { ThemePreview } from '@/components/ThemePreview';
import { getCountryTheme } from '@/constants/themes';
import { useAuthStore } from '@/store/authStore';

export default function HomeScreen() {
  const profile = useAuthStore((state) => state.profile);
  const theme = getCountryTheme(profile?.selected_country_code);
  const countryName = profile?.selected_country_name ?? 'tema neutro';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <View>
          <Text style={[styles.eyebrow, { color: theme.textSecondary }]}>Copa Baltz</Text>
          <Text style={[styles.title, { color: theme.textPrimary }]}>Seu album da Copa</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Base pronta para acompanhar multiplos albuns com progresso separado.
          </Text>
        </View>

        <View
          style={[
            styles.card,
            { backgroundColor: theme.cardBackground, borderColor: theme.border },
          ]}
        >
          <Text style={styles.flag}>{profile?.selected_country_flag ?? '🏆'}</Text>
          <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>
            Tema atual: {countryName}
          </Text>
          <Text style={[styles.cardText, { color: theme.textSecondary }]}>
            Escolha sua selecao favorita no perfil para aplicar acentos visuais no app.
          </Text>
          <ThemePreview theme={theme} />
          <PrimaryButton label="Abrir perfil" href="/(app)/profile" theme={theme} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    gap: 28,
    padding: 24,
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
  subtitle: {
    fontSize: 17,
    lineHeight: 24,
    marginTop: 10,
  },
  card: {
    borderRadius: 24,
    borderWidth: 1,
    gap: 16,
    padding: 22,
    shadowColor: '#111827',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
  },
  flag: {
    fontSize: 42,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 0,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 23,
  },
});
