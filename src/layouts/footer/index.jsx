import {
  BsFillArrowRightCircleFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FaEnvelopeOpenText, FaFacebookF } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillClockCircle } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Row, Col, Tooltip } from "antd";
import { WrapFooter } from "./styled";
import logoImg from "../../access/img/logo.png";
import FgImg from "../../access/img/fg.jpg";
import { listMenu } from "../header";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <WrapFooter>
      <div className="logo d-flex align-items-center justify-content-center">
        <img src={logoImg} alt="" width={300} />
      </div>
      <Row gutter={24}>
        <Col xs={24} sm={24} lg={12} xl={8}>
          <div className="footer_content">
            Anytime Care acknowledges the traditional owners of the lands we
            work on and would like to pay our respects to their Elders past and
            present.
          </div>
          <img src={FgImg} alt="" width={300} />
          <div className="footer_content fw-500 mt-16">
            Subscribe to Our Newsletter
          </div>
          <div className="send-email d-flex align-items-center">
            <input
              type="Email"
              className="send-email_input"
              placeholder="Email"
            />
            <button className="send-email_button">SEND</button>
          </div>
          <div className="footer_content fw-600">ABN: 85 641 624 259</div>
          <div className="footer_content fw-600">
            NDIS Registration: 4050091419
          </div>
        </Col>
        <Col xs={24} sm={24} lg={12} xl={8}>
          <div className="title">QUICK LINKS</div>
          {listMenu.map((item, idx) => (
            <NavLink to={item.path} className="footer_content">
              <div className="footer_content d-flex align-items-center">
                <BsFillArrowRightCircleFill />
                <div className="ml-5">{item.name}</div>
              </div>
            </NavLink>
          ))}
          <div className="d-flex align-items-center mt-8">
            <Tooltip title="Facebook">
              <div className="mr-12 item-social fb">
                <FaFacebookF />
              </div>
            </Tooltip>
            <Tooltip title="Email">
              <div className="item-social mail">
                <HiOutlineMail />
              </div>
            </Tooltip>
          </div>
        </Col>
        <Col xs={24} sm={24} lg={12} xl={8}>
          <div className="title">MELBOURNE BRANCH</div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1627.037555962193!2d-119.03720598255612!3d35.353782200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea6a0e22bebb47%3A0x5b0e762d776115f0!2sHeart%20Virtue%20Inc.!5e0!3m2!1svi!2s!4v1677397079783!5m2!1svi!2s"
              width="400"
              height="200"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="mb-24"
            ></iframe>
          </div>
          <a
            href="mailto:someone@example.com"
            className="footer_content fw-500 d-flex align-items-center"
          >
            <FaEnvelopeOpenText className="mr-8" />
            info@anytimecare.com.au
          </a>
          <a
            href="tel: 1300 092 273"
            className="footer_content fw-500 d-flex align-items-center"
          >
            <BsFillTelephoneFill className="mr-8" />
            1300 092 273
          </a>
          <div className="footer_content fw-500 d-flex align-items-center">
            <IoLocationSharp className="mr-8" />
            <div className="phone-contact_number">
              2821 Brundage Ln, Bakersfield, CA 93304, Hoa Kỳ
            </div>
          </div>
          <div className="footer_content fw-500 d-flex align-items-center">
            <AiFillClockCircle className="mr-8" />
            <div className="phone-contact_number">
              Mon – Fri 9:00 AM – 5:00 PM
            </div>
          </div>
        </Col>

        <Col span={24} className="footer_content last-info">
          Copyright 2012 - 2022 | Anytime Care | All Rights Reserved
        </Col>
      </Row>
    </WrapFooter>
  );
};
export default Footer;
