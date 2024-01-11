import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next";

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    debug : true,
    lng : "English",
    resources : {
        English: {
            translation:{
                Welcome: "Welcome!",
                Email: "Email*",
                Password: "Password*",
                Show: "Show",
                Hide: "Hide",
                ForgetPassword: "Forget Password*",
                Login: "Login",
                NewUser: "New User?",
                RegisterNow: "Register Now",
                emailError: "Please enter the Correct email id.",
                passwordError: "please enter the Correct Password.",
            }
        },
        Arbic: {
            translation:{
                Welcome: "مرحباً!",
                Email: "بريد إلكتروني*",
                Password: "كلمة المرور*",
                Show: "يعرض",
                Hide: "يخفي",
                ForgetPassword: "نسيت كلمة المرور*",
                Login: "تسجيل الدخول",
                NewUser: "مستخدم جديد؟",
                RegisterNow: "سجل الآن",
                emailError: "الرجاء إدخال معرف البريد الإلكتروني الصحيح.",
                passwordError: "الرجاء إدخال كلمة المرور الصحيحة.",
            }
        }
    }
})

export default i18n;