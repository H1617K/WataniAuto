import React, { useState } from 'react';
import { img1, img2 } from '../Component/Images';
import { FooterOption } from '../Component/Footer/Footer';
import '../CSS/Login.css';
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
// import { useFormValidation } from '../Utils/formValidation';


const Login = () => {
  // const [emailplaceholder, setEmailPlaceholder] = useState("Email*")
  // // const [Passwordplaceholder,setPasswordPlaceholder] = useState("Password*")
  // const [backgroundColor, setbackgroundColor] = useState('')
  // const [isEmailFocused, setIsEmailFocused] = useState(false);
  // const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const NavigationType = useNavigate();

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  // const onfocus = () => {
  // setemailplaceholder("example@domain.com")
  // setbackgroundColor('blue')
  // setIsEmailFocused(true);
  // }
  // const onBlur = () => {
  // setEmailPlaceholder("Email*")
  // setIsEmailFocused(email !== '');
  // }

  // const OnPasswordFocus = () => {
  // setIsPasswordFocused(true);
  // }

  // const onPasswordBlur = () => {
  // setIsPasswordFocused(false);
  // }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const { email, password, handlerSubmit, emailError, passwordError, handleEmailChange, handlePasswordChange } = useFormValidation()

    
  const handleSubmit = (e) => {
    e.preventDefault();
    // Store in local storage
    localStorage.setItem('User', JSON.stringify({ email, password }));

    // Print in JSON format on the console
    console.log(JSON.stringify({ email, password }));
  };

   // Navifgate for the regidter page for New Register
  const handleRegisterClick = () => {
    NavigationType("/NewRegister");
  }

  return (
    <>
      <section>
       <div className="Main-login-Page">
        <div className="back-img" >
          <img src={img2} alt="img"/>
          <section>
            <div className="Main-Login-form">
              <form onSubmit={handleSubmit}>
                <div className="Box-heder-Welcome">
                  <h2>Welcome!</h2>
                </div>
                <div className='Box-Email'>
                {/* {isEmailFocused ?
                  <label className={`lable_holder lable-email ${isEmailFocused ? 'focused' : ''}`}>Email*</label>
                  : ""} */}
                  <input type="email" name="email" value={email} onChange={handleEmailChange} required />
                  <label className='Lable-Holder-Email'>Email*</label>
                </div><br />
                <div className='Box1-password'>
                  <input type="password" name="password" value={password} onChange={handlePasswordChange}  required />
                  <label className='Lable-Holder-Password'>Password*</label>
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
                    <button type='button' onClick={handleRegisterClick}>Register Now</button>
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
                      <h6> Arabic </h6>
                     </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Login;