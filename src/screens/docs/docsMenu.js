import UseState from "../../hooksExample.js/useState";
import Interceptors from "../../reduxDoc/interceptors";

const SideMenu = [
  {
    title: "HOOKS",
    id: 1,
    dropdowns: [
      { id: 11, title: "Use State", component: <UseState /> },
      { id: 12, title: "Home", component: <UseState /> },
      { id: 13, title: "About", component: <UseState /> },
      { id: 14, title: "Abc", component: <UseState /> },
    ],
  },
  {
    title: "REDUX",
    id: 2,
    component: <Interceptors />,
  },
  {
    title: "HOOKS",
    id: 3,
    dropdowns: [
      { id: 31, title: "Use State", component: <UseState /> },
      { id: 32, title: "Home", component: <UseState /> },
      { id: 33, title: "About", component: <UseState /> },
      { id: 34, title: "Abc", component: <UseState /> },
    ],
  },
];

export default SideMenu;
