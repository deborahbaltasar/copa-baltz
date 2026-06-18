import { StyleSheet, View } from 'react-native';

import type { CountryTheme } from '@/constants/themes';

type ThemePreviewProps = {
  theme: CountryTheme;
};

export function ThemePreview({ theme }: ThemePreviewProps) {
  return (
    <View style={styles.container}>
      {[theme.primary, theme.secondary, theme.accent, theme.success, theme.warning].map((color) => (
        <View
          key={color}
          style={[
            styles.swatch,
            {
              backgroundColor: color,
              borderColor: theme.border,
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
  swatch: {
    borderRadius: 10,
    borderWidth: 1,
    height: 20,
    width: 36,
  },
});
