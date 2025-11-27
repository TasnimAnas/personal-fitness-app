import { GoogleGenAI, Type, Schema } from "@google/genai";
import { WeeklyPlan } from "../types";
import { savedJson } from "./savedJson";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

const weeklyPlanSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    introduction: {
      type: Type.STRING,
      description:
        "A short motivational summary for a 25M, 5'6, 72kg student with belly fat.",
    },
    days: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          dayName: { type: Type.STRING },
          workout: {
            type: Type.OBJECT,
            properties: {
              focus: { type: Type.STRING },
              durationMinutes: { type: Type.INTEGER },
              exercises: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    sets: { type: Type.STRING },
                    reps: { type: Type.STRING },
                    notes: { type: Type.STRING },
                  },
                  required: ["name", "sets", "reps"],
                },
              },
            },
            required: ["focus", "durationMinutes", "exercises"],
          },
          meals: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                type: { type: Type.STRING },
                name: { type: Type.STRING },
                ingredients: { type: Type.ARRAY, items: { type: Type.STRING } },
                calories: { type: Type.INTEGER },
                protein: { type: Type.INTEGER },
                prepTimeMinutes: { type: Type.INTEGER },
              },
              required: [
                "type",
                "name",
                "ingredients",
                "calories",
                "protein",
                "prepTimeMinutes",
              ],
            },
          },
          supplements: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                timing: { type: Type.STRING },
                dosage: { type: Type.STRING },
                reason: { type: Type.STRING },
              },
              required: ["name", "timing", "dosage", "reason"],
            },
          },
        },
        required: ["dayName", "workout", "meals", "supplements"],
      },
    },
  },
  required: ["introduction", "days"],
};

export const generateWeeklyPlan = async (): Promise<WeeklyPlan | null> => {
  return savedJson as WeeklyPlan;
  if (!apiKey) {
    console.warn("No API Key provided");
    return null;
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
        Create a detailed 7-day fitness and nutrition plan for a 25-year-old male, 5'6" (168cm), 72kg.
        Physique: "Skinny fat" (mostly belly fat).
        Goal: Body recomposition (lose fat, gain muscle strength).
        Constraint: User is a student. Meals must be cheap, fast (under 20 mins prep), and easy to cook.
        Workout: Gym-based, focus on compound movements for strength.
        Supplements: Basic effective stack (Whey, Creatine, etc.).
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: weeklyPlanSchema,
        systemInstruction:
          "You are an expert fitness coach for students. Be encouraging but direct.",
      },
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as WeeklyPlan;
  } catch (error) {
    console.error("Failed to generate plan:", error);
    return null;
  }
};
