"use server";

import { createMeal } from "./meals";

export async function shareMeal(formData: FormData) {
  const mealData = {
    title: formData.get("title")?.toString() || "",
    summary: formData.get("summary")?.toString() || "",
    instructions: formData.get("instructions")?.toString() || "",
    creator: formData.get("name")?.toString() || "",
    creator_email: formData.get("email")?.toString() || "",
    image: formData.get("image"),
  };
  await createMeal(mealData);
}
