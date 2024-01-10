import React, { useState } from 'react';
import { img1, img2 } from '../Component/Images';
import { FooterOption } from '../Component/Footer/Footer';
import '../CSS/Login.css';
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useFormValidation } from '../Utils/FormValidation';
import { strings, useUserLanguage } from '../Utils/LocalizedStrings';

const Login = () => {
  const { language, changeLanguage } = useUserLanguage();
  const navigate = useNavigate();
  const [emailPlaceholder, setEmailPlaceholder] = useState(strings[language].Email);
  const [showPassword, setShowPassword] = useState(false);

  const toogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLanguageChange = (selectedLanguage) => {
    changeLanguage(selectedLanguage);
    setEmailPlaceholder(strings[selectedLanguage].Email);
  };

  const handleEmailBlur = () => {
    setEmailPlaceholder('Email*');
    setIsEmailFocused(email !== '');
  };

  const onFocus = () => {
    setEmailPlaceholder("example@domain.com")
    setIsEmailFocused(true);
}

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(password !== '');
  };

  const handleRegisterClick = () => {
    navigate('/NewRegister');
  };

  const handleForgetPassword = () => {
    navigate('/Forgetpassword');
  };

  const { email, password, isEmailFocused, setIsEmailFocused, isPasswordFocused, setIsPasswordFocused, handlerSubmit, emailError, passwordError, handleEmailChange, handlePasswordChange,
  }= useFormValidation()

  return (
    <section>
      <div className="Main-login-Page">
        <div className="back-img">
          <img src={img2} alt="img" />
          <section>
            <div className="Main-Login-form">
              <form onSubmit={handlerSubmit} noValidate>
                <div className="Box-heder-Welcome">
                  <h2>Welcome!</h2>
                </div>
                <div className="Box-Email">
                  {isEmailFocused && <label className="Label-Holder-Email">Email*</label>}
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
                    {(emailError) && <div className='error-message'>{emailError}<span className='arrow-right'></span></div>}
                  </div>
                </div>
                <br />
                <div className="Box1-password">
                  {isPasswordFocused && <label className="Label-Holder-Password">Password*</label>}
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className={passwordError ? 'error' : ''}
                    name="password"
                    value={password}
                    placeholder={isPasswordFocused ? '' : 'Password*'}
                    onChange={handlePasswordChange}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                    minLength={8}
                    maxLength={15}
                    required
                  />
                  <button type='button' className='tooggle-password' onClick={toogglePasswordVisibility}>
                      {showPassword ? "Hide" : "Show"}
                  </button>
                  <div className={`error-container ${passwordError ? 'show' : ''}`}>
                    {(passwordError) && <div className='error-message'>{passwordError}<span className='arrow-right'></span></div>}
                  </div>
                </div>
                <br />
                <div className="ForgotPassword">
                  <div className='OnclickForgetpassword'>
                    <h6 onClick={handleForgetPassword}>Forget password?</h6>
                  </div>
                </div>
                <br />
                <div className="SubmitButton">
                  <button type="submit" className='btn_login' style={{backgroundColor: email.length > 1 || password.length > 1 ? 'blue' : ''}}>Login</button>
                </div>
                <br />
                <div className="NewUser">
                  <h5>New User?</h5>
                  <div className="Register">
                    <button type="button" onClick={handleRegisterClick}>
                      Register Now
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
                  <p>{language}</p>
                  <div className="arrow-vect">
                    <IoIosArrowDown />
                  </div>
                </button>
                <div className="lang-dropdown-content">
                 <h6 onClick={() => handleLanguageChange('en')}> English </h6>
                 <h6 onClick={() => handleLanguageChange('ar')}> Arabic </h6>
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
