import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
    console.log(meal)
    const { idMeal, strInstructions, strMealThumb, strMeal } = meal
    return (


        <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure><img className='img-fluid' src={strMealThumb} /></figure>
            <div className="card-body">
                <h2 className="text-start">WoW meal!</h2>
                <p className='text-start'>{strMeal}</p>
                <p className='text-start'>{strInstructions}</p>
                <div className="card-actions justify-end">
                    <Link id={`/mealDetail/${idMeal}`}><button className="btn btn-primary">Meal Detail</button></Link>
                    
                </div>
            </div>
        </div>

    );
};

export default Meal;