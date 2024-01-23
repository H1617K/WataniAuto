import React, { useEffect, useState } from 'react';
import { img1, img5,  } from '../Component/Images';
import '../CSS/NewRegister.css';
import { FooterOption } from '../Component/Footer/Footer';
import { IoIosArrowDown } from 'react-icons/io';
import { FaArrowLeft, FaCircleInfo } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import i18n from '../Utils/LanguageLocalization';
import { useNavigate } from 'react-router-dom';
import countryList from 'react-select-country-list';
import { useFormValidations } from '../Utils/formValidations';
// import PhoneInput from 'react-phone-input-2';

const Register = () => {
  const { t } = useTranslation(); // Traslation for all page and it's input
  const langdirection = i18n.language === "عربي" ? "rtl" : "ltr"; // Language Direction
  const language = i18n.language === "عربي"; // chnage show and hide password direction
  const [showPassword, setShowPassword] = useState(false);  // Show Paaword
  const [showconfimpassword, setShowconfimPassword] = useState(false);  // Show ConfimPaaword
  const [selectedCountry, setSelectedCountry] = useState('');  // CountryCode
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [showMessage, setShowMessage] = useState(false); // info mail message
  const [FocusedPassword, setFocuedPassword] = useState(false);
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email*");
  const navigate = useNavigate(); // Move useNavigate outside of the handleToLogin function

  useEffect(() => {
    setEmailPlaceholder(t("Email"))
  },[t])

  const onFocusedPassword = () => {
    setFocuedPassword (true);
  }

  const onBlurPassword = () => {
    setFocuedPassword (false)
  }

  const handleEmailBlur = () => {
    setEmailPlaceholder(t("Email"));
    setIsEmailFocused(email !== '');
  };
  
  const onFocus = () => {
    setEmailPlaceholder(true);
  }

  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  const toogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const tooggleConfimPasswordVisibility = () => {
    setShowconfimPassword(!showconfimpassword)
  }

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  // const handlePhoneChange = (value, country) => {
  //   setPhoneNumber(value);
  // };

  const handleToLogin = () => {
    navigate('/Login');
  };

  const { email, password, isEmailFocused, 
    setIsEmailFocused,handlerSubmit, emailError, passwordError, handleEmailChange,
    requirements, passwordRequirements, handlePasswordRegisterChange
  }= useFormValidations()

  return (
    <>
      <section className="Main-Register-Page" dir={langdirection}>
        <div className="back-img">
          <img src={img5} alt="img" />
          <section>
            <form onSubmit={handlerSubmit} noValidate>
              <div className='Main-Register-form'>
                <div className='Back-To-Login'>
                  <button type='button' onClick={handleToLogin}><FaArrowLeft /></button>
                </div>
                <div className="Box-heder1">
                  <h2>{t("CreateanAccount")}</h2>
                </div><br />
                <div className='Box1'>
                  <div className='FristName'>
                    <input type='text' placeholder={t("FirstName")} required />
                  </div>
                  <div className='LastName'>
                    <input type='text' placeholder={t("LastName")} required />
                  </div>
                </div><br />
                <div className='Box2'>
                  <div className='Email'>
                    {isEmailFocused && <label className="Label-Email">{t("Email")}</label>}
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
                    <div className={`error-container1 ${emailError ? 'show' : ''}`}>
                      {(emailError) && <div className='error-message1'>{t("emailError")}<span className='arrow-right'></span></div>}
                    </div>
                  </div>
                  <div className='Info'>
                    <div className='InfoContainer' onMouseEnter={() => setShowMessage(true)} onMouseLeave={() => setShowMessage(false)}>
                      {showMessage && (
                        <div className= 'HoverMessage' >
                          {t("HoverMessage")}
                          <span className='arrow-down'></span>
                        </div>
                      )}
                      <FaCircleInfo />
                    </div>
                  </div>
                </div><br />
                <div className='Box3'>
                  <div className='CountryList'>
                    <select
                      onChange={(e) => handleCountryChange(e.target.value)}
                      value={selectedCountry}
                    >
                      {countryList().getData().map((country) => (
                        <option key={country.value} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='Number'>
                    <input type='tel' placeholder={t("MobileNumber")} required/> 
                  </div>
                </div><br />
                <div className='Box4'>
                  <div className='Password'>
                    { FocusedPassword && (<div className={`Password-Validation`}>
                      <h6>{t("Passwordmusthave")}</h6>
                      <div className='Line'>
                        <hr/>
                     </div>
                      <ul className="requirements">
                        {requirements.map((req, index) => (
                          <li key={index} className={passwordRequirements[index].isValid ? "valid" : "invalid"}>
                            <div className="icon-container">
                              <span className="icon">&#9898;</span> 
                              {passwordRequirements[index].isValid && <span className="checkmark">&#10003;</span>} 
                              <span className='requirement-label'>{req.lable}</span>
                            </div>
                          </li>
                        ))}
                      </ul><span className='right-arrow'></span>
                    </div>)}
                    { FocusedPassword && <label className="Label-Holder-Password1">{t("Password")}</label>}
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className={passwordError ? 'error' : ''}
                        name="password"
                        value={password}
                        placeholder={FocusedPassword ? '' : t("Password")}
                        onChange={handlePasswordRegisterChange}
                        onFocus={onFocusedPassword}
                        onBlur={onBlurPassword}
                        minLength={8}
                        maxLength={15}
                        required
                      />
                    <button type='button' className={`tooggle-password1 ${language ? "Show_passwordbutton" : ''}`} onClick={toogglePasswordVisibility} >
                        {showPassword ? t("Hide") : t("Show")}
                     </button>
                  </div>
               </div><br />
                <div className='Box5'>
                  <div className='Confrim-Password'>
                    <input type={showconfimpassword ? 'text' : 'password'} placeholder={t("ConfrimPassword")} required />
                    <button type='button' className={`tooggle-password-confim ${language ? "Confrim-Paswsword-arabic" : ''}`} onClick={tooggleConfimPasswordVisibility} >
                      {showconfimpassword ? t("Hide") : t("Show")}
                    </button>
                  </div>
                </div><br />
              <div className='Box6'>
                <div className='CheckBox'>
                  <input type="checkbox" id="transparentCheckbox" className="transparent-checkbox" required/>
                </div>
                <div className='Notice'>
                  <h6>{t("Notice")}</h6>
                </div>
              </div>
                <div className='SubmitButton'>
                  <button type='submit'>{t("CreateAccount")}</button>
                </div>
             </div>
            </form>
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
      </section>
    </>
  );
}

export default Register;