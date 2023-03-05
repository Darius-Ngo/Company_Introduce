import styled from "styled-components";
import customerreview from "src/access/img/customer-review.jpg";
export const StyledCustomerReviewItem = styled.div`
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

export const WrapHeaderReview = styled.div`
  .top-header {
    background-color: ${({ theme }) => `${theme.black};`};
    color: ${({ theme }) => `${theme.white};`};
    height: ${({ theme }) => `${theme.headerTopHeight};`};
    .contact-info {
      position: relative;
      margin-right: 12px;
    }
    .divider {
      background-color: ${({ theme }) => `${theme.white};`};
      width: 1px;
      height: 16px;
    }
    .phone-contact {
      margin-left: 16px;
      padding: 0 20px;
      border-radius: 30px;
      background-color: ${({ theme }) => `${theme.white};`};
      color: ${({ theme }) => `${theme.black};`};
      &_number {
        padding: 11px 8px;
        color: ${({ theme }) => `${theme.black};`};
        border-left: 1px solid ${({ theme }) => `${theme.black};`};
        font-weight: 500;
      }
    }
  }
  .header-content {
    z-index: 100;
    position: fixed;
    top: ${({ theme }) => `${theme.headerTopHeight};`};
    left: 0;
    right: 0;
    &_menu {
      height: ${({ theme }) => `${theme.headerContentHeight};`};
      background-color: transparent;
      transition: all 0.3s ease-in-out;
      color: ${({ theme }) => `${theme.white};`};
      color: ${({ theme }) => `${theme.textColor};`};
      &.shrink {
        height: ${({ theme }) => `${theme.headerShrinkHeight};`};
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: ${({ theme }) => `${theme.white};`};
        box-shadow: rgb(0 0 0 / 12%) 0 1px 3px;
        color: ${({ theme }) => `${theme.textColor};`};
        .menu-list_item {
          &::before {
            background-color: ${({ theme }) => `${theme.textColor};`};
          }
        }
      }
      &_menu {
        height: 100%;
      }
      .logo-web {
        height: 100%;
        img {
          height: 100%;
        }
      }
      .menu-list_item {
        margin-left: 24px;
        padding: 6px 0;
        position: relative;
        font-weight: 600;
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px;
          background-color: ${({ theme }) => `${theme.white};`};
          transition: all 0.3s ease-in;
          background-color: ${({ theme }) => `${theme.textColor};`};
        }
        &.active,
        &:hover {
          &::before {
            width: 100%;
            left: 0;
          }

          .submenu {
            opacity: 1;
            top: 44px;
            pointer-events: unset;
          }
        }

        .submenu {
          position: absolute;
          top: 70px;
          transform: translateX(-44%);
          background-color: ${({ theme }) => `${theme.white};`};
          display: flex;
          flex-wrap: wrap;
          width: 550px;
          opacity: 0;
          transition: all 0.4s ease-in-out;
          pointer-events: none;
          box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.05);
          &::after {
            content: "";
            position: absolute;
            top: -20px;
            left: 40%;
            width: 120px;
            height: 20px;
          }
          &:hover {
            pointer-events: unset;
            opacity: 1;
            top: 44px;
          }
          &_item {
            padding: 15px 34px;
            font-weight: 600;
            font-size: 16px;
            color: ${({ theme }) => `${theme.primaryColor};`};
            width: 50%;
            white-space: nowrap;
            border-bottom: 1px solid #ddd;
            border-right: 1px solid #ddd;
          }
        }
      }
    }
  }
  .slogan {
    position: relative;
    height: ${({ theme }) => `${theme.headerHeight};`};
    background-image: ${({ theme }) => `url(${customerreview});`};
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    clip-path: circle(170vh at 50% -80vh);
    h2 {
      color: ${({ theme }) => `${theme.white};`};
      font-size: 40px;
      margin-top: -250px;
    }
  }
`;
