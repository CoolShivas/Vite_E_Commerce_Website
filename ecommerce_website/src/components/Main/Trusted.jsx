import classes from "./Trusted.module.css";

const Trusted = () => {
  return (
    <>
      <div className={classes.container}>
        <h3> Trusted By 1000+ Companies </h3>
        <div className={classes.brand_section_slider}>
          {/*Starting of First Image */}
          <div className={classes.slides}>
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image1.png"
              alt="trusted_brands"
            />
          </div>
          {/*Ending of First Image */}

          {/*Starting of Second Image */}
          <div className={classes.slides}>
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
              alt="trusted_brands"
            />
          </div>
          {/*Ending of Second Image */}

          {/*Starting of Third Image */}
          <div className={classes.slides}>
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
              alt="trusted_brands"
            />
          </div>
          {/*Ending of Third Image */}

          {/*Starting of Fourth Image */}
          <div className={classes.slides}>
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
              alt="trusted_brands"
            />
          </div>
          {/*Ending of Fourth Image */}

          {/*Starting of Fifth Image */}
          <div className={classes.slides}>
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image5.png"
              alt="trusted_brands"
            />
          </div>
          {/*Ending of Fifth Image */}

          {/*Starting of Sixth Image */}
          <div className={classes.slides}>
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
              alt="trusted_brands"
            />
          </div>
          {/*Ending of Sixth Image */}
        </div>
      </div>
    </>
  );
};

export default Trusted;
