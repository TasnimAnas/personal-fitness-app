export enum Tab {
  WORKOUT = 'WORKOUT',
  MEALS = 'MEALS',
  SUPPLEMENTS = 'SUPPLEMENTS',
}

export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  notes?: string;
}

export interface WorkoutSession {
  focus: string; // e.g., "Push Day", "Legs", "Rest"
  durationMinutes: number;
  exercises: Exercise[];
}

export interface Meal {
  type: string; // Breakfast, Lunch, Dinner, Snack
  name: string;
  ingredients: string[];
  calories: number;
  protein: number;
  prepTimeMinutes: number;
}

export interface Supplement {
  name: string;
  timing: string;
  dosage: string;
  reason: string;
}

export interface DailyPlan {
  dayName: string; // Monday, Tuesday...
  workout: WorkoutSession;
  meals: Meal[];
  supplements: Supplement[];
}

export interface WeeklyPlan {
  introduction: string;
  days: DailyPlan[];
}