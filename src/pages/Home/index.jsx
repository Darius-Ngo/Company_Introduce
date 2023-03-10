import { Button } from "antd";
import { useEffect } from "react";
import styled from "styled-components";
import Banner from "./components/Banner/Banner";
import { imgArrayOffice } from "./components/data";
import News from "./components/News/News";
import PicDetailsDemo from "./components/Services/Service";
import { StyledSevices } from "./components/Services/styled";

const StyledHomePage = styled.div`
  .my-office {
    .my-office-title {
      font-size: 23px;
      margin: 20px auto;
      font-weight: bold;
      text-align: center;
    }
  }
  .why-us {
    height: 100vh !important;
    background: #fff;
  }
  .video-bg {
    position: relative;
    video {
      width: 100%;
      height: calc(100vh - 44px);
      object-fit: cover;
    }
    .content-bg {
      position: absolute;
      left: 10%;
      top: 40%;
      .ant-btn {
        padding: 10px 15px;
        text-align: center;
        height: 50px !important;
        background: #000064;
        :hover {
          background: #015ee1;
          transform: translateY(-10px);
          box-shadow: 0px 5px 30px rgba(0, 174, 255, 0.692);
        }
      }
      .content-bg-title {
        font-size: 50px;
        font-weight: 600;
        color: #fff;
        margin-bottom: 24px;
      }
      .content-bg-label {
        width: 40%;
        font-size: 20px;
        color: #fff;
        margin-bottom: 24px;
      }
    }
    ::before {
      content: "";
      position: absolute;
      top: ${({ theme }) => `${theme.headerTopHeight};`};
      left: 0;
      right: 0;
      bottom: 0;

      background: #0000004d;
    }
  }
`;

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
      <PicDetailsDemo />
      <div className="why-us">WHY US?</div>
      <div className="my-office">
        <div className="my-office-title">OUR CORPORATE OFFICE</div>
        <div>
          <Banner imgArray={imgArrayOffice} />
        </div>
      </div>
      <News />
    </StyledHomePage>
  );
};
export default HomePage;
