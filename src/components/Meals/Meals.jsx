import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
    const loadData = useLoaderData()
    console.log(loadData.meals)
    const {} = loadData
    return (
        <div>
            <h3 className='bg-slate-400'>this is my meals suggestion</h3>
            <div className='grid md:grid-cols-3 lg:grid-cols-4'>
                {
                    loadData.meals.map(meal=><Meal meal= {meal} key={meal.idMeal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;