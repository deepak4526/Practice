import logo from "./logo.svg";
import "./App.css";
// import FirstComponent from "./components/firstComponent";
import PageRoutes from "./routes/index";
import SideBar from "./components/sidebar";
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
