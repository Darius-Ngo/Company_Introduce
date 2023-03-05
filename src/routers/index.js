import { Spin } from "antd";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTER from "./router";
import NotFound from "./../pages/NotFound";
import Home from "./../pages/Home";
import ABOUT from "./../pages/About";
import NewList from "src/pages/News";
import ContactUsPage from "./../pages/ContactUs";
import Header from "../layouts/header";
import Footer from "./../layouts/footer";

function LazyLoadingComponent({ children }) {
  return (
    <React.Suspense
      fallback={
        <div className="loading-center" style={{ height: "100vh" }}>
          <Spin />
        </div>
      }
    >
      <Header />
      {children}
      <Footer />
    </React.Suspense>
  );
}

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <LazyLoadingComponent>
            <Home />
          </LazyLoadingComponent>
        }
      />
      <Route
        path={ROUTER.HOME}
        element={
          <LazyLoadingComponent>
            <Home />
          </LazyLoadingComponent>
        }
      />
      <Route
        path={ROUTER.ABOUT}
        element={
          <LazyLoadingComponent>
            <ABOUT />
          </LazyLoadingComponent>
        }
      />
      <Route
        path={ROUTER.CONTACT_US}
        element={
          <LazyLoadingComponent>
            <ContactUsPage />
          </LazyLoadingComponent>
        }
      />
      <Route
        path={ROUTER.CUSTOMER_REVIEWS}
        element={
          <LazyLoadingComponent>
            <ABOUT />
          </LazyLoadingComponent>
        }
      />
      <Route
        path={ROUTER.JOBS}
        element={
          <LazyLoadingComponent>
            <ABOUT />
          </LazyLoadingComponent>
        }
      />
      <Route
        path={ROUTER.MAKE_A_REFERRAL}
        element={
          <LazyLoadingComponent>
            <ABOUT />
          </LazyLoadingComponent>
        }
      />
      <Route
        path={ROUTER.NEWS}
        element={
          <LazyLoadingComponent>
            <NewList />
          </LazyLoadingComponent>
        }
      />
      <Route
        path={ROUTER.SERVICES}
        element={
          <LazyLoadingComponent>
            <ABOUT />
          </LazyLoadingComponent>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
