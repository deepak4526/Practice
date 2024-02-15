import logo from "./logo.svg";
import "./App.css";
// import FirstComponent from "./components/firstComponent";
import PageRoutes from "./routes/index";
import SideBar from "./components/sidebar";
import TopHeader from "./components/topHeader";

function App() {
  return (
    <div className="App">
      {/* <SideBar /> */}
      <TopHeader />
      <div className="p-8">
        <PageRoutes />
      </div>
    </div>
  );
}

export default App;
