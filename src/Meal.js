import React ,{useState, useEffect} from 'react'

export default function MealList ({meal}){
    const[imageUrl, setImageurl]=useState("");

    useEffect(()=>{
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=1f00cbd945a14395a3cb29998e642c2c&includeNutrition=false`
        )
        .then((response)=> response.json())
        .then((data)=>{
            setImageurl(data.image)
        })
        .catch(()=>{
            console.log("error");
        })
    }, [meal.id])
  return (
    <article>
        <h1>{meal.title}</h1>
        <img src={imageUrl} alt="receipe"/>
        <ul className="instructions">
            <li> Preparation time: {meal.readyInMinutes}minutes</li>
            <li>Number of servings: {meal.servings}</li>
        </ul>
        
        <a href={meal.sourceUrl}>Go to receipe</a>
    </article>
  );
}

