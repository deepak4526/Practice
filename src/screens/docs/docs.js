import Sider from "antd/es/layout/Sider";
import Layout, { Content } from "antd/es/layout/layout";
import { useState } from "react";
import SideMenu from "./docsMenu";
import DocsComponents from "./docsComponents";

const Docs = () => {
  const [activeId, setActiveId] = useState(1);
  console.log(activeId);
  return (
    <div className="p-4">
      <Layout className="min-h-[400px] h-full">
        <Sider
          width="16%"
          className="p-4 rounded-lg"
          style={{ backgroundColor: "rgb(25 48 69)" }}
        >
          {SideMenu.map((item) => (
            <p
              key={item.id}
              className="text-sm cursor-pointer font-semibold text-zinc-300"
              onClick={() => setActiveId(item.id)}
            >
              {item.title}
            </p>
          ))}
        </Sider>
        <Content className="rounded-lg p-4 bg-gray-200 h-full ml-4 min-h-[400px]">
          {SideMenu.map(
            (item) =>
              activeId === item.id && <div key={item.id}>{item.component}</div>
          )}
        </Content>
      </Layout>
    </div>
  );
};
export default Docs;
