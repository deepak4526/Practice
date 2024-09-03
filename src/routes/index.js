import React from "react";
import { Route, Routes } from "react-router-dom";
import UseState from "../hooksExample.js/useState";
import Docs from "../screens/docs/docs";
import DocsDup from "../screens/docs/docsDup";
import Home from "../screens/home";
import News from "../screens/news/news";
import BusinessNews from "../screens/news/business";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/" element={<Docs />} />
      <Route path="/docs/use-state" element={<UseState />} />
      <Route path="/docs-dup" element={<DocsDup />} />
      <Route path="/news/business" element={<BusinessNews />} />
    </Routes>
  );
};

export default PageRoutes;
