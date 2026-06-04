import { useParams } from "react-router-dom"
import recipies from "../recipies"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import RecipesCard from "../components/RecipesCard"

const RecipeDetails = () => {
    const { id } = useParams()
    const recipe = recipies.find(r => r.id === Number(id))

    const moreRecipes = recipies.filter(r => r.id !== Number(id)).slice(0, 3)

    if (!recipe) return <p>No Recipe Found</p>

    return (
        <section className="details">
            <Navbar />

            <div className="details__wrapper">
                <div className="details__image">
                    <p className="details__Page">Recipes / <span>{recipe.title}</span></p>
                    <img src={recipe.image.small} alt={recipe.title} />
                </div>

                <div className="details__content">
                    <h1 className="details__title">{recipe.title}</h1>
                    <p className="details__desc">{recipe.overview}</p>

                    {/* Meta */}
                    <div className="deatils__meta-cont">
                        <div className="deatils__meta">
                            <img src="/images/icon-servings.svg" alt="servings icon" />
                            <p className='details__stat'>Servings: {recipe.servings}</p>
                        </div>

                        <div className="deatils__meta">
                            <img src="/images/icon-prep-time.svg" alt="prep time icon" />
                            <p className='details__stat'>Prep: {recipe.prepMinutes}</p>
                        </div>

                        <div className="deatils__meta">
                            <img src="/images/icon-cook-time.svg" alt="cook time icon" />
                            <p className='details__stat'>Cook: {recipe.cookMinutes}</p>
                        </div>
                    </div>

                    {/* Ingredients */}
                    <div className="details__ing">
                        <h2 className="ing__title">Ingredients:</h2>

                        <div className="ing__items">
                            {recipe.ingredients.map((ing) => (
                                <div className="ing__item">
                                    <img src="/images/icon-bullet-point.svg" alt="bullet icon" />
                                    <p className="ing__item-para">{ing}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="details__instruct">
                        <h2 className="instruct__title">Instructions:</h2>

                        <div className="instruct__items">
                            {recipe.instructions.map((instruct) => (
                                <div className="instruct__item">
                                    <img src="/images/icon-bullet-point.svg" alt="bullet icon" />
                                    <p className="instruct__item-para">{instruct}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <section className="more-recipes">
                
                <div className="more-recipes__content">
                    <h2 className="more-recipes__title">More Recipes</h2>

                    <div className="more-recipes__flex">
                        {moreRecipes.map((r) => (
                            <RecipesCard
                                key={r.id}
                                title={r.title}
                                id={r.id}
                                image={r.image.small}
                                overview={r.overview}
                                servings={r.servings}
                                prepMin={r.prepMinutes}
                                cookMin={r.cookMinutes}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    )
}

export default RecipeDetails
