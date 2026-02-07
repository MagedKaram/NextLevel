import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import { get } from "http";
import { getMealBySlug } from "@/lib/meals";
import NotFound from "@/app/not-found";
import { notFound } from "next/navigation";

const MealsDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const meal = await getMealBySlug(slug);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replaceAll("\n", "<br/>");

  return (
    <>
      <header className={style.header}>
        <div className={style.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={style.headerText}>
          <h1>{meal.title}</h1>
          <p className={style.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={style.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={style.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        />
      </main>
    </>
  );
};

export default MealsDetails;
