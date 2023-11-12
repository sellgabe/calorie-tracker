import React from 'react';
import MealForm from '../components/MealForm';
import WorkoutForm from '../components/WorkoutForm';

const Form = () => {
  return (
    <section className="container flex gap-6 w-full max-md:flex-col">
      <MealForm />
      <WorkoutForm />
    </section>
  );
};

export default Form;
