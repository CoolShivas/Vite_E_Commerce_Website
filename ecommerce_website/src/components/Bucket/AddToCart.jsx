import {FaCheck} from "react-icons/fa";
import { useState } from "react";
import classes from "./AddToCart.module.css";

const AddToCart = ({ productABC }) => {
  // console.log(productABC);// Here, we are able to access the productABC;
  // console.log(productABC.colors[0]);
  const { id, colors, stock } = productABC;
  // console.log(id);// Here, we are able to access the id;
  // console.log(colors);// Here, we are able to access the colors;
  // console.log(stock);// Here, we are able to access the stock;
  const [myColour, setMyColour] = useState(colors[0]);

  return (
    <div className={classes.product_colour}>
      Colors:-
      {/* {colors.map((currColor, index)=>{
            return <button key={index}> {currColor} </button>
        })} */}
      {/* {colors.map((currColor, index)=>{
            return <button key={index} style={{backgroundColor : currColor}}> {currColor} </button>
        })} */}
      {colors.map((currColor, index) => {
        return (
          <button
            key={index}
            style={{ backgroundColor: currColor }}
            // className={myColour === currColor ? "btn_style active" : "btn_style"}
            className={classes.btn_style}
            onClick={()=>{setMyColour(currColor)}}
          >
            {/* {currColor} */}
            {myColour === currColor ? <FaCheck className={classes.check_style}/> : null }
          </button>
        );
      })}

    

    </div>
  );
};

export default AddToCart;
