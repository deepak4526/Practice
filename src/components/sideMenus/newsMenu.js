import BusinessNews from "../../screens/news/business";

const NewsMenu = [
  {
    title: "BUSINESS",
    id: 1,
    component: <BusinessNews />,
    // dropdowns: [{ id: 1, title: "Use State", component: <BusinessNews /> }],
  },
  {
    title: "BUSINESS 2",
    id: 2,
    component: "<BusinessNews />",
    // dropdowns: [{ id: 1, title: "Use State", component: <BusinessNews /> }],
  },
];

export default NewsMenu;
