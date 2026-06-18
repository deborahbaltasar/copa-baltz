import { Link, type Href } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

import type { CountryTheme } from '@/constants/themes';

type PrimaryButtonProps = {
  href?: Href;
  label: string;
  loading?: boolean;
  onPress?: () => void;
  theme: CountryTheme;
};

export function PrimaryButton({ href, label, loading, onPress, theme }: PrimaryButtonProps) {
  const content = (
    <Pressable
      accessibilityRole="button"
      disabled={loading}
      onPress={onPress}
      style={[styles.button, { backgroundColor: theme.primary, opacity: loading ? 0.7 : 1 }]}
    >
      <Text style={styles.label}>{loading ? 'Aguarde...' : label}</Text>
    </Pressable>
  );

  if (href) {
    return <Link asChild href={href}>{content}</Link>;
  }

  return content;
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 18,
    minHeight: 54,
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
});
