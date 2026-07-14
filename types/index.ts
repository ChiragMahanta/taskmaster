export type Priority = 'high' | 'medium' | 'low';

export type Category = 'work' | 'personal' | 'shopping';

export interface Task {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  completed: boolean;
  category: Category;
  priority: Priority;
  due_date?: string;
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  id: string;
  email: string;
  streak_count: number;
  last_active_date?: string;
}
