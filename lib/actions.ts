"use server";

import { redirect } from "next/navigation";
import { createMeal } from "./meals";

function validateMealData(text: string) {
  return text! || text.trim() === " ";
}

export async function shareMeal(formData: FormData) {
  const mealData = {
    title: formData.get("title")?.toString() || "",
    summary: formData.get("summary")?.toString() || "",
    instructions: formData.get("instructions")?.toString() || "",
    creator: formData.get("name")?.toString() || "",
    creator_email: formData.get("email")?.toString() || "",
    image: formData.get("image"),
  };
  if (
    !validateMealData(mealData.title) ||
    !validateMealData(mealData.summary) ||
    !validateMealData(mealData.instructions) ||
    !validateMealData(mealData.creator) ||
    !validateMealData(mealData.creator_email) ||
    !mealData.image ||
    (mealData.image instanceof File && mealData.image.size === 0)
  ) {
    throw new Error("Invalid meal data");
  }
  await createMeal(mealData);
  redirect("/meals");
}
