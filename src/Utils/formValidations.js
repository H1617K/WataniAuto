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
  const [confirmPassword,setConfirmPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError,setConfirmPasswordError] = useState("")
  const [isEmailFocused, setIsEmailFocused] = useState(false)
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)
  const [isconfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

  const [formData, setFormData] = useState([])

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (e) =>{
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("")
  }

  const { t } = useTranslation();


  const requirements = [
    { regex: /.{8,15}/,lable: t("Condiction1") ,index: 0 },
    { regex: /[A-Z]/,lable:t("Condiction2") , index: 1 },
    { regex: /[a-z]/,lable: t("Condiction3"), index: 2 },
    { regex: /[0-9]/,lable: t("Condiction4"), index: 3 },
    { regex: /[^A-Za-z0-9]/, lable:t("Condiction5") , index: 4 },
  ]

  const [passwordRequirements, setPasswordRequirements] = useState(
    Array.from({ length: requirements.length }, () => ({ isValid: false }))
  );

  const updatePasswordRequirements = (password) => {
    const updatedRequirements = requirements.map((req) => ({
     isValid: req.regex.test(password),
    }));
    setPasswordRequirements(updatedRequirements);
  };

  const handlePasswordRegisterChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError("");
    // Update password requirements feedback
    updatePasswordRequirements(newPassword);
  };

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

    if(password !== confirmPassword){
      setConfirmPasswordError(t("ConfirmPasswordError"))
    }

    if (isValidEmail(email)
    && isValidPassword(password)) {
      setEmail("")
      setPassword("")
      setConfirmPassword("")
      setIsEmailFocused(false)
      setIsPasswordFocused(false)
      setIsConfirmPasswordFocused(false);

      const newData = { email, password }
      setFormData((prevData) => [...prevData, newData])

      console.log(`Email: ${newData.email}, Password: ${newData.password}`);

    }
  }
  return {
    email, password, setEmail, setPassword,
    confirmPassword,setConfirmPassword,isconfirmPasswordFocused, setIsConfirmPasswordFocused,confirmPasswordError,
    setConfirmPasswordError, handleConfirmPasswordChange, isEmailFocused, setIsEmailFocused, isPasswordFocused,
    setIsPasswordFocused, handlerSubmit, emailError, passwordError,handleEmailChange, handlePasswordChange, 
    formData, requirements, passwordRequirements, handlePasswordRegisterChange
  }
}