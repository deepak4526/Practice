import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { React, useState } from "react";

import { CaretDownOutlined } from "@ant-design/icons";
import NewsMenu from "../../components/sideMenus/newsMenu";

const News = () => {
  const [activeId, setActiveId] = useState(1);
  const [openDropId, setOpenDropId] = useState(null);

  const getComponentById = (id) => {
    for (const item of NewsMenu) {
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
    <Layout className="min-h-[400px] h-full p-4">
      <Sider
        width="16%"
        className="p-4 rounded-lg "
        // style={{ backgroundColor: "rgb(25 48 69)" }}
      >
        {NewsMenu.map((item) => (
          <div key={item.id} className="mt-4 bg-[#19304F] p-4 rounded-lg">
            <div
              key={item.id}
              className="text-sm cursor-pointer font-semibold text-zinc-300 flex items-center"
              onClick={() => {
                !item.dropdowns && setActiveId(item.id);
                setOpenDropId(openDropId === item.id ? null : item.id);
              }}
            >
              <p>{item.title}</p>
              {item.dropdowns && <CaretDownOutlined className="ms-auto" />}
            </div>

            <div
              className={`transition delay-500 duration-300 ease-in-out  ${
                openDropId === item.id ? "h-fit" : "h-0 overflow-hidden"
              }`}
            >
              {item.dropdowns &&
                item.dropdowns.map((subItem) => (
                  <p
                    key={subItem.id}
                    className="text-sm cursor-pointer text-zinc-300 ms-2 my-2"
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
        {getComponentById(activeId)}
      </Content>
    </Layout>
  );
};
export default News;
