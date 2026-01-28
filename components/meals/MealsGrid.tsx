import MealItem, { type Meal } from "./MealItem";
import style from "./MealsGrid.module.css";

export default function MealsGrid({ meals }: { meals: Meal[] }) {
  return (
    <ul className={style.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
