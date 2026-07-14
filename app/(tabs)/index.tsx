import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CATEGORIES, APP_NAME } from '@/constants/theme';
import { supabase } from '@/lib/supabase';

export default function HomeScreen() {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    async function checkSetup() {
      try {
        const { error } = await supabase.auth.getSession();
        if (error) throw error;
        setStatus('ready');
      } catch (err) {
        setStatus('error');
        setErrorMsg(err instanceof Error ? err.message : 'Connection failed');
      }
    }
    checkSetup();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-950">
      <View className="flex-1 px-6 pt-8">
        {/* Header */}
        <View className="items-center mb-10">
          <View className="w-20 h-20 rounded-3xl bg-primary items-center justify-center shadow-lg mb-4">
            <Text className="text-4xl">✅</Text>
          </View>
          <Text className="text-3xl font-bold text-gray-900 dark:text-white">
            {APP_NAME}
          </Text>
          <Text className="text-base text-gray-500 dark:text-gray-400 mt-2 text-center">
            Todo • Calendar • Pomodoro • Streaks
          </Text>
        </View>

        {/* Status Card */}
        <View className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-5 mb-6 border border-gray-100 dark:border-gray-800">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Phase 1 Setup
          </Text>

          {status === 'loading' && (
            <View className="flex-row items-center gap-3">
              <ActivityIndicator color="#6366F1" />
              <Text className="text-gray-600 dark:text-gray-400">
                Supabase se connect ho raha hai...
              </Text>
            </View>
          )}

          {status === 'ready' && (
            <View className="gap-2">
              <StatusRow label="Expo + TypeScript" done />
              <StatusRow label="NativeWind (Tailwind)" done />
              <StatusRow label="Supabase Client" done />
              <StatusRow label="Zustand Store" done />
              <StatusRow label="Secure Token Storage" done />
            </View>
          )}

          {status === 'error' && (
            <Text className="text-red-500">{errorMsg}</Text>
          )}
        </View>

        {/* Categories Preview */}
        <Text className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
          Coming in Phase 3
        </Text>
        <View className="flex-row gap-3">
          {CATEGORIES.map((cat) => (
            <View
              key={cat.id}
              className="flex-1 rounded-xl p-3 items-center"
              style={{ backgroundColor: cat.color + '20' }}>
              <Text className="text-2xl mb-1">{cat.emoji}</Text>
              <Text className="text-xs font-medium text-gray-700 dark:text-gray-300">
                {cat.label}
              </Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View className="mt-auto pb-4 items-center">
          <Text className="text-primary font-semibold text-base">
            Phase 1 Complete! 🎉
          </Text>
          <Text className="text-gray-400 dark:text-gray-500 text-sm mt-1 text-center">
            Agla step: Login & Signup (Phase 2)
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

function StatusRow({ label, done }: { label: string; done: boolean }) {
  return (
    <View className="flex-row items-center gap-2">
      <Text className="text-green-500">{done ? '✓' : '○'}</Text>
      <Text className="text-gray-700 dark:text-gray-300">{label}</Text>
    </View>
  );
}
