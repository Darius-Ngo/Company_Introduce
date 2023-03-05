import { Col, Pagination, Row } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { WrapHeader } from "src/layouts/header/styled";
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
const NewList = () => {
  return (
    <>
      <WrapAboutPage>
        <WrapHeaderNews>
          <div className="slogan d-flex align-items-center justify-content-center">
            <h2>NEWS</h2>
          </div>
        </WrapHeaderNews>
      </WrapAboutPage>
      <Row gutter={[16, 16]}>
        {data?.map((item, idx) => (
          <Col span={6}>
            <NewsItem key={idx} />
          </Col>
        ))}
      </Row>
      <Row style={{ display: "flex", justifyContent: "flex-end" }}>
        <Pagination current={1} pageSize={20} total={100} onChange={() => {}} />
      </Row>
    </>
  );
};

export default NewList;
