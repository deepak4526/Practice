import React from "react";
import { Route, Routes } from "react-router-dom";

import FirstComponent from "../components/firstComponent";
import UseState from "../hooksExample.js/useState";
import Docs from "../screens/docs/docs";
import DocsDup from "../screens/docs/docsDup";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/first-component" element={<FirstComponent />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/docs/use-state" element={<UseState />} />
      <Route path="/docs-dup" element={<DocsDup />} />
    </Routes>
  );
};

export default PageRoutes;
