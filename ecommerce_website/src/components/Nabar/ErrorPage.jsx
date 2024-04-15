import { NavLink } from "react-router-dom";
import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={classes.error_page}>
      <h2>404</h2>
      <h3> UH OH ! You're lost.</h3>
      <p>
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click on the button below to go back to the
        homepage.
      </p>

      <NavLink to="/">
        <button> go back to home </button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
