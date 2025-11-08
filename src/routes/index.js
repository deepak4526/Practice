import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/home";
import News from "../screens/news/news";
import Docs from "../screens/docs/docs";
import { DocsRoutes } from "./docsRoutes";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/docs" element={<Docs />}>
        {DocsRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default PageRoutes;
