import React from "react";
import Navbar from "../components/common/navbar/Navbar";
import { Outlet } from "react-router-dom";
import FooterPage from "../components/common/footer/Footer";
import useAuth from "../hooks/useAuth";
import Loading from "../components/shared/Loading";

const Main = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Navbar />
      <Outlet />
      <FooterPage />
    </div>
  );
};

export default Main;
