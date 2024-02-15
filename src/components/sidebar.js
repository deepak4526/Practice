import React, { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const menuItems = [
    {
      key: 1,
      icon: <HomeOutlined style={{ fontSize: "23px" }} />,
      label: "Home",
    },
    {
      key: 2,
      icon: <UserOutlined style={{ fontSize: "23px" }} />,
      label: "Users",
    },
    {
      key: 3,
      icon: <VideoCameraOutlined style={{ fontSize: "23px" }} />,
      label: "Videos",
    },
    {
      key: 4,
      icon: <UploadOutlined style={{ fontSize: "23px" }} />,
      label: "Uploads",
    },
  ];
  return (
    <aside
      className={`float-left overflow-x-hidden bg-indigo-500 h-screen transition-all ease-linear duration-500 ${
        collapsed ? "w-[62px]" : "w-[200px]"
      }`}
      onMouseEnter={() => {
        setCollapsed(false);
      }}
      onMouseLeave={() => {
        setCollapsed(true);
      }}
    >
      <div className="flex mt-4 justify-start items-center gap-4 h-[40px] px-3 mx-2">
        <img
          src="../logo-no-background.png"
          className="w-[23px]"
          alt="Panghal"
        />
        <p
          className={`text-white font-bold text-[1.5vw] ${
            collapsed ? "hidden" : "block"
          }`}
        >
          Panghal
        </p>
      </div>
      <nav>
        {menuItems.map((item) => (
          <div className="flex justify-start items-center mt-8 gap-4 px-3 py-2 rounded hover:bg-gray-200 bg-white mx-2">
            {item.icon}
            <p className={`font-semibold ${collapsed ? "hidden" : "block"}`}>
              {item.label}
            </p>
          </div>
        ))}
      </nav>
    </aside>
  );
};
export default Sidebar;
