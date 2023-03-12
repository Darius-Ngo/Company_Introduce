import React from "react";
import { WrapAboutPage } from "../About/styled";
import PicDetailsDemo from "../Home/components/Services/Service";
import { WrapHeaderServices } from "./styled";

const Services = () => {
  return (
    <div>
      <WrapAboutPage>
        <WrapHeaderServices>
          <div className="slogan d-flex align-items-center justify-content-center">
            <h2>Services</h2>
          </div>
        </WrapHeaderServices>
      </WrapAboutPage>
      <div style={{ position: "relative", top: "-250px" }}>
        <PicDetailsDemo />
      </div>
    </div>
  );
};

export default Services;
