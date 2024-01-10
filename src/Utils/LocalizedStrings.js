import { useState } from "react";
import LocalizedStrings from "react-localization";

const useUserLanguage = () => {
    const [language, setLanguage] = useState("en"); // Use lowercase language code
    
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    }

    return { language, changeLanguage }; // Return the language state and changeLanguage function
}

// Use lowercase language codes in the LocalizedStrings constructor
let strings = new LocalizedStrings({
    EN: {
        Welcome: "Welcome",
        Email: "Email*",
        Password: "Password*",
        Show: "Show",
        Hide: "Hide",
        ForgetPassword: "Forget Password*",
        Login: "Login",
        NewUser: "New User?",
        RegisterNow: "Register Now", 
    },
    AR: {
        Welcome: "مرحباً",
        Email: "بريد إلكتروني*",
        Password: "كلمة المرور*",
        Show: "يعرض",
        Hide: "يخفي",
        ForgetPassword: "نسيت كلمة المرور*",
        Login: "تسجيل الدخول",
        NewUser: "مستخدم جديد؟",
        RegisterNow: "سجل الآن",
    }
});

export { useUserLanguage, strings };
