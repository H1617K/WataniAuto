import React, { useEffect, useState } from 'react';
import { img1, img5 } from '../Component/Images';
import { FooterOption } from '../Component/Footer/Footer';
import '../CSS/Login.css';
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import i18n from '../Utils/LanguageLocalization';
import { useTranslation } from 'react-i18next';
import { useFormValidations } from '../Utils/formValidations';

const Login = () => {
  const navigate = useNavigate(); // Navigation 
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email*"); // email PlaceHolder
  const [showPassword, setShowPassword] = useState(false);  // Show Paaword
  const langdirection = i18n.language === "عربي" ? "rtl" : "ltr"  // Language Direction
  const language = i18n.language === "عربي";

  const changeLanguage = (newLanguage) => {  // Change Language
    i18n.changeLanguage(newLanguage);
  };
  const { t } = useTranslation();

  //Email--Place Holder--Blur--OnFocused
  useEffect(() => {
    setEmailPlaceholder(t("Email"))
  }, [t])

  const handleEmailBlur = () => {
    setEmailPlaceholder(t("Email"));
    setIsEmailFocused(email !== '');
  };

  const onFocus = () => {
    setEmailPlaceholder("example@domain.com")
    setIsEmailFocused(true);
  }

  //Password--Place Holder--Blur--OnFocused--PasswordVisibility
  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(password !== '');
  };

  const toogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //Naviagtion Link--Register--&--Forgetpassword
  const handleRegisterClick = () => {
    navigate('/NewRegister');
  };

  const handleForgetPassword = () => {
    navigate('/Forgetpassword');
  };

  //import Validation critearea for loginFrom
  const { email, password, isEmailFocused, 
    setIsEmailFocused, isPasswordFocused, setIsPasswordFocused, 
    handlerSubmit, emailError, passwordError, handleEmailChange, handlePasswordChange,
  }= useFormValidations()

  return (
    <section>
      <div className="Main-login-Page" dir={langdirection}>
        <div className="back-img">
          <img src={img5} alt="img" /> 
          <section>
            <div className="Main-Login-form">
              <form onSubmit={handlerSubmit} noValidate>
                <div className="Box-heder-Welcome">
                  <h2>{t("Welcome")}</h2>
                </div>
                <div className="Box-Email">
                  {isEmailFocused && <label className="Label-Holder-Email">{t("Email")}</label>}
                  <input
                    type="email"
                    className={emailError ? 'error' : ''}
                    name="email"
                    value={email}
                    placeholder={emailPlaceholder}
                    onChange={handleEmailChange}
                    onFocus={onFocus}
                    onBlur={handleEmailBlur}
                    maxLength={30}
                    required
                  />
                  <div className={`error-container ${emailError ? 'show' : ''}`}>
                    {(emailError) && <div className='error-message'>{t("emailError")}<span className='arrow-right'></span></div>}
                  </div>
                </div>
                <br />
                <div className="Box1-password">
                  {isPasswordFocused && <label className="Label-Holder-Password">{t("Password")}</label>}
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className={passwordError ? 'error' : ''}
                    name="password"
                    value={password}
                    placeholder={isPasswordFocused ? '' : t("Password")}
                    onChange={handlePasswordChange}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                    minLength={8}
                    maxLength={15}
                    required
                  />
                  <button type='button' className={`tooggle-password ${language ? "Show_button" : ''}`} onClick={toogglePasswordVisibility} >
                      {showPassword ? t("Hide") : t("Show")}
                  </button>
                  <div className={`error-container ${passwordError ? 'show' : ''}`}>
                    {(passwordError) && <div className='error-message'>{t("passwordError")}<span className='arrow-right'></span></div>}
                  </div>
                </div>
                <br />
                <div className="ForgotPassword">
                  <div className='OnclickForgetpassword'>
                    <h6 onClick={handleForgetPassword}>{t("ForgetPassword")}</h6>
                  </div>
                </div>
                <br />
                <div className="SubmitButton">
                  <button type="submit" className='btn_login' style={{backgroundColor: email.length > 1 || password.length > 1 ? 'blue' : ''}}>{t("Login")}</button>
                </div>
                <br />
                <div className="NewUser">
                  <h5>{t("NewUser")}</h5>
                  <div className="Register">
                    <button type="button" onClick={handleRegisterClick}>
                    {t("RegisterNow")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <FooterOption />
        </div>
        <section>
          <div className="Header">
            <div className="Logo">
              <img src={img1} alt="Logo" />
            </div>
            <div className="language-container">
              <div className="lang-dropdown">
                <button className="lang-dropdown-button">
                  <p>{i18n.language}</p>
                  <div className="arrow-vect">
                    <IoIosArrowDown />
                  </div>
                </button>
                <div className="lang-dropdown-content">
                 <button onClick={() => changeLanguage('English')}> English </button>
                 <button onClick={() => changeLanguage('عربي')}> عربي </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Login;
