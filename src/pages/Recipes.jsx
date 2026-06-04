import React from 'react'
import Navbar from '../components/Navbar'
import Explore from '../components/Explore'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Recipes = () => {
    return (
        <div className='recipes'>
            <Navbar />
            <Explore />
            <Card />
            <Footer />
        </div>
    )
}

export default Recipes
