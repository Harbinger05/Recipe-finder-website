import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__content-cont">
                <h1 className="hero__title"><span>Healthy</span> meals, zero fuss</h1>
                <p className="hero__description">Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork.</p>
                <button className="hero__btn"><Link to='/about'>Start exploring</Link></button>
            </div>

            <div className="hero__img">
                <img className="hero__pattern" src="/images/pattern-squiggle-1.svg" alt="" />

                <div className="hero__img-cont">
                    <picture>
                        <source srcSet="/images/image-home-hero-large.webp" media="(min-width: 1024px)" />

                        <img src="/images/image-home-hero-small.webp" alt="hero image" />
                    </picture>
                </div>
            </div>
        </section>
    )
}

export default Hero
