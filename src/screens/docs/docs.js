import Sider from "antd/es/layout/Sider";
import Layout, { Content } from "antd/es/layout/layout";
import { useState, useRef, useEffect } from "react";
import SideMenu from "./docsMenu";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import HooksIntro from "../../hooksExample/HooksIntro";
// import DocsComponents from "./docsComponents";

const Docs = () => {
  const [activeId, setActiveId] = useState(1);
  const [subActiveId, setSubActiveId] = useState();
  const [openDropId, setOpenDropId] = useState();

  // This ref stores the height of each dropdown content
  const dropdownRefs = useRef({});

  // Dynamically calculate the content height when dropdown is opened
  const calculateHeight = (id) => {
    if (dropdownRefs.current[id]) {
      return dropdownRefs.current[id].scrollHeight;
    }
    return 0;
  };

  const getComponentById = (id) => {
    for (const item of SideMenu) {
      if (item.id === id) {
        return item.component;
      }
      if (item.dropdowns) {
        for (const subItem of item.dropdowns) {
          if (subItem.subId === id) {
            return subItem.component;
          }
        }
      }
    }
    return null;
  };

  return (
    <Layout className="min-h-[400px] h-full p-4">
      <Sider width="16%" className="p-4 rounded-lg">
        {SideMenu.map((item) => (
          <div key={item.id} className="mt-4 bg-[#19304F] p-4 rounded-lg">
            <div
              className="text-sm cursor-pointer font-semibold text-zinc-300 flex items-center"
              onClick={() => {
                // !item.dropdowns && setActiveId(item.id);
                setActiveId(item.id);
                setOpenDropId(openDropId === item.id ? null : item.id);
              }}
            >
              <p>{item.title}</p>
              {item.dropdowns && openDropId === item.id ? (
                <CaretUpOutlined className="ms-auto" />
              ) : (
                <CaretDownOutlined className="ms-auto" />
              )}
            </div>

            <div
              ref={(el) => (dropdownRefs.current[item.id] = el)} // Store the ref for each dropdown
              className="transition-all duration-300 ease-in-out overflow-hidden"
              style={{
                height:
                  openDropId === item.id
                    ? `${calculateHeight(item.id)}px`
                    : "0px",
              }}
            >
              {item.dropdowns &&
                item.dropdowns.map((subItem) => (
                  <p
                    key={subItem.subId}
                    className="text-sm cursor-pointer text-zinc-300 ms-2 my-2"
                    onClick={() => setSubActiveId(subItem.subId)}
                  >
                    {subItem.title}
                  </p>
                ))}
            </div>
          </div>
        ))}
      </Sider>
      <Content className="rounded-lg p-4 bg-gray-200 h-full ml-4 min-h-[400px]">
        {subActiveId ? (
          <>{getComponentById(subActiveId)}</>
        ) : (
          <>{getComponentById(activeId)}</>
        )}
      </Content>
    </Layout>
  );
};

export default Docs;
