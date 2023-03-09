import styled from "styled-components";

export const StyledHomePage = styled.div`
  .customer-review {
    padding: 24px;
    .customer-review-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .customer-review-title {
        font-size: 23px;
        font-weight: bold;
      }
      .customer-review-see-all {
        cursor: pointer;
        :hover {
          font-weight: bold;
          color: #007aff;
        }
      }
    }
  }
  .my-office {
    .my-office-title {
      font-size: 23px;
      margin: 20px auto;
      font-weight: bold;
      text-align: center;
    }
  }
  .why-us {
    background: #fff;
    padding: 24px 110px;
    .enquire {
      padding: 24px 300px !important;
      .enquire-form {
        .enquire-title {
          font-size: 24px;
          margin-bottom: 16px;
          text-align: center;
          font-weight: bold;
        }
        border-radius: 10px;
        padding: 16px;

        box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
        .ant-btn {
          padding: 8px 20px;
          background: #070f67;
          text-align: center;
          font-weight: 600;
          height: 40px !important;
          :hover {
            background: #007aff;
            box-shadow: 0 0 5px #007aff5c;
          }
        }
      }
    }
    .div-logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content-wu {
      display: flex;
      justify-content: space-around;
      div {
        padding: 8px 12px;
      }
    }
  }
  .video-bg {
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
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      background: #0000004d;
    }
  }
`;
