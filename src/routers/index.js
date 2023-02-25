import { Spin } from "antd";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTER from "./router";
import NotFound from "./../pages/NotFound";
import Home from "./../pages/Home";
import ABOUT from "./../pages/About";

// function LazyLoadingComponent({ children }) {
//   return (
//     <React.Suspense
//       fallback={
//         <div className="loading-center" style={{ height: "100vh" }}>
//           <Spin />
//         </div>
//       }
//     >
//       {children}
//     </React.Suspense>
//   );
// }

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={ROUTER.HOME}
        element={
          // <LazyLoadingComponent>
          <Home />
          // </LazyLoadingComponent>
        }
      />
      <Route
        path={ROUTER.ABOUT}
        element={
          // <LazyLoadingComponent>
          <ABOUT />
          // {/* </LazyLoadingComponent> */}
        }
      />
      <Route
        path="*"
        element={
          // <LazyLoadingComponent>
          <NotFound />
          // {/* </LazyLoadingComponent> */}
        }
      />
    </Routes>
  );
};

export default AppRouter;
