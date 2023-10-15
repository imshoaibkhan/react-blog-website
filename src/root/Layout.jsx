import React, { useContext } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import DataContext, { DataProvider } from "../context/DataContext";

const Layout = () => {
  return (
    <div className="App">
      <Header title="React Js Blog" />
      <DataProvider>
        <Nav />
        <Outlet />
        <Footer />
      </DataProvider>
    </div>
  );
};

export default Layout;
