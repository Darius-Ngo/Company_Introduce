import { FaEnvelopeOpenText } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillClockCircle } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import { Row, Col, Input, Select, DatePicker, Form } from "antd";
import { ContactPageStyle } from "./styled";
import { WrapHeader } from "src/layouts/header/styled";

const ContactUsPage = () => {
  const listTime = [
    {
      label: "9:00 AM",
      value: "9:00 AM",
    },
    {
      label: "9:30 AM",
      value: "9:30 AM",
    },
    {
      label: "10:00 AM",
      value: "10:00 AM",
    },
    {
      label: "10:30 AM",
      value: "10:30 AM",
    },
    {
      label: "11:00 AM",
      value: "11:00 AM",
    },
    {
      label: "11:30 AM",
      value: "11:30 AM",
    },
    {
      label: "12:00 AM",
      value: "12:00 AM",
    },
    {
      label: "12:30 AM",
      value: "12:30 AM",
    },
    {
      label: "1:00 PM",
      value: "1:00 PM",
    },
    {
      label: "1:30 PM",
      value: "1:30 PM",
    },
    {
      label: "2:00 PM",
      value: "2:00 PM",
    },
    {
      label: "2:30 PM",
      value: "2:30 PM",
    },
    {
      label: "3:00 PM",
      value: "3:00 PM",
    },
    {
      label: "3:30 PM",
      value: "3:30 PM",
    },
    {
      label: "4:00 PM",
      value: "4:00 PM",
    },
    {
      label: "4:30 PM",
      value: "4:30 PM",
    },
    {
      label: "5:00 PM",
      value: "5:00 PM",
    },
  ];

  return (
    <>
      <WrapHeader>
        <div className="slogan d-flex align-items-center justify-content-center">
          <h2>Warm heart - Warms hands</h2>
        </div>
      </WrapHeader>
      <ContactPageStyle className="page-common">
        <Row gutter={48}>
          <Col xs={24} sm={24} lg={10}>
            <div className="text-center title">Contact Us</div>
            <div className="sub-title">Melbourne Branch</div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573.8863710536734!2d144.73976765113542!3d-37.91237427500442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6862d3ef3361d%3A0x137b7dd85a80b314!2s12%20Airlie%20Ave%2C%20Point%20Cook%20VIC%203030%2C%20%C3%9Ac!5e0!3m2!1svi!2s!4v1678006863358!5m2!1svi!2s"
                width="100%"
                height="200"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="mb-24"
              ></iframe>
            </div>
            <div className="d-flex align-items-center mb-12 mt-12">
              <FaEnvelopeOpenText className="icon-contact" />
              <div className="content-contact link-contact">
                info@heartandvitue.com.au
              </div>
            </div>
            <div className="d-flex align-items-center mb-12">
              <IoLocationSharp className="icon-contact" />
              <div className="content-contact ">
                12 Airlie Avenue, Point Cook, 3030 VIC
              </div>
            </div>
            <div className="d-flex align-items-center mb-12">
              <AiFillClockCircle className="icon-contact" />
              <div className="content-contact">Mon – Fri 9:00 AM – 5:00 PM</div>
            </div>
            <div className="d-flex align-items-center mb-12">
              <MdPhoneIphone className="icon-contact" />
              <div className="content-contact link-contact">
                +61 042 6126 879
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} lg={14}>
            <div className="text-center title">Book an Appointment</div>
            <div className="content text-center mb-20">
              We value our participants the most and so any feedback is good
              feedback. Each feedback helps us get better, and we promise to
              keep your privacy intact. Please let us know if you need any
              information before you make a decision to let us support you with
              your daily life. Thank you for the opportunity of serving you.
            </div>
            <Form initialValues={{}} layout="vertical" className="mb-20">
              <Row gutter={16}>
                <Col xs={24} lg={24}>
                  <Form.Item>
                    <Input placeholder="NAME*" className="input-info" />
                  </Form.Item>
                </Col>
                <Col xs={24} lg={24}>
                  <Form.Item>
                    <Input placeholder="EMAIL*" className="input-info" />
                  </Form.Item>
                </Col>
                <Col xs={24} lg={24}>
                  <Form.Item>
                    <Input placeholder="PHONE*" className="input-info" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <div className="content mb-6">
                    Mon-Fri : 09:00 AM To 05:00PM | Saturday : 10:00 AM To 03:00
                    PM
                  </div>
                </Col>
                <Col xs={24} lg={12}>
                  <Form.Item>
                    <DatePicker
                      format={"DD/MM/YYYY"}
                      placeholder="dd/mm/yyyy"
                      className="input-info"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} lg={12}>
                  <Form.Item>
                    <Select
                      placeholder="select time"
                      className="select-time"
                      style={{ width: "100%" }}
                    >
                      {listTime.map((time) => (
                        <Select.Option value={time.value} key={time.value}>
                          {time.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} lg={24}>
                  <Form.Item>
                    <Input.TextArea
                      style={{ height: 100 }}
                      placeholder="HOW CAN WE HELP?"
                      className="input-info"
                    />
                  </Form.Item>
                </Col>
                <Col>
                  <button type="submit" className="btn-send">
                    SEND
                  </button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </ContactPageStyle>
    </>
  );
};

export default ContactUsPage;
