import UseState from "../../hooksExample.js/useState";
import Interceptors from "../../reduxDoc/interceptors";

const SideMenu = [
  {
    title: "HOOKS",
    id: 1,
    dropdowns: [
      { id: 2, title: "Use State", component: <UseState /> },
      { id: 3, title: "Use State", component: "dfgfd" },
    ],
  },
  {
    title: "FETCH API",
    id: 4,
    dropdowns: [{ id: 5, title: "GET", component: "<UseState />" }],
  },
];

export default SideMenu;
