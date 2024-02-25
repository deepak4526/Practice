import Sider from "antd/es/layout/Sider";
import Layout, { Content } from "antd/es/layout/layout";
import { useState } from "react";
import sideMenu from "../../dataSource/sideMenu.json";
import DocsComponents from "./docsComponents";

const DocsDup = () => {
  console.log(sideMenu);
  const [activeId, setActiveId] = useState(1);
  console.log(activeId);
  return (
    <div className="p-4">
      <Layout className="min-h-[400px] h-full">
        <Sider
          width="16%"
          className="p-4 rounded-lg"
          style={{ backgroundColor: "#91b4d5" }}
        >
          {sideMenu.map((item) => (
            <p
              key={item.id}
              className="text-sm"
              onClick={() => setActiveId(item.id)}
            >
              {item.title}
              {item.id}
            </p>
          ))}
        </Sider>
        <Content className="rounded-lg p-4 bg-gray-200 h-full ml-4 min-h-[400px]">
          {sideMenu.map(
            (item) =>
              activeId === item.id && (
                <div key={item.id}>
                  {/* {item.id}
                  {item.component} */}
                  <DocsComponents componentName={item.component} />
                </div>
              )
          )}
        </Content>
      </Layout>
    </div>
  );
};
export default DocsDup;
