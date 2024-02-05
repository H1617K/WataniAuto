import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
  const Navigate = useNavigate();
  const [isLoading , setIsLoading] = useState(false)

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

 const handlerSubmit = async(e) => {
  e.preventDefault()

  if (!isValidEmail(email)) {
    setEmailError(t("EmailError"))
      return;
    }
    if (!isValidPassword(password)){
      setPasswordError(t("PasswordError"))
      return;
      }

      // if(password !== confirmPassword){
      //   setConfirmPasswordError(t("ConfirmPasswordError"))
      // }

      if (isValidEmail(email)
      && isValidPassword(password)) {
      setEmail("")
      setPassword("")
      setIsEmailFocused(false)
      setIsPasswordFocused(false)

      const response = await fetch("https://watani-auto-fcfda-default-rtdb.firebaseio.com/userData.json");
      if (response) {
        const userData = await response.json()
        const users = Object.values(userData)

      const isDuplicateUser = users.find((user) => user.email === email && user.password === password);
        if (isDuplicateUser) {
          setIsLoading(true)
          toast.success(t("TostSucess1"))
          setTimeout(()=>{
          setTimeout(false)
          Navigate("/Home")
        },3000)
      }
        else {
        toast.error(t("TostError1"))
      }
    }
  }
}
  return {
    email, password, setEmail, setPassword,
    isEmailFocused, setIsEmailFocused, isPasswordFocused,
    setIsPasswordFocused, handlerSubmit, emailError, passwordError,handleEmailChange, handlePasswordChange, 
    formData,isLoading
  }
}