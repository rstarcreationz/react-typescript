import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../../Routes/Routes";
import Header from "../Includes/Header";
import Footer from "../Includes/Footer";
import { Sidebar } from "../TheSidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <Suspense>
        <div className="page-wrapper chiller-theme toggled">
          <Sidebar />
          <div className="page-content">
            <Header />

            <Routes>
              {routes.map((route, idx) => {
                return (
                  <Route
                    key={idx}
                    path={route.path}
                    // exact={route.exact}
                    // name={route.name}
                    element={<route.element />}
                  />
                );
              })}
            </Routes>
            <Footer />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Layout;
