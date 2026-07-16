import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";
import Constants from "expo-constants";
import { Platform } from "react-native";

const supabaseUrl = Constants.expoConfig?.extra?.supabaseUrl 
  ?? process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = Constants.expoConfig?.extra?.supabaseAnonKey 
  ?? process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

// Cross-platform storage adapter
const createStorageAdapter = () => {
  if (Platform.OS === 'web') {
    // Web: Use localStorage
    return {
      getItem: async (key: string) => {
        try {
          return localStorage.getItem(key);
        } catch (error) {
          return null;
        }
      },
      setItem: async (key: string, value: string) => {
        try {
          localStorage.setItem(key, value);
        } catch (error) {
          console.error('Error saving to localStorage:', error);
        }
      },
      removeItem: async (key: string) => {
        try {
          localStorage.removeItem(key);
        } catch (error) {
          console.error('Error removing from localStorage:', error);
        }
      },
    };
  } else {
    // Mobile: Use expo-secure-store
    return {
      getItem: SecureStore.getItemAsync,
      setItem: SecureStore.setItemAsync,
      removeItem: SecureStore.deleteItemAsync,
    };
  }
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: createStorageAdapter(),
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});