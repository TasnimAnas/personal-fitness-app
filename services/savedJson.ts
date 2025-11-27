export const savedJson = {
  introduction:
    "This week is designed to help you, a 25-year-old student at 5'6\" and 72kg, break out of the skinny-fat cycle by building strength with efficient compound lifts while trimming belly fat through smart nutrition. Every workout is focused, every meal is affordable and quick, and supplements are minimal but effective. Stay consistent and you’ll feel and see the difference within weeks.",
  days: [
    {
      dayName: "Monday – Upper Strength",
      workout: {
        focus: "Push/Pull Compound Strength",
        durationMinutes: 60,
        exercises: [
          {
            name: "Bench Press",
            sets: "4",
            reps: "5",
            notes: "Progressive overload",
          },
          { name: "Barbell Row", sets: "4", reps: "6–8", notes: "" },
          { name: "Overhead Press", sets: "3", reps: "5", notes: "" },
          { name: "Lat Pulldown", sets: "3", reps: "8–10", notes: "" },
          {
            name: "Dumbbell Incline Press",
            sets: "3",
            reps: "8–10",
            notes: "",
          },
        ],
      },
      meals: [
        {
          type: "Breakfast",
          name: "High-Protein Oats",
          ingredients: ["Oats", "Milk or water", "Whey scoop", "Banana"],
          calories: 450,
          protein: 32,
          prepTimeMinutes: 10,
        },
        {
          type: "Lunch",
          name: "Chicken Rice Bowl",
          ingredients: ["Chicken thigh", "Rice", "Frozen veggies", "Soy sauce"],
          calories: 600,
          protein: 40,
          prepTimeMinutes: 25,
        },
        {
          type: "Dinner",
          name: "Egg & Tuna Stir Fry",
          ingredients: ["Eggs", "Canned tuna", "Rice or noodles", "Veggies"],
          calories: 550,
          protein: 42,
          prepTimeMinutes: 20,
        },
      ],
      supplements: [
        {
          name: "Whey Protein",
          timing: "Post-workout",
          dosage: "1 scoop",
          reason: "Helps meet daily protein intake for recomposition",
        },
        {
          name: "Creatine Monohydrate",
          timing: "Any time (daily)",
          dosage: "5g",
          reason: "Improves strength and muscle gain",
        },
      ],
    },
    {
      dayName: "Tuesday – Lower Strength",
      workout: {
        focus: "Legs & Core",
        durationMinutes: 60,
        exercises: [
          { name: "Back Squat", sets: "4", reps: "5", notes: "" },
          { name: "Romanian Deadlift", sets: "4", reps: "6–8", notes: "" },
          { name: "Leg Press", sets: "3", reps: "8–10", notes: "" },
          { name: "Calf Raise", sets: "3", reps: "12–15", notes: "" },
          { name: "Plank", sets: "3", reps: "45 sec", notes: "" },
        ],
      },
      meals: [
        {
          type: "Breakfast",
          name: "Greek Yogurt & Fruit",
          ingredients: ["Greek yogurt", "Mixed fruit", "Honey"],
          calories: 400,
          protein: 28,
          prepTimeMinutes: 5,
        },
        {
          type: "Lunch",
          name: "Beef & Potato Skillet",
          ingredients: ["Ground beef", "Potatoes", "Onion", "Seasoning"],
          calories: 650,
          protein: 38,
          prepTimeMinutes: 30,
        },
        {
          type: "Dinner",
          name: "Quick Veggie Omelette",
          ingredients: ["Eggs", "Cheese", "Vegetables"],
          calories: 500,
          protein: 36,
          prepTimeMinutes: 12,
        },
      ],
      supplements: [
        {
          name: "Creatine Monohydrate",
          timing: "Any time",
          dosage: "5g",
          reason: "Supports lower-body strength gains",
        },
      ],
    },
    {
      dayName: "Wednesday – Active Recovery",
      workout: {
        focus: "Light Movement & Mobility",
        durationMinutes: 30,
        exercises: [
          {
            name: "Light Cycling or Walking",
            sets: "1",
            reps: "30 min",
            notes: "",
          },
          { name: "Full Body Stretch", sets: "1", reps: "10 min", notes: "" },
        ],
      },
      meals: [
        {
          type: "Breakfast",
          name: "Peanut Butter Toast + Milk",
          ingredients: ["Whole wheat bread", "Peanut butter", "Glass of milk"],
          calories: 500,
          protein: 24,
          prepTimeMinutes: 5,
        },
        {
          type: "Lunch",
          name: "Cheap Pasta Protein Bowl",
          ingredients: ["Pasta", "Canned tuna", "Tomato sauce"],
          calories: 650,
          protein: 42,
          prepTimeMinutes: 20,
        },
        {
          type: "Dinner",
          name: "Chicken Wrap",
          ingredients: ["Tortilla", "Chicken", "Lettuce", "Yogurt sauce"],
          calories: 520,
          protein: 35,
          prepTimeMinutes: 15,
        },
      ],
      supplements: [
        {
          name: "Creatine Monohydrate",
          timing: "Any time",
          dosage: "5g",
          reason: "Maintains saturation",
        },
      ],
    },
    {
      dayName: "Thursday – Upper Hypertrophy",
      workout: {
        focus: "Volume Upper Body",
        durationMinutes: 65,
        exercises: [
          { name: "Incline Bench Press", sets: "4", reps: "8–10", notes: "" },
          { name: "Seated Cable Row", sets: "4", reps: "10", notes: "" },
          { name: "Lateral Raises", sets: "3", reps: "12–15", notes: "" },
          { name: "Face Pulls", sets: "3", reps: "12–15", notes: "" },
          { name: "Chest Fly Machine", sets: "3", reps: "10–12", notes: "" },
        ],
      },
      meals: [
        {
          type: "Breakfast",
          name: "Protein Smoothie",
          ingredients: ["Whey", "Milk", "Frozen fruit", "Oats"],
          calories: 450,
          protein: 35,
          prepTimeMinutes: 5,
        },
        {
          type: "Lunch",
          name: "Egg Fried Rice",
          ingredients: ["Eggs", "Rice", "Soy sauce", "Veggies"],
          calories: 600,
          protein: 30,
          prepTimeMinutes: 20,
        },
        {
          type: "Dinner",
          name: "Budget Chili",
          ingredients: ["Ground turkey", "Beans", "Tomato sauce"],
          calories: 550,
          protein: 38,
          prepTimeMinutes: 30,
        },
      ],
      supplements: [
        {
          name: "Whey Protein",
          timing: "Post-workout",
          dosage: "1 scoop",
          reason: "Supports muscle repair",
        },
      ],
    },
    {
      dayName: "Friday – Lower Hypertrophy",
      workout: {
        focus: "Leg Volume & Core",
        durationMinutes: 60,
        exercises: [
          { name: "Front Squat", sets: "4", reps: "6–8", notes: "" },
          { name: "Hamstring Curl", sets: "3", reps: "10–12", notes: "" },
          { name: "Glute Bridge", sets: "3", reps: "10–12", notes: "" },
          { name: "Leg Extension", sets: "3", reps: "12–15", notes: "" },
          { name: "Hanging Knee Raises", sets: "3", reps: "12–15", notes: "" },
        ],
      },
      meals: [
        {
          type: "Breakfast",
          name: "Scrambled Eggs + Toast",
          ingredients: ["Eggs", "Bread", "Butter"],
          calories: 450,
          protein: 26,
          prepTimeMinutes: 10,
        },
        {
          type: "Lunch",
          name: "Chicken Pasta",
          ingredients: ["Chicken breast", "Pasta", "Pesto or tomato sauce"],
          calories: 650,
          protein: 42,
          prepTimeMinutes: 25,
        },
        {
          type: "Dinner",
          name: "Tofu Rice Bowl",
          ingredients: ["Tofu", "Rice", "Veggies", "Soy sauce"],
          calories: 520,
          protein: 30,
          prepTimeMinutes: 20,
        },
      ],
      supplements: [
        {
          name: "Creatine Monohydrate",
          timing: "Any time",
          dosage: "5g",
          reason: "Supports training volume",
        },
      ],
    },
    {
      dayName: "Saturday – Full Body Strength",
      workout: {
        focus: "Compound Full Body",
        durationMinutes: 60,
        exercises: [
          { name: "Deadlift", sets: "3", reps: "5", notes: "" },
          { name: "Bench Press", sets: "3", reps: "5", notes: "" },
          {
            name: "Pull Ups",
            sets: "3",
            reps: "6–8",
            notes: "Assisted if needed",
          },
          { name: "Bicep Curls", sets: "3", reps: "10", notes: "" },
          { name: "Tricep Rope Pushdown", sets: "3", reps: "10–12", notes: "" },
        ],
      },
      meals: [
        {
          type: "Breakfast",
          name: "High-Protein Yogurt Bowl",
          ingredients: ["Greek yogurt", "Granola", "Fruit"],
          calories: 450,
          protein: 28,
          prepTimeMinutes: 5,
        },
        {
          type: "Lunch",
          name: "Simple Burrito Bowl",
          ingredients: ["Rice", "Beans", "Chicken", "Salsa"],
          calories: 650,
          protein: 40,
          prepTimeMinutes: 25,
        },
        {
          type: "Dinner",
          name: "Quick Stir Fry",
          ingredients: ["Chicken or tofu", "Veggies", "Soy sauce", "Rice"],
          calories: 520,
          protein: 35,
          prepTimeMinutes: 18,
        },
      ],
      supplements: [
        {
          name: "Whey Protein",
          timing: "Post-workout",
          dosage: "1 scoop",
          reason: "Boosts protein intake",
        },
      ],
    },
    {
      dayName: "Sunday – Rest",
      workout: {
        focus: "Rest & Light Mobility",
        durationMinutes: 20,
        exercises: [
          { name: "Light Walking", sets: "1", reps: "20 min", notes: "" },
        ],
      },
      meals: [
        {
          type: "Breakfast",
          name: "Omelette & Toast",
          ingredients: ["Eggs", "Cheese", "Veggies", "Bread"],
          calories: 480,
          protein: 30,
          prepTimeMinutes: 10,
        },
        {
          type: "Lunch",
          name: "Budget Chicken Curry",
          ingredients: ["Chicken", "Curry paste", "Coconut milk", "Rice"],
          calories: 650,
          protein: 40,
          prepTimeMinutes: 30,
        },
        {
          type: "Dinner",
          name: "Tuna & Veggie Pasta",
          ingredients: ["Pasta", "Canned tuna", "Veggies"],
          calories: 550,
          protein: 36,
          prepTimeMinutes: 20,
        },
      ],
      supplements: [
        {
          name: "Creatine Monohydrate",
          timing: "Any time",
          dosage: "5g",
          reason: "Maintains levels even on rest day",
        },
      ],
    },
  ],
};
