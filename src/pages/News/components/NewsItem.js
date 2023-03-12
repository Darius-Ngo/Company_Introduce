import styled from "styled-components";

import linkIcon from "src/access/img/link-icon.png";
import { useNavigate } from "react-router-dom";
import { dataNew } from "..";

const StyledNewsItem = styled.div`
  height: 100%;
  .list-new {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16;
  }
  .div-new-item {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 10px auto 30px auto;
  }
  .new-item {
    /* :hover {
      transform: translateY(-10px);
    } */
    height: 100%;
    box-shadow: -1px 1px 4px 1px rgb(0 0 0 / 5%);
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    /* width: 320px; */
    position: relative;
    overflow: hidden;
    .new-img {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 230px;
        object-fit: cover;
      }
    }
    .div-link {
      height: 230px;
      width: 0%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: #e08081a8;
      position: absolute;
      display: none;
      top: 0;
      left: 0;
      overflow: hidden;
      .link {
        width: 25px;
        height: 25px;
        border: 1px solid #fff;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 15px;
          height: 15px;
        }
      }
      .new-name {
        color: #fff;
        font-size: 12px;
        font-weight: 600;
      }
    }
    :hover {
      .div-link {
        display: flex;
        animation: mymove 0.5s linear 0s alternate forwards;
      }
    }
    @keyframes mymove {
      from {
        width: 0%;
      }
      to {
        width: 100%;
      }
    }
    .new-sumary {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      padding: 16px;
      .new-title {
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
      }
      .new-date {
        font-size: 12px;
        line-height: 16px;
        color: #5f6574;
        margin: 5px 0px 16px 0px;
      }
      .new-content {
        font-size: 14px;
        line-height: 16px;
        color: #5f6574;
      }
      .read-more {
        margin-top: 16px;
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
`;
const NewsItem = ({ newId }) => {
  const nav = useNavigate();
  const item = dataNew?.find((i) => i?.id === newId);
  return (
    <StyledNewsItem>
      <div
        className="div-new-item"
        onClick={() => {
          nav(`/news/${item?.id}`);
        }}
      >
        <div className="new-item">
          <div className="new-img">
            <img
              src={
                item?.img ||
                "https://img.freepik.com/premium-photo/woman-mediacal-nurse-doctor-uniform-sick-online-video-call-webcam_754108-449.jpg?w=2000"
              }
              alt=""
            />
          </div>
          <div className="div-link">
            <div className="link">
              <a
                href={item?.linknew}
                target="_blank"
                rel="noreferrer"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e?.stopPropagation();
                }}
              >
                <img src={linkIcon} alt="link" />
              </a>
            </div>
            <div className="new-name max-line1" style={{ padding: "0px 20px" }}>
              {item?.title}
            </div>
            <div className="new-name max-line1">News</div>
          </div>
          <div className="new-sumary">
            <div className="new-title max-line1">
              <span>{item?.title}</span>
            </div>
            <div className="new-date ">{item?.date}</div>
            <div className="new-content max-line3">
              <div
                className="new-content "
                dangerouslySetInnerHTML={{
                  __html: item?.content,
                }}
              />
            </div>

            <div className="read-more">{"Read more >>"}</div>
          </div>
        </div>
      </div>
    </StyledNewsItem>
  );
};

export default NewsItem;
