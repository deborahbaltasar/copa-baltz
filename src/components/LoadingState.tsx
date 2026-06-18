import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { DEFAULT_THEME } from '@/constants/themes';

type LoadingStateProps = {
  label?: string;
};

export function LoadingState({ label = 'Carregando' }: LoadingStateProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={DEFAULT_THEME.primary} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: DEFAULT_THEME.background,
    flex: 1,
    gap: 12,
    justifyContent: 'center',
  },
  label: {
    color: DEFAULT_THEME.textSecondary,
    fontSize: 15,
    fontWeight: '600',
  },
});
