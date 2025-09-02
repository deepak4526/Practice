const SideMenu = [
  {
    title: "JAVASCRIPT (ES6+)",
    id: 1,
    path: "/docs/javascript/intro",
    dropdowns: [
      {
        subId: 2,
        title: "Variables & Constants",
        path: "/docs/javascript/variables-constants",
      },
      {
        subId: 3,
        title: "Template Literals",
        path: "/docs/javascript/template-literals",
      },
      {
        subId: 4,
        title: "Arrow Functions",
        path: "/docs/javascript/arrow-functions",
      },
      {
        subId: 5,
        title: "Destructuring",
        path: "/docs/javascript/destructuring",
      },
      {
        subId: 6,
        title: "Spread & Rest Operators",
        path: "/docs/javascript/spread-rest",
      },
      {
        subId: 7,
        title: "Array Methods",
        path: "/docs/javascript/array-methods",
      },
      {
        subId: 8,
        title: "Promises & Async/Await",
        path: "/docs/javascript/promises-async",
      },
    ],
  },
  {
    title: "HOOKS",
    id: 9,
    path: "/docs/hooks/intro",
    dropdowns: [
      {
        subId: 10,
        title: "Use State",
        path: "/docs/hooks/use-state",
      },
      {
        subId: 11,
        title: "Use Effect",
        path: "/docs/hooks/use-effect",
      },
    ],
  },
  {
    title: "FETCH API",
    id: 12,
    dropdowns: [
      {
        subId: 13,
        title: "GET",
        path: "/docs/api/fetch",
      },
    ],
  },
];

export default SideMenu;
