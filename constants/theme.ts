import type { Category, Priority } from '@/types';

export const CATEGORIES: { id: Category; label: string; emoji: string; color: string }[] = [
  { id: 'work', label: 'Work', emoji: '💼', color: '#6366F1' },
  { id: 'personal', label: 'Personal', emoji: '🏠', color: '#10B981' },
  { id: 'shopping', label: 'Shopping', emoji: '🛒', color: '#F59E0B' },
];

export const PRIORITIES: { id: Priority; label: string; emoji: string; color: string }[] = [
  { id: 'high', label: 'High', emoji: '🔴', color: '#EF4444' },
  { id: 'medium', label: 'Medium', emoji: '🟡', color: '#F59E0B' },
  { id: 'low', label: 'Low', emoji: '🟢', color: '#22C55E' },
];

export const POMODORO = {
  WORK_MINUTES: 25,
  BREAK_MINUTES: 5,
  LONG_BREAK_MINUTES: 15,
};

export const APP_NAME = 'TaskMaster';
