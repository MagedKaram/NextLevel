import React, { Suspense } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/MealsGrid";
import { getAllMeals } from "@/lib/meals";

async function FetchMeals() {
  const meals = await getAllMeals();
  return <MealsGrid meals={meals} />;
}

const Meals = () => {
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
        <Suspense fallback={<p className={styles.loading}>Loading meals...</p>}>
          <FetchMeals />
        </Suspense>
      </main>
    </>
  );
};

export default Meals;
