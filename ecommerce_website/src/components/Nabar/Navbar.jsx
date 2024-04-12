import { GrClose } from "react-icons/gr";
import { TiThMenu } from "react-icons/ti";
import { ImCart } from "react-icons/im";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();

  return (
    <div className={menuIcon ? "navbar active" : "navbar"}>
      <ul className={classes.navbar_lists}>
        <li>
          <NavLink to="/" className={classes.navbar_link}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={classes.navbar_link}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={classes.navbar_link}>
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" className={classes.navbar_link}>
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="cart/" className={classes.navbar_cart_trolley__link}>
            <ImCart className={classes.cart_trolley} />
            <span className={classes.navbar_cart_total__item}>50</span>
          </NavLink>
        </li>
      </ul>

      <div className={classes.mobile_navbar_btn}>
        <TiThMenu
          name="menu_outline"
          className={classes.mobile_nav_icon}
          onClick={() => setMenuIcon(false)}
        />

        <GrClose
          name="close_outline"
          className={classes.mobile_nav_icon__close_outline}
          onClick={() => setMenuIcon(true)}
        />
      </div>
    </div>
  );
};

export default Navbar;
