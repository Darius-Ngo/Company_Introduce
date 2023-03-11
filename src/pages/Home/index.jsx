import { Button, Col, Divider, Form, Input, Row } from "antd";
import { useEffect } from "react";
import wu2 from "src/access/img/services/wu2.png";
import { getRegexEmail, getRegexMobile } from "../MakeAReferral";
import CustomerReviewItem from "../Reviews/components/CustomerReviewItem";
import Banner from "./components/Banner/Banner";
import { imgArrayOffice } from "./components/data";
import News from "./components/News/News";
import PicDetailsDemo from "./components/Services/Service";
import { StyledHomePage } from "./styled";

// const StyledHomePage = styled.div`
//   .my-office {
//     .my-office-title {
//       font-size: 23px;
//       margin: 20px auto;
//       font-weight: bold;
//       text-align: center;
//     }
//   }
//   .why-us {
//     height: 100vh !important;
//     background: #fff;
//   }
//   .video-bg {
//     position: relative;
//     video {
//       width: 100%;
//       height: calc(100vh - 44px);
//       object-fit: cover;
//     }
//     .content-bg {
//       position: absolute;
//       left: 10%;
//       top: 40%;
//       .ant-btn {
//         padding: 10px 15px;
//         text-align: center;
//         height: 50px !important;
//         background: #000064;
//         :hover {
//           background: #015ee1;
//           transform: translateY(-10px);
//           box-shadow: 0px 5px 30px rgba(0, 174, 255, 0.692);
//         }
//       }
//       .content-bg-title {
//         font-size: 50px;
//         font-weight: 600;
//         color: #fff;
//         margin-bottom: 24px;
//       }
//       .content-bg-label {
//         width: 40%;
//         font-size: 20px;
//         color: #fff;
//         margin-bottom: 24px;
//       }
//     }
//     :before {
//       content: "";
//       position: absolute;
//       /* top: ${({ theme }) => `${theme.headerTopHeight};`}; */
//       top: 0px;
//       left: 0;
//       right: 0;
//       bottom: 0;

//       background: #0000004d;
//     }
//   }
// `;

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  const [form] = Form.useForm();

  return (
    <StyledHomePage>
      <div className="video-bg">
        <video playsinline autoplay="" muted loop>
          <source
            src={
              "https://www.anytimecare.com.au/wp-content/uploads/2022/03/Anytime-Care-Support-Worker-Testimonial.mp4"
            }
            type={"video/mp4"}
          />
        </video>
        <div className="content-bg">
          <div className="content-bg-title">Warm heart & Warm hands</div>
          <div className="content-bg-label">
            We focus on empowering individuals, encourage them to develop skills
            for daily life and healthy relationships, as well as supporting them
            to boost their confidence every day.
          </div>
          <Button>GET STARTED</Button>
        </div>
      </div>
      <PicDetailsDemo />
      <News />
      <div className="my-office">
        <div className="my-office-title">OUR CORPORATE OFFICE</div>
        <div>
          <Banner imgArray={imgArrayOffice} />
        </div>
      </div>
      <div className="customer-review">
        <div className="customer-review-header">
          <div className="customer-review-title">Customer Reviews</div>
          <div className="customer-review-see-all">{"See all >>"}</div>
        </div>
        <Divider style={{ marginTop: "12px" }} />
        <Row style={{ padding: "24px 150px" }}>
          <Col span={12}>
            <CustomerReviewItem isRight />
          </Col>
          <Col span={12}>
            <div style={{ marginTop: "100px" }}>
              <CustomerReviewItem />
            </div>
          </Col>
          <Col span={12}>
            <CustomerReviewItem />
          </Col>

          <Col span={24}>
            <div style={{ marginTop: "24px", textAlign: "center" }}>
              <b>Six typical reviews out</b> of a total of <b>one hundred</b>{" "}
              customer reviews.
            </div>
            <div style={{ marginTop: "8px", textAlign: "center" }}>
              (The current average rating is <b>4.9</b> stars)
            </div>
          </Col>
        </Row>
      </div>
      <div className="why-us">
        <Row gutter={16}>
          {/* <Col span={10}>
            <img src={whyus} alt={""}></img>
          </Col> */}

          <Col span={14}>
            <div className="div-logo"></div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={wu2} alt={""} width="200px"></img>
              </div>
              <div>
                <b>Warm heart- Warm hands</b>
              </div>
              <div style={{ color: "#666" }}>
                We focus on empowering individuals, encouraging them to develop
                skills for daily life and healthy relationships, as well as
                supporting them to boost their confidence every day.
              </div>
              <br />
              <div>
                <b>Our vision </b>
              </div>
              <div style={{ color: "#666" }}>
                We put our hearts, our professional and conscientious care in a
                generation to ensure people live happier, healthier and more
                meaningful lives.
              </div>
              <br />
              <div>
                <b>Who are Heart and Virtue together?</b>
              </div>
              <div style={{ color: "#666" }}>
                We have a strong expertise in supporting people with
                particularly complex needs, including autism, behaviours which
                may challenge mental health conditions and associated complex
                health needs. We ensure that the support we provide is tailored
                to the person’s needs and we look forward to working with you
                and your teams over the coming months. Together, we can continue
                to exceed expectations and make a real difference to the lives
                of people we support.
              </div>
            </div>
          </Col>
          <Col span={10} className={"enquire"}>
            <div className="enquire-form">
              <div className="enquire-title">ENQUIRE NOW</div>
              <Form form={form} layout="vertical">
                <Row
                  gutter={[16, 16]}
                  style={{ width: "100%", display: "flex" }}
                >
                  <Col span={24}>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Information cannot be blank!",
                        },
                      ]}
                      label="Your Name: "
                      name="YourName"
                    >
                      <Input placeholder="Your Name*" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Information cannot be blank!",
                        },
                        {
                          pattern: getRegexEmail(),
                          message: "Email entered wrong format!",
                        },
                      ]}
                      label="Your Email : "
                      name="Email"
                    >
                      <Input placeholder="Your Email*" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Information cannot be blank!",
                        },
                        {
                          pattern: getRegexMobile(),
                          message: "PhoneNumber entered wrong format!",
                        },
                      ]}
                      label="Phone"
                      name="phone"
                    >
                      <Input placeholder="Phone*" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Information cannot be blank!",
                        },
                      ]}
                      label=" How Can We Help?"
                      name="help"
                    >
                      <Input.TextArea
                        rows={4}
                        placeholder="How Can We Help?*"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Button
                      onClick={async () => {
                        const vaue = await form.validateFields();
                      }}
                    >
                      SEND
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </StyledHomePage>
  );
};
export default HomePage;
