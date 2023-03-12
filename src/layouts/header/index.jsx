import { Select } from "antd";
import React, { useRef, useEffect, useState } from "react";
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
  const [language, setLanguage] = useState();
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
  useEffect(() => {
    setLanguage(localStorage.getItem("language") || "en");
  }, [localStorage.getItem("language")]);

  return (
    <WrapHeader>
      <div className="top-header d-flex justify-content-between align-items-center padding-app">
        <div className="top-header_slogan">Heart and Virtue</div>
        <div className="top-header_contact d-flex align-items-center">
          <a href="tel: +61 042 6126 879" className="contact-info mr-8">
            Melbourne: +61 042 6126 879
          </a>
          <div className="mr-12 divider" />
          <a
            href="mailto:someone@example.com"
            className="contact-info d-flex align-items-center"
          >
            <AiOutlineMail className="mr-8" /> info@heartandvitue.com.au
          </a>
          <a
            href="tel: +61 042 6126 879"
            className="phone-contact d-flex align-items-center"
          >
            <HiDevicePhoneMobile className="mr-8" />
            <div className="phone-contact_number">+61 042 6126 879</div>
          </a>
          {/* <Select
            value={language}
            className="ml-16"
            onChange={(val) => {
              localStorage.setItem("language", val);
              window.location.reload();
            }}
          >
            <Select.Option value="en">English</Select.Option>
            <Select.Option value="vi">Tiếng Việt</Select.Option>
          </Select> */}
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
            {listMenu.map((item, idx) =>
              item.submenu ? (
                <div
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
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className={`menu-list_item ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  <div className="menu-list_item_value">{item.name}</div>
                </NavLink>
              )
            )}
          </div>
        </div>
      </div>
    </WrapHeader>
  );
};
export default Header;
