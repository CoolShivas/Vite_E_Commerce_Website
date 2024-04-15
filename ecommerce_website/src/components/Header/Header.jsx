import classes from "./Header.module.css";
import Navbar from "../Nabar/Navbar";
import { formationOfCustomHook } from "../../store/AppContext";

const Header = () => {
  const { myName } = formationOfCustomHook();

  return (
    <div className={classes.main_header}>
      <h1> {myName} </h1>
      <h1> Main Header </h1>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
