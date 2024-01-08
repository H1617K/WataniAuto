import  { useState } from 'react'

export const isValidEmail = (email)  =>{
    const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
;    
}

export const isValidPassword = (password) =>{
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);    
}

export const useFormValidation = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState("")
    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")
    
     const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
      };
     const handlePasswordChange = (e) => {
          setPassword(e.target.value);
          setPasswordError('');
        };
    
     const handlerSubmit= (e) =>{
        e.preventDefault()

        if(!isValidEmail(email)){
            setEmailError("Please enter valid emailId")
        }
       if(!isValidPassword(password))
            setPasswordError("please enter valid password")
        return;
    }
  return {
    email,password,handlerSubmit,emailError,passwordError,handleEmailChange,handlePasswordChange
  }
  
}