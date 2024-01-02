import PropTypes from "prop-types";
import React from "react";
import "../Footer/Footer.css"

export const FooterOption = ({
  className,
  divClassName,
  text = "Cancellation policy",
  divClassNameOverride,
  divClassName1,
  divClassName2,
  text1 = "Privacy policy",
  divClassName3,
  divClassName4,
}) => {
  return (
    <div className={`footer-option ${className}`}>
      <div className={`text-wrapper ${divClassNameOverride}`}>About Us</div>
      <div className={`div ${divClassName1}`}>Terms and Conditions</div>
      <div className={`privacy-policy ${divClassName2}`}>{text1}</div>
      <div className={`text-wrapper-2 ${divClassName3}`}>Help</div>
      <div className={`text-wrapper-3 ${divClassName4}`}>Careers</div>
      <div className={`cancellation-policy ${divClassName}`}>{text}</div>
    </div>
  );
};

FooterOption.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};