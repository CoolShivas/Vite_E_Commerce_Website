
import { useState } from "react";
import classes from "./ImgPicture.module.css";

const ImgPicture = ({ picture = [{url:""}] }) => {
  // console.log(picture); // Here, we are getting the images;
const [mainPic, setMainPic] = useState(picture[0]);

  return (
    <div className={classes.grid}>
      <div className={classes.grid_four__column}>
        {picture.map((drr) => {
          return (
            
              <img
                src={drr.url}
                alt={drr.filename}
                className="box_image__style"
                key={drr.id}
                onClick={()=>{setMainPic(drr)}}
              />
            
          );
        })}
      </div>

      {/* Starting of Second Column */}
      <div className={classes.main_screen}>
        {/* <img src={picture[2].url} alt={picture[2].filename} /> */}
        <img src={mainPic.url} alt={mainPic.filename} />
      </div>
      {/* Ending of Second Column */}
    </div>
  );
};

export default ImgPicture;
