import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecipesCard = ({ title, image, overview, servings, prepMin, cookMin, id }) => {

    const navigate = useNavigate()

    return (
        <div className="card" onClick={() => navigate(`/recipe/${id}`)}>
            <img className='card__img' src={image} alt="mediterranean chickpea salad" />
            <h3 className='card__title'>{title}</h3>
            <p className='card__desc'>{overview}</p>

            <div className='card__meta-cont'>
                <div className="card__meta">
                    <img src="/images/icon-servings.svg" alt="servings icon" />
                    <p className='card__stat'>Servings: {servings}</p>
                </div>

                <div className="card__meta">
                    <img src="/images/icon-prep-time.svg" alt="prep time icon" />
                    <p className='card__stat'>Prep: {prepMin}</p>
                </div>

                <div className="card__meta">
                    <img src="/images/icon-cook-time.svg" alt="cook time icon" />
                    <p className='card__stat'>Cook: {cookMin}</p>
                </div>
            </div>

            <button className='card__btn'>View Recipe</button>
        </div>
    )
}

export default RecipesCard
