import FetchApi from "../../API/FetchApi";
import UseState from "../../hooksExample/useState";
import Interceptors from "../../reduxDoc/interceptors";

const SideMenu = [
  {
    title: "HOOKS",
    id: 1,
    dropdowns: [
      { id: 2, title: "Use State", component: <UseState /> },
      { id: 3, title: "Use Effect", component: "dfgfd" },
    ],
  },
  {
    title: "FETCH API",
    id: 4,
    dropdowns: [{ id: 5, title: "GET", component: <FetchApi /> }],
  },
];

export default SideMenu;
