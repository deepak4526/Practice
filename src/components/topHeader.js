import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";

const TopHeader = () => {
  return (
    <Layout>
      <Header className="bg-black text-white flex justify-between px-8">
        <div className="flex gap-4 max-h-full">
          <img
            src="../logo-no-background.png"
            className="max-w-10 w-auto aspect-square object-contain"
            alt="Panghal"
          />
          <p className="text-white font-bold text-[24px] md:text-[1.5vw]">
            Panghal
          </p>
        </div>
        <nav className="flex gap-8">
          <div className="text-white">HOME</div>
          <div className="text-white">ABOUT</div>
          <div className="text-white">CONTACT US</div>
        </nav>
      </Header>
    </Layout>
  );
};

export default TopHeader;
