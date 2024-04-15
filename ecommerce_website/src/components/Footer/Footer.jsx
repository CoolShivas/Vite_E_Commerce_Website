import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={classes.contact_short}>
        <div className={classes.gir_two_column}>
          <div>
            <h3> Ready to get started </h3>
            <h3> Talk to us today </h3>
          </div>
          <button className={classes.btn_footer}>
            <NavLink to="/contact" className={classes.navlink}>
              {" "}
              Get Started{" "}
            </NavLink>
          </button>
        </div>
      </section>
      {/* Stoting Main Footer*/}
      <footer>
        <div className={classes.grid_four__column}>
          <div className={classes.footer_about}>
            <h3> Shiva Technocrate </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              blanditiis?
            </p>
          </div>
        </div>
        <div className={classes.footer_subscribe}>
          <h3> Subscibe to get important update</h3>
          <form action="#">
            <input type="email" placeholder="your e-mail" />
            <input type="text" />
          </form>
        </div>
      </footer>
      {/* Ending Main Footer */}

      <div className={classes.footer_social}>
        <h3> follow us</h3>
        <div className={classes.footer_social__icons}>
          <div>
            <FaDiscord className={classes.icons} />
          </div>

          <div>
            <FaInstagram className={classes.icons} />
          </div>

          <div>
            <a
              href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
              target="_blank"
            >
              <FaYoutube className={classes.icons} />
            </a>
          </div>
        </div>
      </div>

      <div className={classes.footer_contact}>
        <h3> Call Us </h3>
        <a href="tel:5551324568"> +91 123456789787 </a>
      </div>

      {/* Starting of Bottom Footer */}
      <div className={classes.footer_bottom__section}>
        <hr />
        <div className={classes.gird_two_column}>
          <p>@{new Date().getFullYear()} ShivaChouhan. All rights reservedl</p>
          <div>
            <p> Privacy Policy</p>
          </div>
        </div>
      </div>
      {/* Ending of Bottom Footer */}
    </>
  );
};

export default Footer;
