import React, { useState } from 'react';
import { img1, img5,  } from '../Component/Images';
import '../CSS/NewRegister.css';
import { FooterOption } from '../Component/Footer/Footer';
import { IoIosArrowDown } from 'react-icons/io';
import { FaArrowLeft, FaCircleInfo } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import i18n from '../Utils/LanguageLocalization';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { t } = useTranslation();
  const langdirection = i18n.language === "عربي" ? "rtl" : "ltr"; // Language Direction
  const [showPassword, setShowPassword] = useState(false);  // Show Paaword
  const [showconfimpassword, setShowconfimPassword] = useState(false);  // Show ConfimPaaword

  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  const toogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const tooggleConfimPasswordVisibility = () => {
    setShowconfimPassword(!showconfimpassword)
  }

  // Move useNavigate outside of the handleToLogin function
  const navigate = useNavigate();

  const handleToLogin = () => {
    navigate('/Login');
  };

  return (
    <>
      <section className="Main-Register-Page" dir={langdirection}>
        <div className="back-img">
          <img src={img5} alt="img" />
          <section>
            <form>
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
                    <input type='Email' placeholder={t("Email")} required />
                  </div>
                  <div className='Info'>
                    <FaCircleInfo />
                  </div>
                 </div><br />
                  <div className='Box3'>
                    <div className='CountyCode'>  
                      <input type='positivenumber' placeholder={t("Number")} required/>
                    </div>
                    <div className='MobileNumber'>
                     <input type='positivenumber' placeholder={t("MobileNumber")} required/>
                    </div>
                  </div><br />
                 <div className='Box4'>
                    <div className='Password'>
                      <input type={showPassword ? 'text' : 'password'} placeholder={t("Password")} required />
                      <button type='button' className='tooggle-password1' onClick={toogglePasswordVisibility} >
                        {showPassword ? t("Hide") : t("Show")}
                      </button>
                    </div>
                 </div><br />
                 <div className='Box5'>
                    <div className='Confrim-Password'>
                      <input type={showconfimpassword ? 'text' : 'password'} placeholder={t("ConfrimPassword")} required />
                      <button type='button' className='tooggle-password-confim' onClick={tooggleConfimPasswordVisibility} >
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

//By creating a watani account, i agree to the Tearms of Use, and Privacy Notice.
