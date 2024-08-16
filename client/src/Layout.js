import React from "react";
import Header from "./component/utils/Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="pt-20 p-6">{children}</main>
    </div>
  );
};

export default Layout;
