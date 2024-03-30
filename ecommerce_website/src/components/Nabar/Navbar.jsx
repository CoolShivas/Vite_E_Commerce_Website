import { GrClose } from "react-icons/gr";
import { TiThMenu } from "react-icons/ti";
import { ImCart } from "react-icons/im";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return <div className={classes.navbar}>
        <ul className={classes.navbar_list}>

            <li>
                <NavLink to="/" className={classes.navbar_link}> Home </NavLink>
            </li>

            <li>
                <NavLink to="/about" className={classes.navbar_link}> About </NavLink>
            </li>

            <li>
                <NavLink to="/contact" className={classes.navbar_link}> Contact </NavLink>
            </li>

            <li>
                <NavLink to="/products" className={classes.navbar_link}> Products </NavLink>
            </li>

            <li>
                <NavLink to="cart/"
                    className={classes.navbar_link['cart_trolley__link']}>
                    <ImCart className={classes.cart_trolley} />
                    <span className={classes.navbar_link['cart_total__item']} > 50 </span>
                </NavLink>
            </li>


        </ul>

        <div className={classes.mobile_navbar_btn}>

            <TiThMenu name="menu_outline" className={classes.mobile_nav_icon} />

            <GrClose name="close_outline" className={classes.mobile_nav_icon['close_outline']} />
        </div>

    </div>

}

export default Navbar
