import { Divider } from "antd";
import React from "react";
import linkIcon from "src/access/img/link-icon.png";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { dataNew } from ".";
import { WrapAboutPage } from "../About/styled";
import { WrapHeader } from "src/layouts/header/styled";
import logo from "src/access/img/news.jpg";
const DetailNewStyle = styled.div`
  .new-detail {
    /* position: relative;
    top: -220px; */
    padding: 24px 50px;
    color: #000;
    .new-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 24px;
    }
    .fl {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .new-img {
        flex: 1;
        position: relative;
        height: 250px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .div-link {
          height: 100%;
          width: 0%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background: #e08081a8;
          position: absolute;
          display: none;
          top: 0;
          left: 0;
          bottom: 0;
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
      }
      .new-content {
        flex: 2;
      }
    }
  }
`;
const Detail = () => {
  const { id } = useParams();
  console.log(id);
  let item = dataNew?.find((i) => i?.id === id);
  console.log(item);
  return (
    <DetailNewStyle>
      <WrapHeader>
        <div
          className="slogan d-flex align-items-center justify-content-center"
          style={{ backgroundImage: `url(${logo})` }}
        >
          <h2>NEWS</h2>
        </div>
      </WrapHeader>

      <WrapAboutPage className="page-common">
        <div className="new-detail">
          <div className="new-title">{item?.title}</div>
          <Divider />
          <div className="fl">
            <div className="new-content">
              <div
                className="new-content"
                dangerouslySetInnerHTML={{
                  __html: item?.content,
                }}
              />
            </div>
            {item?.img && (
              <div className="new-img">
                <img src={item?.img} alt="" />

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
                  <div
                    className="new-name max-line1"
                    style={{ padding: "0px 20px" }}
                  >
                    {item?.title}
                  </div>
                  <div className="new-name max-line1">News</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </WrapAboutPage>
    </DetailNewStyle>
  );
};

export default Detail;
