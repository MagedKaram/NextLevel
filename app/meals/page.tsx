import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/MealsGrid";
import { getAllMeals } from "@/lib/meals";

const Meals = async () => {
  const meals = await getAllMeals();
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals,created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href={"/meals/share"}>share your Favorites Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default Meals;
