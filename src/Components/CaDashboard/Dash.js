import "./Dash.css";

import Sidebar from "./Sidebar";
import {  Outlet } from "react-router-dom";
function Dash() {
  return (
      <div className="Dash">
        <div className="DashGlass">
          <Sidebar />
          <Outlet />
        </div>
      </div>
  );
}

export default Dash
