
const Perks = () => {
    return (
        <section className="perks">
            <h2 className="perks__title">What you’ll get</h2>

            <div className="perks__items">
                {/* item 1 */}
                <div className="perks__item">
                    <div className="perks__item-img">
                        <img src="/images/icon-whole-food-recipes.svg" alt="whole food icon" />
                    </div>
                    <p className="perks__item-title">Whole-food recipes</p>
                    <p className="perks__item-desc">Each dish uses everyday, unprocessed ingredients.</p>
                </div>

                {/* item 2 */}
                <div className="perks__item">
                    <div className="perks__item-img">
                        <img src="/images/icon-minimum-fuss.svg" alt="minimum fuss icon" />
                    </div>
                    <p className="perks__item-title">Minimum fuss</p>
                    <p className="perks__item-desc">All recipes are designed to make eating healthy quick and easy.</p>
                </div>

                {/* item 3 */}
                <div className="perks__item">
                    <div className="perks__item-img">
                        <img src="/images/icon-search-in-seconds.svg" alt="Search in seconds icon" />
                    </div>
                    <p className="perks__item-title">Search in seconds</p>
                    <p className="perks__item-desc">Filter by name or ingredient and jump straight to the recipe you need.</p>
                </div>
            </div>
        </section>
    )
}

export default Perks
