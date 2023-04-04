import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
    const loadData = useLoaderData()
    console.log(loadData.meals)
    const {} = loadData
    return (
        <div>
            <h3>this is my meals suggestion</h3>
            <div>
                {
                    loadData.meals.map(meal=><Meal meal= {meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;