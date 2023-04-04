import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MealDetail = () => {
    const meals = useLoaderData()
    // console.log(meal.meals)



    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            {
                meals.meals.map(meal =>
                    <> <figure><img src={meal.strMealThumb} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="text-start"></h2>
                            <p>{meal.strMeal}</p>
                            <p>{meal.strInstructions}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </>

                )
            }

        </div>
    );
};

export default MealDetail;