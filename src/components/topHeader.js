import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import { MenuOutlined, CloseSquareOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const TopHeader = () => {
  const [menuItems, setMenuItems] = useState(false);
  const items = [
    {
      key: 1,
      label: "HOME",
      link: "/home",
    },
    {
      key: 2,
      label: "NEWS",
      link: "/news",
    },
    {
      key: 3,
      label: "DOCS",
      link: "/docs",
    },
  ];
  return (
    <Layout>
      <Header className="bg-black text-white flex justify-between px-8 relative">
        <Link to="/" className="flex gap-4 max-h-full">
          <img
            src="../logo-no-background.png"
            className="max-w-10 w-auto aspect-square object-contain"
            alt="Panghal"
          />
          <p className="text-white font-bold text-[24px] md:text-[1.5vw]">
            Panghal
          </p>
        </Link>
        <nav className="flex items-center">
          <MenuOutlined
            className="sm:hidden"
            style={{ fontSize: "20px" }}
            onClick={() => {
              setMenuItems(true);
            }}
          />
          <div
            className={`max-sm:absolute top-0 right-0 z-10 max-sm:bg-slate-600 max-sm:h-screen max-sm:text-center transition-all ease-linear duration-500 ${
              menuItems
                ? "max-sm:w-[80vw] max-sm:p-8"
                : "max-sm:w-0 max-sm:p-0 overflow-hidden"
            }`}
          >
            <CloseSquareOutlined
              className={`sm:hidden float-end ${menuItems ? "null" : "hidden"}`}
              style={{ fontSize: "24px" }}
              onClick={() => {
                setMenuItems(false);
              }}
            />
            <ul className="sm:flex gap-8 items-center justify-center max-sm:text-left max-sm:w-max max-sm:mx-auto max-sm:p-8">
              {items.map((item) => (
                <li
                  className="text-white leading-normal max-sm:my-8 font-bold"
                  key={item.key}
                >
                  <Link
                    to={item.link}
                    onClick={() => {
                      setMenuItems(false);
                    }}
                    className="hover:text-orange-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Header>
    </Layout>
  );
};

export default TopHeader;
