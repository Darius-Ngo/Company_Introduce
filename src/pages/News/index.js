import { Col, Pagination, Row } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { WrapHeader } from "src/layouts/header/styled";
import styled from "styled-components";
import { WrapAboutPage } from "../About/styled";
import { StyledNews } from "../Home/components/News/styled";
import NewsItem from "./components/NewsItem";
import { WrapHeaderNews } from "./styled";
const data = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
const StyledNewList = styled.div`
  .news-re {
    position: relative;
    top: -250px;
  }
  .news-one {
    .list-new {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 16;
    }
    .div-new-item {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin: 10px auto 30px auto;
    }
    .new-item {
      margin-right: 230px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      height: 320px;
      .new-img {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        img {
          :hover {
            transform: translateY(-20px);
          }

          box-shadow: -1px 3px 4px 1px rgb(0 0 0 / 30%);
          width: 80%;
          height: 100%;
          object-fit: cover;
        }
      }
      .new-sumary {
        max-width: 666px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        padding: 16px;
        .new-title {
          font-weight: 600;
          line-height: 27px;
          color: #fff;
          span {
            font-size: 24px !important;
          }
        }
        .new-date {
          font-size: 12px;
          line-height: 16px;
          color: #5f6574;
          margin: 5px 0px 16px 0px;
          color: #fff;
        }
        .new-content {
          font-size: 14px;
          line-height: 16px;
          color: #5f6574;
          color: #fff;
        }
      }
    }
  }
`;
const NewList = () => {
  return (
    <StyledNewList>
      <WrapAboutPage>
        <WrapHeaderNews>
          <div className="slogan d-flex align-items-center justify-content-center">
            <h2>NEWS</h2>
          </div>
        </WrapHeaderNews>
      </WrapAboutPage>
      <div className="news-re">
        <div className="news-ab">
          <div className="news-one">
            <div className="div-new-item">
              <div className="new-item">
                <div className="new-img">
                  <img
                    src="https://img.freepik.com/premium-photo/woman-mediacal-nurse-doctor-uniform-sick-online-video-call-webcam_754108-449.jpg?w=2000"
                    alt=""
                  />
                </div>
                <div className="new-sumary">
                  <div className="new-title max-line1">
                    <span>
                      How redefining autism could improve research on the
                      condition
                    </span>
                  </div>
                  <div className="new-date ">Wednesday, 20.07.2022</div>
                  <div className="new-content max-line3">
                    Autism is typically thought of as a collection of traits:
                    restricted interests, repetitive behaviors and difficulty
                    with social communication. But by the time those traits can
                    be detected and a child diagnosed with autism — around the
                    age of 4, on average, in the United States — she has missed
                    out on months, if not years, of therapy when her brain is
                    most flexible. Despite more than a decade of research aimed
                    at improving early detection, the average age of autism
                    diagnosis has not budged. Part of the problem lies with how
                    the condition is defined, says Ami Klin, director of the
                    Marcus Autism Center in Atlanta, Georgia. In a paper
                    published in September, Klin and his colleagues call for
                    autism to be redefined based on the latest scientific
                    evidence, which indicates that it is highly heritable and
                    present from birth. Rather than thinking of autism as a
                    collection of traits, Klin says, researchers, clinicians and
                    policymakers should think about it as a genetic condition
                    that alters how a child perceives and interacts with others,
                    one in which early life experiences can shape the severity
                    of its core traits.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Row gutter={[16, 16]}>
            {data?.map((item, idx) => (
              <Col span={6}>
                <NewsItem key={idx} />
              </Col>
            ))}
          </Row>
          <Row style={{ display: "flex", justifyContent: "flex-end" }}>
            <Pagination
              current={1}
              pageSize={20}
              total={100}
              onChange={() => {}}
            />
          </Row>
        </div>
      </div>
    </StyledNewList>
  );
};

export default NewList;
