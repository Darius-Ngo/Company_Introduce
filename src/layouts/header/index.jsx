import React, { useRef, useEffect } from "react";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";
import { WrapHeader } from "./styled";
import ROUTER from "./../../routers/router";
import { NavLink, useLocation } from "react-router-dom";
import logoImg from "../../access/img/logo.png";

export const listMenu = [
  {
    name: "HOME",
    path: ROUTER.HOME,
  },
  {
    name: "ABOUT US",
    path: ROUTER.ABOUT,
  },
  {
    name: "SERVICES",
    path: ROUTER.SERVICES,
    submenu: [
      { name: "Supported Independent Living", path: ROUTER.ABOUT },
      { name: "Respite Accommodation", path: ROUTER.ABOUT },
      { name: "Support Coordination", path: ROUTER.ABOUT },
      { name: "Support Coordination", path: ROUTER.ABOUT },
      { name: "Group & Centre-Based Activities", path: ROUTER.ABOUT },
      { name: "Household Tasks", path: ROUTER.ABOUT },
      { name: "Medication Management", path: ROUTER.ABOUT },
      { name: "Travel & Transport", path: ROUTER.ABOUT },
      { name: "Personal Care", path: ROUTER.ABOUT },
      { name: "Development Skilled", path: ROUTER.ABOUT },
    ],
  },
  {
    name: "CUSTOMER REVIEWS",
    path: ROUTER.CUSTOMER_REVIEWS,
  },
  {
    name: "NEWS",
    path: ROUTER.NEWS,
  },
  {
    name: "MAKE A REFERRAL",
    path: ROUTER.MAKE_A_REFERRAL,
  },
  {
    name: "JOBS",
    path: ROUTER.JOBS,
  },
  {
    name: "CONTACT US",
    path: ROUTER.CONTACT_US,
  },
];

const Header = () => {
  const headerRef = useRef();
  const location = useLocation();
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  return (
    <WrapHeader>
      <div className="top-header d-flex justify-content-between align-items-center padding-app">
        <div className="top-header_slogan">Heart and Virtue</div>
        <div className="top-header_contact d-flex align-items-center">
          <a href="tel: 1300 092 273" className="contact-info mr-8">
            Melbourne: 1300 092 273
          </a>
          <div className="mr-12 divider" />
          <a
            href="mailto:someone@example.com"
            className="contact-info d-flex align-items-center"
          >
            <AiOutlineMail className="mr-8" /> info@anytimecare.com.au
          </a>
          <a
            href="tel: 1300 092 273"
            className="phone-contact d-flex align-items-center"
          >
            <HiDevicePhoneMobile className="mr-8" />
            <div className="phone-contact_number">1300 092 273</div>
          </a>
        </div>
      </div>
      <div className="header-content">
        <div
          className="header-content_menu d-flex justify-content-between padding-app"
          ref={headerRef}
        >
          <div className="logo-web">
            <img src={logoImg} alt="" />
          </div>
          <div className="menu-list d-flex align-items-center">
            {listMenu.map((item, idx) => (
              <NavLink
                to={item.path}
                className={`menu-list_item ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                <div className="menu-list_item_value">{item.name}</div>
                {item.submenu ? (
                  <div className="submenu">
                    {item.submenu.map((i, idx) => (
                      <div className="submenu_item">
                        <div className="text">{i.name}</div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </WrapHeader>
  );
};
export default Header;
