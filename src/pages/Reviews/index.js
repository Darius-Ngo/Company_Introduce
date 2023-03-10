import { Col, Divider, Pagination, Row } from "antd";
import React from "react";
import { WrapAboutPage } from "../About/styled";
import { StyledHomePage } from "../Home/styled";
import { WrapHeaderNews } from "../News/styled";
import CustomerReviewItem from "./components/CustomerReviewItem";
import { WrapHeaderReview } from "./styled";

const Reviews = () => {
  return (
    <StyledHomePage>
      <WrapAboutPage>
        <WrapHeaderReview>
          <div className="slogan d-flex align-items-center justify-content-center">
            <h2>CUSTOMER REVIEWS</h2>
          </div>
        </WrapHeaderReview>
      </WrapAboutPage>
      <div className="customer-review">
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
        </Row>

        <Row style={{ display: "flex", justifyContent: "flex-end" }}>
          <Pagination
            current={1}
            pageSize={10}
            total={100}
            onChange={() => {}}
          />
        </Row>
      </div>
    </StyledHomePage>
  );
};

export default Reviews;
