import React, { useState } from 'react';
import WataniLogo from '../images/watani_svg (1).png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { VectorArrow, SUZUKILogo, HYUNDAILogo, KIALogo, GACLogo, CHANGANGLogo, CHERRYLogo, MGLogo, ISUZULogo } from "../image/image";
import { useI18nComponent, i18n } from '../utils/i18nLocalization';
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import { HiMiniChevronDoubleLeft } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoCarSharp } from "react-icons/io5";
import { TbHomeSearch } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";
import { SlBag } from "react-icons/sl";
import { FaChevronLeft } from "react-icons/fa";

const HomePageHeader = () => {
  const { t, changeLanguage } = useI18nComponent()

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };
  const toggleCloseMenu = () => {
    setIsOpen(false);
  };

  const langDirection = i18n.language === "عربي" ? "rtl" : "ltr";
  const lang = i18n.language === "عربي"

  return (
    <>
      <Container>
        <div className='home-page-header-container' dir={langDirection}>
          <div className='Head-Box'>
            <div className='Header-part-1'>
              <div className='watani-logo'>
                <img src={WataniLogo} alt='Watani Logo' />
              </div>
              <div className='Navbar'>
                <ul className='nav-list'>
                  <li><Link to='' className='link-item'>All</Link></li>
                  <li><Link to='' className='link-item'>Hatchback</Link></li>
                  <li><Link to='' className='link-item'>Seden</Link></li>
                  <li><Link to='' className='link-item'>Suv</Link></li>
                  <li><Link to='' className='link-item'>Pick Ups</Link></li>
                </ul>
                <div className="language_container">
                  <div className="lang-dropdown">
                    <button className="lang-dropdown-button">
                      <p>{i18n.language}</p>
                      <div className="arrow-vect">
                        <img src={VectorArrow} alt="errs" />
                      </div>
                    </button>
                    <div className="lang-dropdown-content">
                      <button onClick={() => changeLanguage("EN")}>
                        {t("EN")}
                      </button>
                      <button onClick={() => changeLanguage("عربي")}>عربي</button>
                    </div>
                  </div>
                </div>
                <div className='toogle-button' onClick={toggleMenu}><IoMenuSharp /></div>
              </div>
            </div>
            {isOpen && (
              <div className='sidebar'>
                <div className='sidebar-menu'>
                  <h4>Menu</h4>
                  <div className='close-menu-icon' onClick={toggleCloseMenu}>
                    <IoCloseOutline />
                  </div>
                </div>
                <div className='button-box'>
                  <div className='login-btn'>
                    <button type='button'>Login</button>
                  </div>
                  <div className='register-btn'>
                    <button type='button' >Register</button>
                  </div>
                </div>
                <ul>
                  <li><Link to="" className='link-item'><IoCarSharp /> &nbsp; &nbsp;Compare</Link>{lang ? <FaChevronLeft/> : <FaChevronRight />}</li>
                  <li><Link to="" className='link-item'><TbHomeSearch /> &nbsp; &nbsp;Find us</Link>{lang ? <FaChevronLeft/> : <FaChevronRight />}</li>
                  <li><Link to="" className='link-item'><CgNotes /> &nbsp; &nbsp;Blogs & Updates</Link>{lang ? <FaChevronLeft/> : <FaChevronRight />}</li>
                  <li><Link to="" className='link-item'><SlBag /> &nbsp; &nbsp;Careers</Link>{lang ? <FaChevronLeft/> : <FaChevronRight />}</li>
                  <li><Link to="" className='link-item'><FaPhoneAlt /> &nbsp; &nbsp;Contact us</Link>{lang ? <FaChevronLeft/> : <FaChevronRight />}</li>
                </ul>
              </div>
            )}
            <div className='Header-part-2'>
              <div className='left-side-arrow'>
                {lang ? <HiMiniChevronDoubleRight /> : <HiMiniChevronDoubleLeft />}
              </div>
              <div className='carLogo-container'>
                <ul className='logo-list'>
                  <li><img src={HYUNDAILogo} alt='Error ' /></li>
                  <li><img src={MGLogo} alt='Error ' /></li>
                  <li><img src={GACLogo} alt='Error ' /></li>
                  <li><img src={KIALogo} alt='Error ' /></li>
                  <li><img src={ISUZULogo} alt='Error ' /></li>
                  <li><img src={CHANGANGLogo} alt='Error' /></li>
                  <li><img src={SUZUKILogo} alt='Error ' /></li>
                  <li><img src={CHERRYLogo} alt='Error ' /></li>
                </ul>
              </div>
              <div className='Right-side-arrow'>
                {lang ? <HiMiniChevronDoubleLeft />:<HiMiniChevronDoubleRight />}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePageHeader;

const Container = styled.header`
  .home-page-header-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 98.7%;
    z-index: 1;
    backdrop-filter: blur(10px);
    background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 0.6) 40%,
      rgba(0, 0, 0, 1) 100%
    );
    color: white;
    padding: 10px;
  }

  .Header-part-1 {
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid transparent;
    border-image: linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)) 1 ;
  }
  
  .Header-part-2{
    height: 70px;
    display: flex;
    align-items : center;
    justify-content: space-around;
  }
  .Navbar {
     margin-right: 100px;
     display: flex;
     align-items: center;
  }

  .link-item{
    text-decoration: none;
  }
  .nav-list li {
    margin: 0 20px;
    padding: 10px;
    // border-right: 3px solid ;
    cursor: pointer;

  }
  
  .nav-list li:hover{
    background-color: rgba(255,255,255,.1)
  }

  .toogle-button {
    cursor: pointer;
  }
  
  .sidebar {
    position: absolute;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '0px')};
    width: 470px;
    height: 854px;
    backdrop-filter: blur(10px);
    background: linear-gradient(to bottom, #000000 10%, #3a3a3a 54%);
    transition: right 0.3s ease-in-out;
    z-index: 2;
  }

  .button-box{
    margin-top:  35px;
    display:flex;
    justify-content: space-around;
    
  }
  .button-box button{
    color: white;
    background-color: transparent;
    border: 2px solid #fff;
    width: 180px;
    height: 48px;
    cursor: pointer;
  }
  .sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .sidebar li:first-child{
    margin-top:40px;
    border-bottom: 3px solid transparent;
    border-top: 3px solid transparent;
    border-image: linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3)) 1 ;  }

  .sidebar li {
    padding: 20px 35px;
    display : flex;
    justify-content: space-between;
  }
  .sidebar-menu{
    margin: 5px 40px ;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3)) 1 ;  }
  }
  .close-menu-icon{
    font-size: 40px;
    cursor: pointer
  }



.language_container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0 20px;

}

.lang-dropdown {
  position: relative;
}

.lang-dropdown-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #fff;
}

.lang-dropdown-content {
  display: none;
  position: absolute;
  background-color: rgba(2, 2, 2, 0.2);
  z-index: 1;
}

.lang-dropdown-content button {
  background: none;
  border: none;
  color: #fff; / Set your desired text color /
  font-size: 15px;
  cursor: pointer;
  letter-spacing: -0.408px;
  padding: 12px 16px;
  min-width: 120px
}

.lang-dropdown-content button:hover {
  background-color: rgba(12, 11, 11, 0.16);
}

.lang-dropdown:hover .lang-dropdown-content {
  display: block;
}

.lang p {
  font-family: Sofia Pro;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
}
.arrow-vect {
  margin-top: -5px;
  margin-left: 5px;
}

.carLogo-container{
  position: relative;
}


`