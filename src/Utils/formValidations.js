import { useState } from 'react'
import { useTranslation } from 'react-i18next';


export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

export const useFormValidations = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false)
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)

  const [formData, setFormData] = useState([])

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const { t } = useTranslation();

 const handlerSubmit = (e) => {
    e.preventDefault()

    if (!isValidEmail(email)) {
      setEmailError("Please enter the Correct email id.")
      return;
    }
    if (!isValidPassword(password)){
    setPasswordError("please enter the Correct Password.")
      return;
    }

    // if(password !== confirmPassword){
    //   setConfirmPasswordError(t("ConfirmPasswordError"))
    // }

    if (isValidEmail(email)
    && isValidPassword(password)) {
      setEmail("")
      setPassword("")
      // setConfirmPassword("")
      setIsEmailFocused(false)
      setIsPasswordFocused(false)
      // setIsConfirmPasswordFocused(false);

      const newData = { email, password }
      setFormData((prevData) => [...prevData, newData])

      console.log(`Email: ${newData.email}, Password: ${newData.password}`);

    }
  }
  return {
    email, password, setEmail, setPassword,
    isEmailFocused, setIsEmailFocused, isPasswordFocused,
    setIsPasswordFocused, handlerSubmit, emailError, passwordError,handleEmailChange, handlePasswordChange, 
    formData
  }
}