import ArrowFunctions from "../components/jsES6/arrowFunctions";
import Destructuring from "../components/jsES6/destructuring";
import JSIntro from "../components/jsES6/introJs";
import TemplateLiterals from "../components/jsES6/templateLiterals";
import VariablesConstants from "../components/jsES6/variablesConstants";
import HooksIntro from "../hooksExample/HooksIntro";
import UseState from "../hooksExample/useState";
import FetchApi from "../API/FetchApi";

export const DocsRoutes = [
  {
    path: "/docs/javascript/intro",
    component: JSIntro,
  },
  {
    path: "/docs/javascript/variables-constants",
    component: VariablesConstants,
  },
  {
    path: "/docs/javascript/template-literals",
    component: TemplateLiterals,
  },
  {
    path: "/docs/javascript/arrow-functions",
    component: ArrowFunctions,
  },
  {
    path: "/docs/javascript/destructuring",
    component: Destructuring,
  },
  {
    path: "/docs/hooks/intro",
    component: HooksIntro,
  },
  {
    path: "/docs/hooks/use-state",
    component: UseState,
  },
  {
    path: "/docs/api/fetch",
    component: FetchApi,
  },
];
