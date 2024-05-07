import classes from "./PageNavigation.module.css";
import { NavLink } from "react-router-dom";

const PageNavigation = ({ titleNavigator }) => {
  return (
    <div className={classes.section_page__navigator}>
      <NavLink to="/" className={classes.page_navigator__home}> Home </NavLink> / {titleNavigator}
    </div>
  );
};

export default PageNavigation;
