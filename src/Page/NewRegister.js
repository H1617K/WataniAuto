import React, { useState } from 'react';
import { img1, img5,  } from '../Component/Images';
import '../CSS/NewRegister.css';
import { FooterOption } from '../Component/Footer/Footer';
import { IoIosArrowDown } from 'react-icons/io';
import { FaArrowLeft, FaCircleInfo } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import i18n from '../Utils/LanguageLocalization';
import { useNavigate } from 'react-router-dom';
// import countryList from 'react-select-country-list';
import { useRegisterFromValidation } from '../Utils/RegisterFormValidation';
import CountrySelect from '../Component/Country/CountrySelect';

const Register = () => {

  const { Registeremail,setRegisterEmail,Registerpassword,setRegisterPassword,confirmPassword,setConfirmPassword,
    isEmailFocused,setIsEmailFocused,isPasswordFocused,setIsPasswordFocused,isconfirmPasswordFocused,setIsConfirmPasswordFocused,
    confirmPasswordError,setConfirmPasswordError,handlerRegisterSubmit,emailError,passwordError,setEmailError,setPasswordError,
    handleChange,inputValues,focusedField,setFocusedField,handleRegisterEmailChange,handleCheckboxChange,isChecked,handleConfirmPasswordChange,
    handlePasswordRegisterChange,requirements,passwordRequirements,formData,
  }= useRegisterFromValidation()

  const { t } = useTranslation(); // Traslation for all page and it's input
  const langdirection = i18n.language === "عربي" ? "rtl" : "ltr"; // Language Direction
  const language = i18n.language === "عربي"; // chnage show and hide password direction
  const [showPassword, setShowPassword] = useState(false);  // Show Paaword
  const [showconfimpassword, setShowconfimPassword] = useState(false);  // Show ConfimPaaword
  // const [selectedCountry, setSelectedCountry] = useState('');  // CountryCode
  // // const [phoneNumber, setPhoneNumber] = useState('');
  const [showMessage, setShowMessage] = useState(false); // info mail message
  const [FocusedPassword, setFocuedPassword] = useState(false);
  const navigate = useNavigate(); // Move useNavigate outside of the handleToLogin function
 

  const onfieldfocuse = (fieldname) => {
    setFocusedField(fieldname)
  }
  
  const onfieldblur = () => {
    setFocusedField('')
  }

  const onFocusedPassword = () => {
    setFocuedPassword (true);
    setIsPasswordFocused(true);
  }

  const onBlurPassword = () => {
    setFocuedPassword (false)
    setIsPasswordFocused(Registerpassword !== '');
  }

  const handleEmailBlur = () => {
    setIsEmailFocused(Registeremail !== '');
  };
  
  const onFocus = () => {
    setIsEmailFocused(true);
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

  // const handleCountryChange = (value) => {
  //   setSelectedCountry(value);
  // };

  const OnConfirmPasswordFocus = () => {
    setIsConfirmPasswordFocused(true);
  };

  const onConfirmPasswordBlur = () => {
    setIsConfirmPasswordFocused(confirmPassword !== '');
  };

  const isformValid = (
    inputValues.fieldName !== "" &&
    Registeremail !== "" &&
    Registerpassword !== "" &&
    confirmPassword !== "" &&
    isChecked
  )
  // const handlePhoneChange = (value, country) => {
  //   setPhoneNumber(value);
  // };

  const handleToLogin = () => {
    navigate('/Login');
  };

  
  return (
    <>
      <section className="Main-Register-Page" dir={langdirection}>
        <div className="back-img">
          <img src={img5} alt="img" />
          <section>
            <form onSubmit={handlerRegisterSubmit} noValidate>
              <div className='Main-Register-form'>
                <div className='Back-To-Login'>
                  <button type='button' onClick={handleToLogin}><FaArrowLeft /></button>
                </div>
                <div className="Box-heder1">
                  <h2>{t("CreateanAccount")}</h2>
                </div><br />
                <div className='Box1'>
                  <div className='FristName'>
                  {focusedField === "FirstName" || (inputValues.FirstName && inputValues.FirstName.length > 0) ? (<label className="FirstName-lable">{t("FirstName")}</label>) : null}
                  <input type='text' 
                    value={inputValues.FirstName}
                    placeholder={focusedField === 'FirstName' ? '' : t("FirstName")} 
                    onFocus={() => onfieldfocuse ('FirstName')}
                    onBlur={onfieldblur}
                    onChange={(e) => handleChange('FirstName', e.target.value)}
                    required />
                  </div>
                  <div className='LastName'>
                  {focusedField === "LastName" || (inputValues.LastName && inputValues.LastName.length > 0) ? (<label className="LastName-lable">{t("LastName")}</label>) : null}
                  <input type='text'
                    value={inputValues.LastName} 
                    placeholder={focusedField === 'LastName' ? '' : t("LastName")} 
                    onFocus={() => onfieldfocuse ('LastName')}
                    onBlur={onfieldblur}
                    onChange={(e) => handleChange('LastName', e.target.value)}
                    required />
                  </div>
                </div><br />
                <div className='Box2'>
                  <div className='Email'>
                    {isEmailFocused && <label className="Label-Email">{t("Email")}</label>}
                    <input
                      value={Registeremail}
                      type="email"
                      className={emailError ? 'error' : ''}
                      name="email"
                      placeholder={isEmailFocused ? "" : t("Email")}
                      onChange={handleRegisterEmailChange}
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
                    {/* <select
                      onChange={(e) => handleCountryChange(e.target.value)}
                      value={selectedCountry}
                    >
                      {countryList().getData().map((country) => (
                        <option key={country.value} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select> */}
                    <CountrySelect/>
                  </div>
                  <div className='Number'>
                  {focusedField === "MobileNumber" || (inputValues.MobileNumber && inputValues.MobileNumber.length > 0) ? 
                    (<label className="MobileNumber-lable">{t("MobileNumber")}</label>) : null}
                  <input 
                    type='tel' 
                    placeholder={focusedField === 'MobileNumber' ? '' : t("MobileNumber")} 
                    onFocus={() => onfieldfocuse ('MobileNumber')}
                    onBlur={onfieldblur}
                    onChange={(e) => handleChange('MobileNumber', e.target.value)} 
                    value={inputValues.MobileNumber || ''} 
                    required
                  /> 
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
                    { isPasswordFocused && <label className="Label-Holder-Password1">{t("Password")}</label>}
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className={passwordError ? 'error' : ''}
                        name="password"
                        value={Registerpassword}
                        placeholder={ isPasswordFocused ? '' : t("Password")}
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
                  {isconfirmPasswordFocused && (
                    <label className="lable_confirm_pass">{t("ConfrimPassword")}</label>
                  )}
                  <input
                    type={showconfimpassword ? 'text' : 'password'}
                    value={confirmPassword}
                    id="ConfrimPassword"
                    name="ConfrimPassword"
                    onFocus={OnConfirmPasswordFocus}
                    onBlur={onConfirmPasswordBlur}
                    placeholder={isconfirmPasswordFocused ? '' : t("ConfrimPassword")}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                    <button type='button' className={`tooggle-password-confim ${language ? "Confrim-Paswsword-arabic" : ''}`} onClick={tooggleConfimPasswordVisibility} >
                      {showconfimpassword ? t("Hide") : t("Show")}
                    </button>
                    <div className={`error-container-confirm ${confirmPasswordError ? "show" : ""}`}>
                      {confirmPasswordError && (
                        <div className="error-message-confim">
                          {confirmPasswordError}
                          <span className="arrow-right"></span>
                        </div>
                      )}
                      </div>
                  </div>
                </div><br />
              <div className='Box6'>
                <div className='CheckBox'>
                  <input type="checkbox" id="transparentCheckbox" className="transparent-checkbox" checked={isChecked} onChange={handleCheckboxChange}required/>
                </div>
                <div className='Notice'>
                  <h6>{t("Notice")}</h6>
                </div>
              </div>
                <div className='SubmitButton'>
                  <button type='submit' className={`btn_create-account ${isformValid ? 'form-valid' : 'form-invalid'}`}
                  disabled={!isformValid}>{t("CreateAccount")}</button>
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