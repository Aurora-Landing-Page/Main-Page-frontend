import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import { useNavigate } from "react-router-dom";
import BACKEND_URL from "../../../helper";
import Loader from "../../AlertAndLoader/Loader";
import { useEffect } from "react";
import axios from "axios";
import "./MainDash.css";
const MainDash = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const checkUserLoginStatus = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/getCaData`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(response.status);

      if (response.status !== 200) {

        navigate("/login");
      }
    } catch (error) {
      navigate("/login");
      console.log(error);
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);

  //   checkUserLoginStatus();
  // }, []);
  
  return (
    <>
    {loading ? (
        <Loader />
      ) : (
        <div className="MainDash">
      <Cards />
      <Table />
    </div>)}
    </>
    
  );
};

export default MainDash;
