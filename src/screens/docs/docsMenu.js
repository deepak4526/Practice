import FetchApi from "../../API/FetchApi";
import HooksIntro from "../../hooksExample/HooksIntro";
import UseState from "../../hooksExample/useState";
import Interceptors from "../../reduxDoc/interceptors";

const SideMenu = [
  {
    title: "HOOKS",
    id: 1,
    component: <HooksIntro />,
    dropdowns: [
      { subId: 2, title: "Use State", component: <UseState /> },
      { subId: 3, title: "Use Effect", component: "dfgfd" },
    ],
  },
  {
    title: "FETCH API",
    id: 4,
    dropdowns: [{ subId: 5, title: "GET", component: <FetchApi /> }],
  },
];

export default SideMenu;
