import React from 'react';
import { img1, img2 } from '../Component/Images';
import '../CSS/NewRegister.css';
import { FaArrowDown, FaArrowLeft } from "react-icons/fa";
import { FooterOption } from '../Component/Footer/Footer';


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
                  <h2>Create an Anccount</h2>
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