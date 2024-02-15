import React from "react";
import { Route, Routes } from "react-router-dom";

import FirstComponent from "../components/firstComponent";
import UseState from "../hooksExample.js/useState";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/first-component" element={<FirstComponent />} />
      <Route path="/use-state" element={<UseState />} />
    </Routes>
  );
};

export default PageRoutes;
