import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TasksScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-950 items-center justify-center px-6">
      <Text className="text-5xl mb-4">📝</Text>
      <Text className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        Tasks Coming Soon
      </Text>
      <Text className="text-gray-500 dark:text-gray-400 text-center">
        Phase 2 mein login aur Phase 3 mein todo list add hogi.
      </Text>
    </SafeAreaView>
  );
}
