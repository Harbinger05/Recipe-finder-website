import React from 'react'
import recipies from '../recipies'
import RecipesCard from './RecipesCard'

const Card = () => {
    return (
        <section className='cards'>
            <div className="cards__content">
                {recipies.map((recipe) => (
                    <RecipesCard
                        key={recipe.id}
                        id={recipe.id}
                        title={recipe.title}
                        image={recipe.image.small}
                        overview={recipe.overview}
                        servings={recipe.servings}
                        prepMin={recipe.prepMinutes}
                        cookMin={recipe.cookMinutes} />
                ))}
            </div>
        </section>
    )
}

export default Card
