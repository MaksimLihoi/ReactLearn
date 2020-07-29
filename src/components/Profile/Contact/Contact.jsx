import React from "react";
import classes from "./Contact.module.css"

const Contact = (props) => {
    return (
      <div>
          <span className={classes.socialNetworkName}>{props.socialNetwork}:</span> {props.socialNetworkUrls}
      </div>
    );
};

export default Contact;