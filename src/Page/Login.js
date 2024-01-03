import React from 'react';
import { img1, img2 } from '../Component/Images';
import { FooterOption } from '../Component/Footer/Footer';
import '../CSS/Login.css';
import { Link } from 'react-router-dom';
import { FaArrowDown } from "react-icons/fa";


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
                  <input type="email" name="email" placeholder='Email*' required />
                </div><br />
                <div className='Box1-password'>
                  <input type="password" name="password" placeholder='Password*' required />
                </div>
                <div className="ForgotPassword">
                  <Link to="/Login">Forgot Password?</Link>
                </div>
                <br />
                <div className='SubmitButton'>
                <button type="submit">Login</button>
                </div> <br />
                <div className="NewUser">
                  <h5>New User?</h5>
                  <div className='Register'>
                    <button type='NewRegister'>Register</button>
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
              <div className='EN'>
                <h4>EN <FaArrowDown /></h4> 
              </div>
            </div>
          </section>
      </section>
    </>
  );
}

export default Login;