import "./App.css";
// import News from "./components/News";
import PageRoutes from "./routes/index";
import TopHeader from "./components/topHeader";
// import WebFooter from "./components/webFooter";
import Layout, { Content, Header } from "antd/es/layout/layout";

function App() {
  return (
    <Layout className="h-screen flex flex-col custom-scrollbar">
      <Header className="p-0">
        <TopHeader />
      </Header>
      <Content className="flex-1 h-max">
        <PageRoutes />
      </Content>
    </Layout>
  );
}

export default App;
