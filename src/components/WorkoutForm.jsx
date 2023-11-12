import { useState } from 'react';
import ItemCard from './ItemCard';
import { useGlobalContext } from '../context';

const WorkoutForm = () => {
  const { workout, setWorkout } = useGlobalContext();

  const [workoutFormData, setWorkoutFormData] = useState({
    workout: '',
    calories: '',
  });
  const [showWorkoutInput, setShowWorkoutInput] = useState(false);

  const generateUniqueId = () => {
    return Date.now();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkoutFormData({ ...workoutFormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!workoutFormData.workout || !workoutFormData.calories) return;

    const newWorkout = { id: generateUniqueId(), ...workoutFormData };
    setWorkout([...workout, newWorkout]);
    localStorage.setItem(
      'workoutItems',
      JSON.stringify([...workout, newWorkout])
    );
    setWorkoutFormData({ workout: '', calories: '' });
  };

  return (
    <div className="flex flex-col gap-6 w-full max-[380px]:gap-0">
      <div className="flex justify-between w-full">
        <p className="text-2xl border-l-[3px] border-custom-orange px-2">
          Workouts
        </p>
        <button
          className="bg-custom-orange text-white w-[8rem] px-2 py-1 rounded-md"
          onClick={() => setShowWorkoutInput((prev) => !prev)}
        >
          + Add Workout
        </button>
      </div>
      <form
        className={`flex flex-col gap-3 border-[1px] border-neutral-300 rounded-md p-3 relative ease-in-out duration-500 ${
          showWorkoutInput ? 'top-0' : '-top-full hidden'
        }`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter Workout"
          className="border-[1px] border-neutral-200 rounded-md w-full px-3 py-1"
          name="workout"
          value={workoutFormData.workout}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter Calories"
          className="border-[1px] border-neutral-200 rounded-md w-full px-3 py-1"
          name="calories"
          value={workoutFormData.calories}
          onChange={handleChange}
        />
        <button
          className="bg-custom-orange text-white w-[9.5rem] py-1 px-2 rounded-md"
          type="submit"
        >
          Add Workout Item
        </button>
      </form>

      <ItemCard workout={workout} />
    </div>
  );
};

export default WorkoutForm;
