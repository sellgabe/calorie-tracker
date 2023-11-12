import { useGlobalContext } from '../context';

const Calories = () => {
  const { dailyLimit, meal, workout, getGainLoss } = useGlobalContext();

  const getCaloriesConsumed = () => {
    const totalCalorieConsumed = meal.reduce((total, item) => {
      return total + +item.calories;
    }, 0);

    return +totalCalorieConsumed;
  };

  const getCaloriesBurned = () => {
    const totalCaloriesBurned = workout.reduce((total, item) => {
      return total + +item.calories;
    }, 0);

    return +totalCaloriesBurned;
  };

  const getCaloriesRemaining = () => {
    return dailyLimit - (getCaloriesConsumed() - getCaloriesBurned());
  };

  return (
    <div className="container my-4">
      <div className="flex justify-between text-white gap-2 mb-2">
        <div className="flex flex-col justify-center items-center bg-custom-orange w-full rounded-sm py-3">
          <p className="font-bold text-3xl max-[380px]:text-2xl">
            {dailyLimit}
          </p>
          <p className="text-md max-[380px]:text-sm">Daily Calorie Limit</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-custom-green w-full rounded-sm py-3">
          <p className="font-bold text-3xl max-[380px]:text-2xl">
            {getGainLoss()}
          </p>
          <p className="text-md max-[380px]:text-sm">Gain/Loss</p>
        </div>
      </div>
      <div className="flex justify-evenly text-black gap-2">
        <div className="flex flex-col text-center border-neutral-200 border-[1px] w-full rounded-sm p-2">
          <p className="font-bold text-3xl max-[380px]:text-2xl">
            {getCaloriesConsumed()}
          </p>
          <p className="text-md max-[380px]:text-sm">Calories Consumed</p>
        </div>
        <div className="flex flex-col text-center border-neutral-200 border-[1px] w-full rounded-sm p-2">
          <p className="font-bold text-3xl max-[380px]:text-2xl">
            {getCaloriesBurned()}
          </p>
          <p className="text-md max-[380px]:text-sm">Calories Burned</p>
        </div>
        <div
          className={`flex flex-col text-center border-neutral-200 border-[1px] w-full rounded-sm p-2 ${
            getCaloriesRemaining() < 0 ? 'text-custom-red' : ''
          }`}
        >
          <p className="font-bold text-3xl max-[380px]:text-2xl">
            {getCaloriesRemaining()}
          </p>
          <p className="text-md max-[380px]:text-sm">Calories Remaining</p>
        </div>
      </div>
    </div>
  );
};

export default Calories;
