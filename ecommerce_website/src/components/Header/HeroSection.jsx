import { NavLink } from "react-router-dom";
import classes from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.grid_two__columns}>
        <div className={classes.hero_section__data}>
          <p className={classes.intro_data}> Welcome to </p>
          <h1> Shiva Classes </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            molestiae voluptatem qui hic enim eum ab, perferendis eos similique
            tempore placeat eaque mollitia quidem alias.
          </p>
          <NavLink>
            <button className={classes.btn_shop__now}> Shop Now </button>
          </NavLink>
        </div>
        <div>
          <figure>
            <img
              src="../../../images/Beautiful Way.jpg"
              alt="image not found"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
