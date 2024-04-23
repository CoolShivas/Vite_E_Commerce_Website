import classes from "./ImgPicture.module.css";

const ImgPicture = ({ picture }) => {
  // console.log(picture); // Here, we are getting the images;
  return (
    <div className={classes.grid}>
      <div className={classes.grid_four__column}>
        {picture.map((drr, index) => {
          return (
            <figure>
              <img
                src={drr.url}
                alt={drr.filename}
                className="box_image__style"
                key={index}
              />
            </figure>
          );
        })}
      </div>

      {/* Starting of Second Column */}
      <div className={classes.main_screen}>
        <img src={picture[0].url} alt={picture[0].filename} />
      </div>
      {/* Ending of Second Column */}
    </div>
  );
};

export default ImgPicture;
