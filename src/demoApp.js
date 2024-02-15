import "./App.css";
import PageRoutes from "./routes/index";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className={`demo-logo-vertical bg-[rgba(255,255,255,.2)] rounded-sm text-white text-center font-bold ${
            collapsed ? "m-2 p-3" : "m-4 p-3 px-2"
          }`}
        >
          {!collapsed ? (
            <img src="../logo-no-background.svg" alt="Panghal" />
          ) : (
            <img
              src="../logo-no-background.png"
              className="h-[30px] mx-auto"
              alt="Panghal"
            />
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Home",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "About",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Contact",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <PageRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
