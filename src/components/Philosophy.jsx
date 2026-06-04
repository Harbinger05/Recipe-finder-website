
const Philosophy = () => {
    return (
        <section className="philosophy">
            <h2 className="philosophy__title">Our food philosophy</h2>

            <div className="philosophy__items">
                {/* item 1 */}
                <div className="philosophy__item">
                    <img className="philosophy__item-bullet-icon" src="/images/icon-bullet-point.svg" alt="bullet icon" />

                    <div className="philosophy__item-content">
                        <h2 className="philosophy__item-title">Whole ingredients first.</h2>
                        <p className="philosophy__item-desc">Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.</p>
                    </div>
                </div>

                {/* item 2 */}
                <div className="philosophy__item">
                    <img className="philosophy__item-bullet-icon" src="/images/icon-bullet-point.svg" alt="bullet icon" />

                    <div className="philosophy__item-content">
                        <h2 className="philosophy__item-title">Flavor without compromise.</h2>
                        <p className="philosophy__item-desc">Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.</p>
                    </div>
                </div>

                {/* item 3 */}
                <div className="philosophy__item">
                    <img className="philosophy__item-bullet-icon" src="/images/icon-bullet-point.svg" alt="bullet icon" />

                    <div className="philosophy__item-content">
                        <h2 className="philosophy__item-title">Respect for time.</h2>
                        <p className="philosophy__item-desc">Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful..</p>
                    </div>
                </div>

                {/* item 4 */}
                <div className="philosophy__item">
                    <img className="philosophy__item-bullet-icon" src="/images/icon-bullet-point.svg" alt="bullet icon" />

                    <div className="philosophy__item-content">
                        <h2 className="philosophy__item-title">Sustainable choices.</h2>
                        <p className="philosophy__item-desc">Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Philosophy
