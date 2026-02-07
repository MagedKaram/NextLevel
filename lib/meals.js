import sql from "better-sqlite3";
import { unstable_cache } from "next/cache";
import xss from "xss";
import fs from "node:fs/promises";
import path from "node:path";
import slugify from "slugify";

const db = sql("meals.db");

export const getAllMeals = unstable_cache(
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return db.prepare("SELECT * FROM meals").all();
  },
  ["meals"],
  {
    tags: ["meals"],
    revalidate: 3600, // كل ساعة
  },
);

export const getMealBySlug = unstable_cache(
  async (slug) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  },
  ["meal-by-slug"], // cache key ثابت
  {
    tags: ["meals"], // tag واحد لكل الوجبات
    revalidate: 3600, // كل ساعة
  },
);

export async function createMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // لو meal.image عبارة عن File
  const ext = path.extname(meal.image.name).slice(1) || "png";
  const imageName = `${meal.slug}.${ext}`;
  const imagePath = path.join(process.cwd(), "public", "images", imageName);

  const buffer = Buffer.from(await meal.image.arrayBuffer());
  await fs.writeFile(imagePath, buffer);

  meal.image = `/images/${imageName}`;

  db.prepare(
    "INSERT INTO meals (title, summary, instructions, image, slug, creator, creator_email) VALUES (@title,@summary,@instructions,@image,@slug,@creator,@creator_email)",
  ).run(meal);
}
