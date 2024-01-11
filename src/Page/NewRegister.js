import React from 'react';
import { img1, img2 } from '../Component/Images';
import '../CSS/NewRegister.css';
// import { FiInfo } from "react-icons/fi";
import { FooterOption } from '../Component/Footer/Footer';
import { IoIosArrowDown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import i18n from '../Utils/LanguageLocalization';


const Register = () => {
  const { t } = useTranslation();
  const langdirection = i18n.language === "Arbic" ? "rtl" : "ltr"  // Language Direction

  const changeLanguage = (newLanguage) => {  // Change Language
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <section className="Main-Register-Page">
        <div className="back-img" >
          <img src={img2} alt="img"/>
          <section>
             <div className="Main-Register-form">
                <form>
                 <div className="Box-heder1">
                   <h2>Create an Anccount</h2>
                 </div><br />
                 <div className='Box1'>
                    <div className='FristName'>
                        <input type='text' placeholder='Frist Name*' required />
                    </div>
                    <div className='LastName'>
                        <input type='text' placeholder='Last Name*' required />
                    </div>
                 </div><br />
                 <div className='Box2'>
                    <div className='Email'>
                        <input type='Email' placeholder='Email*' required />
                    </div>
                    {/* <div className='Info'>
                    <FiInfo />
                    </div> */}
                 </div><br />
                 <div className='Box3'>
                    <div className='CountryCode'>
                        <input type='positivenumber' placeholder='+91' required />
                    </div>
                    <div className='MobileNub'>
                        <input type='PhoneNumber'  placeholder='Mobile Number*' required  />
                    </div>
                 </div><br/>
                 <div className='Box4'>
                    <div className='Password'>
                        <input type='Password' placeholder='Password*' required />
                    </div>
                 </div><br />
                 <div className='Box5'>
                    <div className='Confrim-Password'>
                        <input type='Password' placeholder='Confrim Password*' required />
                    </div>
                 </div><br />
                 <div className='Box6'>
                    <div className='CheckBox'>
                    <input type='CheckBox' required/>
                    <h6>By creating a watani account, i agree to the Tearms
                            of Use, and Privacy Notice.
                        </h6>
                    </div>
                 </div>
                    <div className='SubmitButton'>
                     <button type='submit'>Create Account</button>
                    </div>
                </form>          
              </div>
          </section>
          <FooterOption/>
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
                 <button onClick={() => changeLanguage ('English')}> English </button>
                 <button onClick={() => changeLanguage('Arbic')}> Arabic </button>
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