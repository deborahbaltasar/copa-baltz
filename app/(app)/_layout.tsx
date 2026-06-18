import { Redirect, Tabs } from 'expo-router';
import { Text } from 'react-native';

import { LoadingState } from '@/components/LoadingState';
import { getCountryTheme } from '@/constants/themes';
import { useAuthStore } from '@/store/authStore';

export default function AppLayout() {
  const initialized = useAuthStore((state) => state.initialized);
  const session = useAuthStore((state) => state.session);
  const profile = useAuthStore((state) => state.profile);
  const theme = getCountryTheme(profile?.selected_country_code);

  if (!initialized) {
    return <LoadingState label="Carregando sessao" />;
  }

  if (!session) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.cardBackground,
          borderTopColor: theme.border,
          height: 74,
          paddingTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Album',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 22 }}>□</Text>,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 22 }}>○</Text>,
        }}
      />
    </Tabs>
  );
}
