import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import { useGlobalContext } from '../context';

const MealForm = () => {
  const { meal, setMeal } = useGlobalContext();

  const [mealFormData, setMealFormData] = useState({ meal: '', calories: '' });
  const [showMealInput, setShowMealInput] = useState(false);

  const generateUniqueId = () => {
    return Date.now();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMealFormData({ ...mealFormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mealFormData.meal || !mealFormData.calories) return;

    const newMeal = { id: generateUniqueId(), ...mealFormData };
    setMeal([...meal, newMeal]);
    localStorage.setItem('mealItems', JSON.stringify([...meal, newMeal]));
    setMealFormData({ meal: '', calories: '' });
  };

  return (
    <div className="flex flex-col gap-6 w-full max-[380px]:gap-0">
      <div className="flex justify-between w-full">
        <p className="text-2xl border-l-[3px] border-custom-green px-2 ">
          Meals / Food
        </p>
        <button
          className="bg-custom-green text-white w-[6.5rem] px-2 py-1 rounded-md"
          onClick={() => setShowMealInput((prev) => !prev)}
        >
          + Add Meal
        </button>
      </div>

      <form
        className={`flex flex-col gap-3 border-[1px] border-neutral-300 rounded-md p-3 relative ease-in-out duration-500 ${
          showMealInput ? 'top-0' : '-top-full hidden'
        }`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter Meal or Item"
          className="border-[1px] border-neutral-200 rounded-md w-full px-3 py-1"
          name="meal"
          value={mealFormData.meal}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter Calories"
          className="border-[1px] border-neutral-200 rounded-md w-full px-3 py-1"
          name="calories"
          value={mealFormData.calories}
          onChange={handleChange}
        />
        <button
          className="bg-custom-green text-white w-[7.6rem] py-1 px-2 rounded-md"
          type="submit"
        >
          Add Meal Item
        </button>
      </form>

      <ItemCard meal={meal} />
    </div>
  );
};

export default MealForm;
