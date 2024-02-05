import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const isValidRegisterEmail = (Registeremail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(Registeremail);
};

export const isValidRegisterPassword = (Registerpassword) => {
    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(Registerpassword);
};

export const useRegisterFromValidation = () => {
    const [Registeremail, setRegisterEmail] = useState("");
    const [Registerpassword, setRegisterPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isconfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [focusedField, setFocusedField] = useState('');
    const [inputValues, setInputValues] = useState({
        FirstName: '',
        LastName: '',
        MobileNumber: '',
    });
    const navigate= useNavigate();
    const [isLoading, setIsLoading] = useState (false);


    const [formData, setFormData] = useState([]);
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


    const handleRegisterEmailChange = (e) => {
        setRegisterEmail(e.target.value);
        setEmailError("");
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordError("")
    }

    const updatePasswordRequirements = (Registerpassword) => {
        const updatedRequirements = requirements.map((req) => ({
            isValid: req.regex.test(Registerpassword),
        }));
        setPasswordRequirements(updatedRequirements);
    };

    const handlePasswordRegisterChange = (e) => {
        const newPassword = e.target.value;
        setRegisterPassword(newPassword);
        setPasswordError("");

        // Update password requirements feedback
        updatePasswordRequirements(newPassword);
    };

    const handleChange = (fieldName, value) => {
        let sanitizedValue;
        if (fieldName === 'MobileNumber') {
            // For mobile field, allow only digits
            sanitizedValue = value.replace(/\D/g, '');
        }
        else {
            sanitizedValue = value.replace(/[^A-Za-z]/g, '');
        }

        setInputValues((prevValues) => ({
            ...prevValues,
            [fieldName]: sanitizedValue,
        }));
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const resetFormFields = () => {
        setRegisterEmail("")
        setRegisterPassword("")
        setConfirmPassword("");
        setIsChecked(false)
        setIsEmailFocused(false);
        setIsPasswordFocused(false);
        setIsConfirmPasswordFocused(false);
        setInputValues({
            FirstName: "",
            LastName: "",
            mobile: "",
        });
    };
  
    const handlerRegisterSubmit =async (e) => {
        e.preventDefault();

        if (!isValidRegisterEmail(Registeremail)) {
            setEmailError(t("EmailError"));
        }
        if (!isValidRegisterPassword(Registerpassword)) {
            setPasswordError(t("PasswordError"));
        }
        if (Registerpassword !== confirmPassword) {
            setConfirmPasswordError(t("ConfirmPasswordError"))
        }

        try{
            const response = await fetch("https://watani-auto-fcfda-default-rtdb.firebaseio.com/userData.json")
            if(!response) {
                console.log('error in fetching data')
            }
            const existUser = await response.json();
            const users = Object.values(existUser)
            const isDuplicateUser = users.some(data => data.email === Registeremail && data.password === Registerpassword)
            if (isDuplicateUser) {
                toast.error(t("TostError"))
                resetFormFields()
            }
        else if ( Registerpassword === confirmPassword){
            const res = await fetch("https://watani-auto-fcfda-default-rtdb.firebaseio.com/userData.json",
            {
                method: "POST",
                headers: {
                'Content-type': "application.json"
                },
                body: JSON.stringify({
                email: Registeremail,
                password: Registerpassword,
                })
            })
            if (res){
                setIsLoading (true)
                toast.success(t("TostSucess"))
                setTimeout(()=> {
                    setIsLoading(false)
                    resetFormFields()
                    navigate("/login")
                },3000);
            } else{
                alert("not connect data base");  
            }   
        };
        }
        catch(err){
        console.error(err.message)
        }
    }

    return {
        emailError, setEmailError,Registeremail,setRegisterEmail, isEmailFocused,setIsEmailFocused, handleRegisterEmailChange,
        passwordError, setPasswordError,Registerpassword,setRegisterPassword, isPasswordFocused,setIsPasswordFocused,
        confirmPassword,setConfirmPassword,isconfirmPasswordFocused,setIsConfirmPasswordFocused,confirmPasswordError,setConfirmPasswordError,
        handlerRegisterSubmit, handleChange,isLoading,
        inputValues,focusedField,setFocusedField,
        handleCheckboxChange,
        isChecked,
        handleConfirmPasswordChange,
        handlePasswordRegisterChange,
        requirements,
        passwordRequirements,
        formData,
    };
};