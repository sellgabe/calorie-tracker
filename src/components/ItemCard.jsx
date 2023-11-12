import React from 'react';
import { useGlobalContext } from '../context';

const ItemCard = ({ workout, meal }) => {
  const { setMeal, setWorkout } = useGlobalContext();

  const handleDeleteButton = (id, type) => {
    if (type === 'workout') {
      setWorkout((prevWorkouts) =>
        prevWorkouts.filter((item) => item.id !== id)
      );
    } else if (type === 'meal') {
      setMeal((prevMeals) => prevMeals.filter((item) => item.id !== id));
    }
  };

  return (
    <ul>
      {workout &&
        workout.map((workoutItem) => (
          <li key={workoutItem.id}>
            <div className="flex items-center justify-between border-[1px] border-neutral-300 rounded-md p-3 my-2">
              <p className="text-2xl overflow-hidden w-[13rem] text-ellipsis max-[380px]:text-lg">
                {workoutItem.workout}
              </p>
              <div
                className={`text-white ${
                  workout ? 'bg-custom-orange' : 'bg-custom-green'
                } py-1 px-8 text-3xl rounded-md mx-1 max-[380px]:px-6 max-[380px]:text-lg`}
              >
                {workoutItem.calories}
              </div>
              <button
                className="text-white bg-red-500 px-3 py-1 rounded-md"
                onClick={() => handleDeleteButton(workoutItem.id, 'workout')}
              >
                X
              </button>
            </div>
          </li>
        ))}

      {meal &&
        meal.map((mealItem) => (
          <li key={mealItem.id}>
            <div className="flex items-center justify-between border-[1px] border-neutral-300 rounded-md p-3 my-2">
              <p className="text-2xl overflow-hidden w-[13rem] text-ellipsis max-[380px]:text-lg">
                {mealItem.meal}
              </p>
              <div
                className={`text-white bg-custom-green py-1 px-12 text-3xl rounded-md mx-1 max-[380px]:px-6 max-[380px]:text-lg `}
              >
                {mealItem.calories}
              </div>
              <button
                className="text-white bg-red-500 px-3 py-1 rounded-md"
                onClick={() => handleDeleteButton(mealItem.id, 'meal')}
              >
                X
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default ItemCard;
