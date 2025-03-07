import FetchApi from "../../API/FetchApi";
import JSIntro from "../../components/jsES6/introJs";
import HooksIntro from "../../hooksExample/HooksIntro";
import UseState from "../../hooksExample/useState";

const SideMenu = [
  {
    title: "JavaScript (ES6+)",
    id: 1,
    component: <JSIntro />,
    dropdowns: [
      {
        subId: 2,
        title: "Variables & Constants",
        component: "Variables & Constants (let, const)",
      },
      {
        subId: 3,
        title: "Template Literals",
        component: "Template Literals (String Interpolation)",
      },
      {
        subId: 4,
        title: "Arrow Functions",
        component: "Arrow functions (=>) ",
      },
      { subId: 5, title: "Destructuring", component: "Destructuring" },
      {
        subId: 6,
        title: "Spread & Rest Operators",
        component: "Spread & Rest Operators (...)",
      },
      {
        subId: 7,
        title: "Array Methods",
        component: "Array Methods (map, filter, reduce)",
      },
      {
        subId: 8,
        title: "Promises & Async/Await",
        component: "Promises & Async/Await",
      },
    ],
  },
  {
    title: "HOOKS",
    id: 9,
    component: <HooksIntro />,
    dropdowns: [
      { subId: 10, title: "Use State", component: <UseState /> },
      { subId: 11, title: "Use Effect", component: "dfgfd" },
    ],
  },
  {
    title: "FETCH API",
    id: 12,
    dropdowns: [{ subId: 13, title: "GET", component: <FetchApi /> }],
  },
];

export default SideMenu;
