import React, { useState } from 'react';
import { img1, img2 } from '../Component/Images';
import { FooterOption } from '../Component/Footer/Footer';
import '../CSS/Login.css';
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
// import { useFormValidation } from '../Utils/formValidation';
import validator from 'validator';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [emailPlaceholder, setEmailPlaceholder] = useState('Email*');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Password*');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const toogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailFocus = () => {
    setEmailPlaceholder('example@domain.com');
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailPlaceholder('Email*');
    setIsEmailFocused(email !== '');
  };

  const handlePasswordFocus = () => {
    setPasswordPlaceholder('Password');
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setPasswordPlaceholder('Password*');
    setIsPasswordFocused(password !== '');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail();
  };

  const handlePasswordChange   = (e) => {
    setPassword(e.target.value);
    validatePassword();
  };

  const validateEmail = () => {
    if (!validator.isEmail(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validatePassword = () => {
    if (passwordPattern.test(password)) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email) || passwordPattern.test(password)) {
      return;
    }
    localStorage.setItem('User', JSON.stringify({ email, password }));
    console.log(JSON.stringify({ email, password }));
  };

  const handleRegisterClick = () => {
    navigate('/NewRegister');
  };

  const handleForgetPassword = () => {
    navigate('/Forgetpassword');
  };

  // const { email, password, handlerSubmit, emailError, passwordError, handleEmailChange, handlePasswordChange } = useFormValidation()

  return (
    <section>
      <div className="Main-login-Page">
        <div className="back-img">
          <img src={img2} alt="img" />
          <section>
            <div className="Main-Login-form">
              <form onSubmit={handleSubmit}>
                <div className="Box-heder-Welcome">
                  <h2>Welcome!</h2>
                </div>
                <div className="Box-Email">
                  {isEmailFocused && <label className="Label-Holder-Email">Email*</label>}
                  <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder={emailPlaceholder}
                    onChange={handleEmailChange}
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                    required
                  />
                </div>
                <br />
                <div className="Box1-password">
                  {isPasswordFocused && <label className="Label-Holder-Password">Password*</label>}
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={password}
                    placeholder={isPasswordFocused ? '' : passwordPlaceholder}
                    onChange={handlePasswordChange}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                    required
                  />
                  <button type='button' className='tooggle-password' onClick={toogglePasswordVisibility}>
                      {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <br />
                <div className="ForgotPassword">
                  <div className='OnclickForgetpassword'>
                    <h6 onClick={handleForgetPassword}>Forget password?</h6>
                  </div>
                </div>
                <br />
                <div className="SubmitButton">
                  <button type="submit">Login</button>
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
                  <p>EN</p>
                  <div className="arrow-vect">
                    <IoIosArrowDown />
                  </div>
                </button>
                <div className="lang-dropdown-content">
                  <h6> English </h6>
                  <h6> Arabic </h6>
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
