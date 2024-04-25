import { FaMinus, FaPlus } from "react-icons/fa";
import classes from "./CartAmtToggle.module.css" ;

const CartAmtToggle = ({amountABC, setDecreaseABC, setIncreaseABC}) => {
    
  return (
    <div className={classes.cart_btn}>
      <div className={classes.cart_amt_toggle}>
        <button onClick={()=>setDecreaseABC()}>
           {/* Minus  */}
           <FaMinus/>
           </button>
        <div className={classes.amt_style}> {amountABC} </div>
        <button onClick={()=>setIncreaseABC()}>
           {/* Add  */}
           <FaPlus/>
           </button>
      </div>
    </div>
  )
}

export default CartAmtToggle;