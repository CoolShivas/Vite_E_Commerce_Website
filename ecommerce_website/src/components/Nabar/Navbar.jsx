import { NavLink } from "react-router-dom"

const Navbar = () => {
    return <>
        <nav>
            <ul className="ulTag">
                <li>
                    <NavLink to="/"> Home </NavLink>
                </li>

                <li>
                    <NavLink to="/about"> About Us </NavLink>
                </li>

                <li>
                    <NavLink to="/contact"> Contact Us </NavLink>
                </li>

                <li>
                    <NavLink to="/singleproducts/:id"> Single Product </NavLink>
                </li>

                <li>
                    <NavLink to="cart/"> Cart </NavLink>
                </li>

                <li>
                    <NavLink to="/products"> Products </NavLink>
                </li>
            </ul>
        </nav>
    </>
}

export default Navbar
