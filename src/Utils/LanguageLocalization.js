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
                TostSucess1:"Login Sucessfully!",
                TostError1:"Invalid Credentials!",

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
                HoverMessage: "Email is used for communication purpose",
                Number: "+996",
                MobileNumber: "Mobile Number*",
                ConfrimPassword: "Confrim password*",
                ConfirmPasswordError: "Password Doesn't Match",
                Notice: "By creating a watani account, I agree to the Terms of Use, and Privacy Notice.",
                CreateAccount: "Create Account",
                TostError: "Email and password already exists, make anothr email ad password",
                TostSucess: "Register Sucessfully!",

                //PasswordValidation
                Passwordmusthave : "Password must have",
                Condiction1 :"8 to 15 characters,",
                Condiction2 :"1 Uppercase(A-Z),",
                Condiction3 :"1 lower case(a-z),",
                Condiction4 :"1 number (0-9) and",
                Condiction5 :"1 special character like @,$,%, and &.",
            }
        },
        عربي: {
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
                TostSucess1:"تسجيل الدخول بنجاح!",
                TostError1:"بيانات الاعتماد غير صالحة !",

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
                HoverMessage: "يستخدم البريد الإلكتروني لغرض التواصل",
                Number: "تسعة مائة وستة وتسعون",
                MobileNumber: "رقم الهاتف المحمول*",
                ConfrimPassword: "تأكيد كلمة المرور*",
                ConfirmPasswordError: "كلمة المرور غير متطابقة",
                Notice: "بإنشاء حساب وطني، فإنني أوافق على شروط الاستخدام وإشعار الخصوصية.",
                CreateAccount: "إنشاء حساب",
                TostError:"البريد الإلكتروني وكلمة المرور موجودان بالفعل، قم بإنشاء كلمة مرور أخرى لإعلان البريد الإلكتروني",
                TostSucess:"سجل بنجاح!",

                //PasswordValidation
                Passwordmusthave : "يجب أن يكون لديك كلمة المرور",
                Condiction1 :"من 8 إلى 15 حرفًا،",
                Condiction2 :"1 حرف كبير (من A إلى Z)،",
                Condiction3 :"1 حالة صغيرة (من a إلى z)،",
                Condiction4 :"1 رقم (0-9) و",
                Condiction5 :"حرف خاص واحد مثل @ و$ و% و&.",
            }
        }
    }
})

export default i18n;