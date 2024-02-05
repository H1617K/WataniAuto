import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import i18n from '../../Utils/LanguageLocalization';



const HomeFooter = () => {
    const { t } = useTranslation(); 
    const langDirection = i18n.language === "عربي" ? "rtl" : "ltr"; // Language Direction

    return (
        <>
            <FooterContainer>
        <div className='footer-section' dir={langDirection}>
                <div className='footer-container'>
                    <div className='Footerlink-container-1'>
                        <div className='footerLink-Box-1'>
                            <ul className='foot-list-1'>
                                <li><Link to="" className='link-item'>About Us</Link></li>
                                <li><Link to="" className='link-item'>FAQs</Link></li>
                                <li><Link to="" className='link-item'>Privacy Policy</Link></li>
                                <li><Link to="" className='link-item'>Terms & Conditions</Link></li>
                                <li><Link to="" className='link-item'>Cancellation Policy</Link></li>
                            </ul>
                        </div>
                        <div className='footerLink-Box-2'>
                            <ul className='foot-list-2'>
                                <li><Link to="" className='link-item'>Find Us</Link></li>
                                <li><Link to="" className='link-item'>News & Updates</Link></li>
                                <li><Link to="" className='link-item'>Careers</Link></li>
                            </ul>
                        </div>
                        <div className='footerLink-Box-3'>
                            <ul className='foot-list-3'>
                                <li><Link to="" className='link-item'>1800 1800 1800</Link></li>
                                <li><Link to="" className='link-item'> contact@watani.com </Link></li>
                            </ul>
                        </div>
                        <div>
                            <div className='media-container'>
                               <h4>Fllow Me</h4>
                                <ul className='media-list'>
                                    <li><Link to="" className='link-item'></Link><SlSocialFacebook /></li>
                                    <li><Link to="" className='link-item'><SlSocialTwitter /></Link></li>
                                    <li><Link to="" className='link-item'><SiInstagram /></Link></li>
                                    <li><Link to="" className='link-item'><FaLinkedinIn /></Link></li>
                                    <li><Link to="" className='link-item'><FaSnapchatGhost /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='Footerlink-container-2'>
                        <div>
                        <span>© 2022 Watani All Right Reserved</span>
                        </div>
                    </div>
                </div>
            </div>
            </FooterContainer>
        </>
    )
}

export default HomeFooter


const FooterContainer = styled.footer`


.footer-container{
    position:relative;
    background-color: black;
    padding:10px;
    margin: -14px 0px;
    
}
.Footerlink-container-1{
    margin-top:60px;
    display: flex;
    justify-content: space-around;
    border-bottom: 3px solid transparent;
    border-image: linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)) 1 ;
}
.foot-list-1,
.foot-list-2,
.foot-list-3{
    display: flex;
    flex-direction: column;
    align-items:flex-start;
}
.foot-list-1 li,
.foot-list-2 li,
.foot-list-3 li, {
    padding: 10px 0px;
}

.link-item{
    text-decoration: none;
    color: white;
}

.media-container{
    display: flex;
    flex-direction: column;
    width:200px;
    margin-top: 70px;
    color: white; 
}
.media-container h4{
    margin-left:54px;
    margin-right:50px
    color: white;
}

.media-list{
    display:flex;
    justify-content: space-evenly;
}
.media-list li{
    list-style:none;
}

.Footerlink-container-2 div{
    margin-left: 135px;
    margin-right: 135px;
    margin-top: 20px;
    margin-bottom: 20px;
    
}
.Footerlink-container-2 div span{
    margin: 10px 0px;
    color: white;
}
`