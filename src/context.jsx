import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const getWorkoutItemsFromLocalStorage = () => {
  let workoutItems = localStorage.getItem('workoutItems');
  if (workoutItems) {
    workoutItems = JSON.parse(workoutItems);
  } else {
    workoutItems = [];
  }
  return workoutItems;
};

const getMealItemsFromLocalStorage = () => {
  let mealItems = localStorage.getItem('mealItems');
  if (mealItems) {
    mealItems = JSON.parse(mealItems);
  } else {
    mealItems = [];
  }
  return mealItems;
};

const getDailyLimitFromLocalStorage = () => {
  let dailyLimit = localStorage.getItem('dailyLimit');
  if (dailyLimit) {
    dailyLimit = JSON.parse(dailyLimit);
  } else {
    dailyLimit = 2000;
  }
  return dailyLimit;
};

const AppProvider = ({ children }) => {
  const [dailyLimit, setDailyLimit] = useState(getDailyLimitFromLocalStorage());
  const [meal, setMeal] = useState(getMealItemsFromLocalStorage());
  const [workout, setWorkout] = useState(getWorkoutItemsFromLocalStorage());
  const [showModal, setShowModal] = useState(false);

  const getGainLoss = () => {
    const totalCalorieConsumed = meal.reduce((total, item) => {
      return total + +item.calories;
    }, 0);

    const totalCaloriesBurned = workout.reduce((total, item) => {
      return total + +item.calories;
    }, 0);

    return totalCalorieConsumed - totalCaloriesBurned;
  };

  return (
    <AppContext.Provider
      value={{
        dailyLimit,
        setDailyLimit,
        meal,
        setMeal,
        workout,
        setWorkout,
        getGainLoss,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
