import { NavLink } from "react-router-dom";
import CartAmtToggle from "./CartAmtToggle";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import classes from "./AddToCart.module.css";

const AddToCart = ({ productABC }) => {
  // console.log(productABC);// Here, we are able to access the productABC;
  // console.log(productABC.colors[0]);
  const { id, colors, stock } = productABC;
  // console.log(id);// Here, we are able to access the id;
  // console.log(colors);// Here, we are able to access the colors;
  // console.log(stock);// Here, we are able to access the stock;
  const [myColour, setMyColour] = useState(colors[0]);// Here, we set the default value of myColour to colors[0] instead of null;
  const [amount, setAmount] = useState(1);// Here, we set the default value of amount is 1 instead of 0 because it menas that 0 indicate product is out of stock ;

  const setDecrease = () =>{
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
    // // if amount is always greater than 1 because 0 indicate product is out of stock ;
    // // setAmount(amount - 1) means that we can decrease the amount if number is greater than amount;
    // // Else always setAmount(1) never be 0 or directly delete the product by delete button;
  };

  const setIncrease = () =>{
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
     // // if amount is always lesser than stock because stock always define the amount of quantity you can add;
    // // setAmount(amount + 1) means that we can increase the amount of quantity;
    // // Else always setAmount(stock) never be 0 or directly depends on stocks availability;
  };



  return (
    <>
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
              onClick={() => {
                setMyColour(currColor);
              }}
            >
              {/* {currColor} */}
              {myColour === currColor ? (
                <FaCheck className={classes.check_style} />
              ) : null}
            </button>
          );
        })}
      </div>
      {/* Starting of Colour Badge for Product of that colour  */}
      <CartAmtToggle
        amountABC={amount}
        setDecreaseABC={setDecrease}
        setIncreaseABC={setIncrease}
      ></CartAmtToggle>
      {/* Ending of Colour Badge for Product of that colour  */}
      <NavLink to="/cart">
        <button className={classes.btn_add__cart}> Add To Cart </button>
      </NavLink>
    </>
  );
};

export default AddToCart;
