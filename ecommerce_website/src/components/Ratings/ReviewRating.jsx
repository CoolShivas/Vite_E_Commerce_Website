import classes from "./ReviewRating.module.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const ReviewRating = ({ starsABC, reviewsABC }) => {
  // console.log(starsABC);// Here, we are getting the stars;
  // console.log(reviewsABC);// Here, we are getting the reviews;

  const ratingStars = Array.from({ length: 5 }, (elem, index) => {
    let num = index + 0.5;
    return (
      <span>
        {/* {starsABC >= index + 1 ? <FaStar/> : starsABC >= num ? <FaStarHalfAlt/> : <AiOutlineStar/> } */}
        {/* Therefore, if starsABC is greater than index + 1 then display full star (FaStar) ; else 
      starsABC is greater than num then display half star (FaStarHalfAlt) ; else
      display the full star (AiOutLineStar);
       */}
        {starsABC >= index + 1 ? (
          <FaStar className={classes.icon_stars} />
        ) : starsABC >= num ? (
          <FaStarHalfAlt className={classes.icon_stars} />
        ) : (
          <AiOutlineStar className={classes.icon_stars} />
        )}
      </span>
    );
  });

  return (
    <div className={classes.icon_rating__review}>
      {ratingStars} <p> {reviewsABC} Best and Good </p>
    </div>
  );
};

export default ReviewRating;
