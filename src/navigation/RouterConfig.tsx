import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SpinnerLoader from "../components/spinnerloader/SpinnerLoader";
const Login = lazy(() => import("../pages/login/Login"));
const Dashboard = lazy(
  () => import("./dashboardNavigation/DashboardNavigation")
);
const RouterConfig = () => {
  return (
    <Suspense fallback={<SpinnerLoader />}>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/dashboard/user/*" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;
