import Sider from "antd/es/layout/Sider";
import Layout, { Content } from "antd/es/layout/layout";
import { useState } from "react";
import SideMenu from "./docsMenu";
import { CaretDownOutlined } from "@ant-design/icons";
// import DocsComponents from "./docsComponents";

const Docs = () => {
  const [activeId, setActiveId] = useState(1);
  const [openDropId, setOpenDropId] = useState(null);

  console.log(activeId);

  const getComponentById = (id) => {
    for (const item of SideMenu) {
      if (item.id === id) {
        return item.component;
      }
      if (item.dropdowns) {
        for (const subItem of item.dropdowns) {
          if (subItem.id === id) {
            return subItem.component;
          }
        }
      }
    }
    return null;
  };
  return (
    <div className="p-4">
      <Layout className="min-h-[400px] h-full">
        <Sider
          width="16%"
          className="p-4 rounded-lg "
          // style={{ backgroundColor: "rgb(25 48 69)" }}
        >
          {SideMenu.map((item) => (
            <div key={item.id} className="mt-4 bg-[#19304F] p-4 rounded-lg">
              <div
                key={item.id}
                className="text-sm cursor-pointer font-semibold text-zinc-300 flex items-center"
                onClick={() => {
                  setActiveId(item.id);
                  setOpenDropId(openDropId === item.id ? null : item.id);
                }}
              >
                <p>{item.title}</p>
                {item.dropdowns && <CaretDownOutlined className="ms-auto" />}
              </div>

              <div
                className={`${
                  openDropId === item.id ? "h-fit" : "h-0 overflow-hidden"
                }`}
              >
                {item.dropdowns &&
                  item.dropdowns.map((subItem) => (
                    <p
                      key={subItem.id}
                      className="text-sm cursor-pointer text-zinc-300 ms-2"
                      onClick={() => setActiveId(subItem.id)}
                    >
                      {subItem.title}
                    </p>
                  ))}
              </div>
            </div>
          ))}
        </Sider>
        <Content className="rounded-lg p-4 bg-gray-200 h-full ml-4 min-h-[400px]">
          {/* {SideMenu.map(
            (item) =>
              activeId === item.id && <div key={item.id}>{item.component}</div>
          )} */}
          {getComponentById(activeId)}
        </Content>
      </Layout>
    </div>
  );
};
export default Docs;
