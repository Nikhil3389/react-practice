import React from "react";
import {Routes,Route} from "react-router-dom"
import About from "./About";
import Home from "./Home";
import PageNot from "./PageNot";
function Navigation(){
    return (
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" exact={true} element={<Home/>} />
          <Route path="*"  element={<PageNot/>} />
        </Routes>
      </div>
    );
}
export default Navigation