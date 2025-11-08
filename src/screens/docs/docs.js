import Sider from "antd/es/layout/Sider";
import Layout, { Content, Footer } from "antd/es/layout/layout";
import { useState } from "react";
import SideMenu from "./docsMenu";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import WebFooter from "../../components/webFooter";
import { Outlet, Link } from "react-router-dom";
// import DocsComponents from "./docsComponents";

const Docs = () => {
  const [openDropId, setOpenDropId] = useState();

  return (
    <Layout className="min-h-[400px] h-full p-4">
      <Sider
        width="16%"
        className="p-4 rounded-lg overflow-y-scroll max-h-full custom-scrollbar"
      >
        {SideMenu.map((item) => (
          <div key={item.id} className="mt-4 bg-[#19304F] p-4 rounded-lg">
            <div
              className="text-sm cursor-pointer font-semibold text-zinc-300 flex items-center px-2 py-1 rounded-md hover:bg-slate-700"
              onClick={() =>
                setOpenDropId(openDropId === item.id ? null : item.id)
              }
            >
              <Link to={item.path}>{item.title}</Link>
              <div className="ms-auto">
                {item.dropdowns && openDropId === item.id ? (
                  <CaretUpOutlined />
                ) : (
                  <CaretDownOutlined />
                )}
              </div>
            </div>

            <div
              className="transition-all duration-300 ease-in-out overflow-hidden flex flex-col"
              style={{
                height: openDropId === item.id ? "auto" : "0px",
              }}
            >
              {item.dropdowns &&
                item.dropdowns.map((subItem) => (
                  <Link
                    key={subItem.subId}
                    to={subItem.path}
                    className="text-sm cursor-pointer text-zinc-300 px-2 rounded-md py-1 my-1 hover:bg-slate-700"
                  >
                    {subItem.title}
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </Sider>
      <Content className="rounded-lg p-4 bg-gray-200 ml-4 overflow-y-scroll max-h-full rc-table-cell-scrollbar flex flex-col justify-between">
        <Outlet />
        <Footer className="p-0 mt-auto">
          <WebFooter />
        </Footer>
      </Content>
    </Layout>
  );
};

export default Docs;
