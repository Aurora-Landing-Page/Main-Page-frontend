import "./Dash.css";
import Loader from "../AlertAndLoader/Loader";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import {  Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import BACKEND_URL from "../../helper";
import axios from "axios";
function Dash() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);

  const checkUserLoginStatus = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/getCaData`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log("response: ", response.status);

      if (response.status !== 200) {

        navigate("/login");
      }
    } catch (error) {
      navigate("/login");
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    checkUserLoginStatus();
  }, []);
  
  return (
    <>
    {loading ? (
        <Loader />
      ) : (
      <div className="Dash">
        <div className="DashGlass">
          <Sidebar />
          <Outlet />
        </div>
      </div>)}
    </>
        
      
  );
}

export default Dash
