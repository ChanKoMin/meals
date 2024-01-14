import React from "react";
import Meal from "./components/Meal";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="mx-10 my-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search/:name" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
