import React from 'react'
import style from './recipe.module.css';

const  Recipe = ({title,calories,image,ingredients,key}) => {
    
    return (
      
            <div className={style.recipes} key={key}>
                <h1>{title}</h1>
                <img className={style.image} src={image}></img>
                <ol>
                    {ingredients.map(ingredient=>(
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
                <p>{Math.round(calories)} Cal</p>
            </div>
    
    )
    
}

export default Recipe;