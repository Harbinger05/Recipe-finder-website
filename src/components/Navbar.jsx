import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <header className="header">
            <div className="header__logo">
                <Link to='/'>
                    <img src="/images/logo.svg" alt="logo" />
                </Link>
            </div>

            <nav className={openMenu ? "header__nav open" : "header__nav"}>
                <ul className="header__nav-items">
                    <li className="header__nav-item"><NavLink to='/'>Home</NavLink></li>
                    <li className="header__nav-item"><NavLink to='/about'>About</NavLink></li>
                    <li className="header__nav-item"><NavLink to='/recipes'>Recipes</NavLink></li>
                </ul>

                <button className="header__btn header__btn-menu">Browse recipes</button>
            </nav>

            <button className="header__btn"><Link to='/recipes'>Browse recipes</Link></button>

            <button onClick={() => setOpenMenu(!openMenu)} className="header__menu"><img src="/images/icon-hamburger-menu.svg" alt="hamburger menu" /></button>
        </header>
    )
}

export default Navbar
