import { ImCart } from "react-icons/im";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return <>
        <nav className={classes.nav}>
            <div className={classes.navbar}>
                <ul className={classes.navbar_list}>
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
                        {/* <NavLink to="cart/"> Cart </NavLink> */}
                        <NavLink to="cart/" className={classes.cart_trolley}> <ImCart /> </NavLink>
                    </li>

                    <li>
                        <NavLink to="/products"> Products </NavLink>
                    </li>
                </ul>
            </div>

        </nav>
    </>
}

export default Navbar
