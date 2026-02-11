"use server";

import { redirect } from "next/navigation";
import { createMeal } from "./meals";
import { revalidatePath } from "next/cache";

type ActionState = { message: string | null };

function validateMealData(text: string) {
  return text.trim() !== "";
}

export async function shareMeal(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
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
    return {
      message:
        "Invalid input. Please fill in all required fields and provide an image.",
    };
  }
  await createMeal(mealData);
  revalidatePath("/meals", "layout");
  redirect("/meals");
}
