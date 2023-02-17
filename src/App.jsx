import Topbar from "./components/topbar/Topbar";
import Home from "./components/Home/Home"
import Portfolio from "./components/Mission/Mission"
import Department from "./components/Department/Department"
import Vision from "./components/Vision/Vision"
import Contact from "./components/contact/Contact"
import "./app.scss"
import React, { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Home/>
       <Portfolio/>
       <Department/>
       <Vision/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
