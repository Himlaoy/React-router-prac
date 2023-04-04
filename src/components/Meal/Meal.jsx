import React from 'react';

const Meal = ({meal}) => {
    console.log(meal)
    const {idMeal,strInstructions,strMealThumb,strMeal} = meal
    return (
        <div>
            <div><img src={strMealThumb} alt="" /></div>
            <p>{strMeal}</p>
            <p>{strInstructions}</p>
        </div>
    );
};

export default Meal;