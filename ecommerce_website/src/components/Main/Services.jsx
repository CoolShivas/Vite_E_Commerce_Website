import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import classes from "./Services.module.css";
import { TbTruckDelivery } from "react-icons/tb";

const Services = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.grid_three__column}>
          {/* Starting of Delivery Truck Icon */}
          <div className={classes.services_one}>
            <div>
              <TbTruckDelivery className={classes.icons} />
              <h3> Super Fast and Free Delivery </h3>
            </div>
          </div>
          {/* Ending of Delivery Truck Icon */}

          <div className={classes.grid_special}>
            {/* Starting of Contact Shipping Icon */}
            <div className={classes.services_two}>
              <div>
                <MdSecurity className={classes.icons} />
                <h3> Non-contact Shipping </h3>
              </div>
            </div>
            {/* Ending of Contact Shipping Icon */}

            {/* Starting of Money-back Guaranteed Icon */}
            <div className={classes.services_three}>
              <div>
                <GiReceiveMoney className={classes.icons} />
                <h3> Money-back Guaranteed </h3>
              </div>
            </div>
            {/* Ending of Money-back Guaranteed Icon */}
          </div>

          {/* Starting of Super Secure Payment System Icon */}
          <div className={classes.services_four}>
            <div>
              <RiSecurePaymentLine className={classes.icons} />
              <h3> Super Secure Payment System </h3>
            </div>
          </div>
          {/* Ending of Super Secure Payment System Icon */}
        </div>
      </div>
    </>
  );
};

export default Services;
