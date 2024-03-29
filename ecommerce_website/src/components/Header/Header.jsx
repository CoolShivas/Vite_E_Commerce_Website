import classes from "./Header.module.css";
import Navbar from "../Nabar/Navbar"

const Header = () => {
    return <div className={classes.main_header}>
        <h1> Main Header </h1>
        <Navbar></Navbar>
    </div>
}

export default Header