import React from 'react';
import { img1, img2 } from '../Component/Images';
import { FooterOption } from '../Component/Footer/Footer';
import '../CSS/Login.css';
import { IoIosArrowDown } from "react-icons/io";


const Login = () => {
  return (
    <>
      <section className="Main-login-Page">
        <div className="back-img" >
          <img src={img2} alt="img"/>
          <section>
            <div className="Main-Login-form">
              <form>
                <div className="Box-heder">
                  <h2>Welcome!</h2>
                </div>
                <div className='Box-Email'>
                  <input type="email" name="email" placeholder=' E-mail*' required />
                </div><br />
                <div className='Box1-password'>
                  <input type="password" name="password" placeholder=' Password*' required />
                </div>
                <div className="ForgotPassword">
                  <h6>Forget Password?</h6>
                </div>
                <br />
                <div className='SubmitButton'>
                <button type="submit">Login</button>
                </div> <br />
                <div className="NewUser">
                  <h5>New User?</h5>
                  <div className='Register'>
                    <button type='NewRegister'>Register Now</button>
                  </div>
                </div>
              </form>          
            </div>
          </section>
          <FooterOption/>
        </div>
        <section>
            <div className='Header'>
              <div className='Logo'>
                <img src={img1} alt="Logo"/>
              </div>
              <div className='language-container'>
                <div className='lang-dropdown'>
                  <button className='lang-dropdown-button'>
                    <p>EN</p>
                    <div className='arrow-vect'>
                       <IoIosArrowDown />
                    </div>
                  </button>
                    <div className='lang-dropdown-content'>
                      <h6> English </h6>
                      <h6> Hindi </h6>
                      <h6> Gujarati </h6>
                     </div>
                </div>
              </div>
            </div>
          </section>
      </section>
    </>
  );
}

export default Login;