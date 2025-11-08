import "./App.css";
import PageRoutes from "./routes/index";
import TopHeader from "./components/topHeader";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import WebFooter from "./components/webFooter";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <Layout className="h-screen flex flex-col custom-scrollbar">
      <Header className="p-0">
        <TopHeader />
      </Header>
      <Content>
        <PageRoutes />
      </Content>
      {location.pathname === "/" && (
        <Footer className="p-0 bg-black">
          <WebFooter />
        </Footer>
      )}
    </Layout>
  );
}

export default App;
