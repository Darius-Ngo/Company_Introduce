import { Button, Col, Divider, Rate, Row } from "antd";
import { useEffect } from "react";
import styled from "styled-components";
import Banner from "./components/Banner/Banner";
import { imgArrayOffice } from "./components/data";
import News from "./components/News/News";
import PicDetailsDemo from "./components/Services/Service";
import logoImg from "src/access/img/logo.png";
import whyus from "src/access/img/why-us.png";
import { StyledSevices } from "./components/Services/styled";
import { StyledHomePage } from "./styled";
const StyledCustomerReviewItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 24px;
  .ml-16 {
    margin-left: 16px;
  }
  .mr-16 {
    margin-right: 16px;
  }
  img {
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius: 20px;

    box-shadow: rgb(0 0 0 / 12%) 0 1px 3px;
  }
`;
const CustomerReviewItem = ({ isRight }) => {
  return (
    <StyledCustomerReviewItem>
      {!isRight && (
        <div className="mr-16">
          <div>
            "Very satisfied working with proactive team at Heart and Virtue,
            they are very detailed with their service delivery and provided
            exceptional services to its participants." <b>Ms. Wanda</b> said
          </div>
          <div>
            <Rate value={5} allowHalf disabled />
            <span style={{ fontSize: "12px" }}> (5.0)</span>
          </div>
        </div>
      )}
      <div>
        <img
          src="https://d.newsweek.com/en/full/2150657/grandmother-smells-sharing-room-visit-reddit-aita.jpg?w=1600&h=1200&q=88&f=e8f7b0e476befadcdf7b9155e4670e7a"
          alt=""
        />
        <div></div>
      </div>
      {!!isRight && (
        <div className="ml-16">
          <div>
            "Very satisfied working with proactive team at Heart and Virtue,
            they are very detailed with their service delivery and provided
            exceptional services to its participants." <b>Ms. Wanda</b> said
          </div>
          <div>
            <Rate value={5} allowHalf disabled />
            <span style={{ fontSize: "12px" }}> (5.0)</span>
          </div>
        </div>
      )}
    </StyledCustomerReviewItem>
  );
};
const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

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
          <Button type="primary">GET STARTED</Button>
        </div>
      </div>
      <div className="why-us">
        <Row gutter={16}>
          <Col span={10}>
            <img src={whyus} alt={""}></img>
          </Col>

          <Col span={14}>
            <div className="div-logo">
              <img src={logoImg} alt={""} width="250px" height="250px" />
            </div>
            <div className="content-wu">
              <div style={{ flex: 1 }}>
                We have a strong expertise in supporting people with
                particularly complex needs, including autism, behaviours which
                may challenge mental health conditions and associated complex
                health needs.
              </div>
              <div style={{ flex: 1 }}>
                We put our hearts, our professional and conscientious care in a
                generation to ensure people live happier, healthier and more
                meaningful lives.We focus on empowering individuals, encouraging
                them to develop skills for daily life and healthy relationships,
                as well as supporting them to boost their confidence every day.
              </div>
              <div style={{ flex: 1 }}>
                We ensure that the support we provide is tailored to the
                person’s needs and we look forward to working with you and your
                teams over the coming months. Together, we can continue to
                exceed expectations and make a real difference to the lives of
                people we support.
              </div>
            </div>
          </Col>
        </Row>
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
        <Row style={{ padding: "24px 195px" }}>
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

          <Col span={12}>
            <div style={{ marginTop: "100px" }}>
              <CustomerReviewItem isRight />
            </div>
          </Col>
          <Col span={12}>
            <CustomerReviewItem isRight />
          </Col>

          <Col span={12}>
            <div style={{ marginTop: "100px" }}>
              <CustomerReviewItem />
            </div>
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
    </StyledHomePage>
  );
};
export default HomePage;
