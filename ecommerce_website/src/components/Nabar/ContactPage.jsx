import classes from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <>
      <h2 className={classes.common_heading}> Feel Free to Contact Us </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14504.45127810879!2d77.30781526384891!3d24.654244699025675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397a5c70d5839ad3%3A0xc46638d03224b797!2sPiproda%20Khurd%2C%20Madhya%20Pradesh%20473001!5e0!3m2!1sen!2sin!4v1713036308587!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className={classes.container}>
        <div className={classes.contact_form}>
          <form
            action="https://formspree.io/f/xkndpyej"
            method="POST"
            className={classes.contact_inputs}
          >
            <input
              type="text"
              placeholder="username"
              name="UsrName"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoCapitalize="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your message her."
            ></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
