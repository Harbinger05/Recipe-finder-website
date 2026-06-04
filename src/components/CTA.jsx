import { Link } from "react-router-dom"

const CTA = () => {
    return (
        <section className="cta">
            <div className="cta__content">
                <h2 className="cta__title">Ready to cook smarter?</h2>
                <p className="cta__desc">Hit the button, pick a recipe, and get dinner on the table—fast.</p>
                <button className="cta__btn"><Link to='/recipes'>Browse recipes</Link></button>
            </div>

            <img className="cta__fork-pattern" src="/images/pattern-fork.svg" alt="fork pattern" />
            <img className="cta__knife-pattern" src="/images/pattern-knife.svg" alt="kife pattern" />
        </section>
    )
}

export default CTA
