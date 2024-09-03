import "./App.css";
// import News from "./components/News";
import PageRoutes from "./routes/index";
import TopHeader from "./components/topHeader";
import WebFooter from "./components/webFooter";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";

function App() {
  return (
    <Layout className="min-h-screen">
      <Header className="p-0">
        <TopHeader />
      </Header>
      <Content>
        <PageRoutes />
      </Content>
      <Footer className="p-0">
        <WebFooter />
      </Footer>
    </Layout>
  );
}

export default App;
