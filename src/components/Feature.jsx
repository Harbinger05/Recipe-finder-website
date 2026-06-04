
const Feature = () => {
    return (
        <section className="feature">
            <div className="feature__content">
                <h2 className="feature__title">Built for real life</h2>
                <p className="feature__desc">Cooking shouldn’t be complicated. These recipes come in under 30 minutes of active time, fit busy schedules, and taste good enough to repeat. </p>
                <p className="feature__desc">Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.</p>
            </div>

            <div className="feature__img">
                <picture>
                    <source srcSet="/images/image-home-real-life-small.webp" media="(min-width: 1440px)" />

                    <source srcSet="public/images/image-home-real-life-large.webp" media="(min-width: 1024px)" />

                    <img src="/images/image-home-real-life-small.webp" alt="cutting vegetables" />
                </picture>

                {/* <img src="/images/image-home-real-life-small.webp" alt="cutting vegetables" /> */}
            </div>
        </section>
    )
}

export default Feature
