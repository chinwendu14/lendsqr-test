import Layout from "../../layout/Layout";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SpinnerLoader from "../../components/spinnerloader/SpinnerLoader";
const User = lazy(() => import("../../pages/dasboard/users/Users"));
const UserDetail = lazy(
  () => import("../../pages/dasboard/userdetail/UserDetail")
);
const DashboardNavigation = () => {
  return (
    <Layout>
      <Suspense fallback={<SpinnerLoader />}>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/user-detail/:id" element={<UserDetail />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default DashboardNavigation;
