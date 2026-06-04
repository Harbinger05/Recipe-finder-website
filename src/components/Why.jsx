
const Why = () => {
    return (
        <section className="why">
            <h2 className="why__title">Why we exist</h2>

            <div className="why__items">
                {/* item 1 */}
                <div className="why__item">
                    <img className="why__item-bullet-icon" src="/images/icon-bullet-point.svg" alt="bullet icon" />

                    <div className="why__item-content">
                        <h2 className="why__item-title">Cut through the noise.</h2>
                        <p className="why__item-desc">The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.</p>
                    </div>
                </div>

                {/* item 2 */}
                <div className="why__item">
                    <img className="why__item-bullet-icon" src="/images/icon-bullet-point.svg" alt="bullet icon" />

                    <div className="why__item-content">
                        <h2 className="why__item-title">Empower home kitchens.</h2>
                        <p className="why__item-desc">When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.</p>
                    </div>
                </div>

                {/* item 3 */}
                <div className="why__item">
                    <img className="why__item-bullet-icon" src="/images/icon-bullet-point.svg" alt="bullet icon" />

                    <div className="why__item-content">
                        <h2 className="why__item-title">Make healthy look good.</h2>
                        <p className="why__item-desc">High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why
