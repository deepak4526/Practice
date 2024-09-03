import UseState from "../../hooksExample.js/useState";
import Interceptors from "../../reduxDoc/interceptors";

const SideMenu = [
  {
    title: "HOOKS",
    id: 1,
    dropdowns: [
      { id: 2, title: "Use State", component: <UseState /> },
      { id: 31, title: "Use State", component: <UseState /> },
    ],
  },
  {
    title: "FETCH API",
    id: 2,
    dropdowns: [{ id: 1, title: "GET", component: <UseState /> }],
  },
];

export default SideMenu;
