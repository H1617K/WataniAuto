import { useState } from "react";
import { useTranslation } from 'react-i18next';

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


    const handlerRegisterSubmit = (e) => {
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

        const isDuplicateUser = formData.some((data) => data.Email === Registeremail && data.Password === Registerpassword);
            if (isDuplicateUser) {
            setEmailError("Email combination already registered");
            setPasswordError("password combination already registered")
            return;
        }
            else{
            console.log("form submitted")
            resetFormFields()
            const newData = { FirstName: inputValues.FirstName, LastName: inputValues.LastName, Email: Registeremail, Password: Registerpassword };
            const updatedFormData = [...formData, newData];

            setFormData(updatedFormData);

            localStorage.setItem("formData", JSON.stringify(updatedFormData))
        } 
    }
    return {
        Registeremail,
        setRegisterEmail,
        Registerpassword,
        setRegisterPassword,
        confirmPassword,
        setConfirmPassword,
        isEmailFocused,
        setIsEmailFocused,
        isPasswordFocused,
        setIsPasswordFocused,
        isconfirmPasswordFocused,
        setIsConfirmPasswordFocused,
        confirmPasswordError,
        setConfirmPasswordError,
        handlerRegisterSubmit,
        emailError,
        passwordError,
        setEmailError,
        setPasswordError,
        handleChange,
        inputValues,
        focusedField,
        setFocusedField,
        handleRegisterEmailChange,
        handleCheckboxChange,
        isChecked,
        handleConfirmPasswordChange,
        handlePasswordRegisterChange,
        requirements,
        passwordRequirements,
        formData,
    };
};