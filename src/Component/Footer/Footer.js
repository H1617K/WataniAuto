import PropTypes from "prop-types";
import React from "react";
import "../Footer/Footer.css"
import { useTranslation } from "react-i18next";

export const FooterOption = ({
  className,
  divClassName,
  textKey = "Cancellation policy",
  divClassNameOverride,
  divClassName1,
  divClassName2,
  text1Key = "Privacy policy",
  divClassName3,
  divClassName4,
}) => {
  const { t } = useTranslation();
  return (
    <div className={`footer-option ${className}`}>
      <div className={`text-wrapper ${divClassNameOverride}`}>{t("AboutUs")}</div>
      <div className={`div ${divClassName1}`}>{t("TermsandConditions")}</div>
      <div className={`privacy-policy ${divClassName2}`}>{t("text1Key")}</div>
      <div className={`text-wrapper-2 ${divClassName3}`}>{t("Help")}</div>
      <div className={`text-wrapper-3 ${divClassName4}`}>{t("Careers")}</div>
      <div className={`cancellation-policy ${divClassName}`}>{t("textKey")}</div>
    </div>
  );
};

FooterOption.propTypes = {
  textKey: PropTypes.string,
  text1Key: PropTypes.string,
};