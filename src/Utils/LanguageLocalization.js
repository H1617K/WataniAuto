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
                //LoginPage 
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

                //FooterOption
                AboutUs:"About Us",
                TermsandConditions: "Terms and Conditions",
                text1Key: "Privacy policy",
                Help: "Help",
                Careers: "Careers",
                textKey: "Cancellation policy",

                //RegisterPage 
                CreateanAccount: "Create an Account",
                FirstName: "First Name*",
                LastName: "Last Name*",
                EmailInfo: "Email is used for communication purpose",
                Number: "+996",
                MobileNumber: "Mobile Number*",
                ConfrimPassword: "Confrim password*",
                ConfirmPasswordError: "Password Doesn't Match",
                Notice: "By creating a watani account, I agree to the Terms of Use, and Privacy Notice.",
                CreateAccount: "Create Account",
            }
        },
        Arabic: {
            translation:{
                //LoginPage 
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

                //FooterOption
                AboutUs:"معلومات عنا",
                TermsandConditions: "الأحكام والشروط",
                text1Key: "سياسة الخصوصية",
                Help: "يساعد",
                Careers: "وظائف",
                textKey: "سياسة الإلغاء",

                //RegisterPage
                CreateanAccount: "إنشاء حساب",
                FirstName: "الاسم الأول*",
                LastName: "اسم العائلة*",
                EmailInfo: "يستخدم البريد الإلكتروني لغرض التواصل",
                Number: "تسعة مائة وستة وتسعون",
                MobileNumber: "رقم الهاتف المحمول*",
                ConfrimPassword: "تأكيد كلمة المرور*",
                ConfirmPasswordError: "كلمة المرور غير متطابقة",
                Notice: "بإنشاء حساب وطني، فإنني أوافق على شروط الاستخدام وإشعار الخصوصية.",
                CreateAccount: "إنشاء حساب", 
            }
        }
    }
})

export default i18n;