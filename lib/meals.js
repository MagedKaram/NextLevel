import sql from "better-sqlite3";
const db = sql("meals.db");

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
  const stmt = db.prepare("SELECT * FROM meals");
  return stmt.all();
}
