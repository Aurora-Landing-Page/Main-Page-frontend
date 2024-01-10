import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import Navbar from "../../Navbar/Navbar";

import "./MainDash.css";
const MainDash = () => {
  return (
    <>
      <Navbar />
      <div className="MainDash">
        <h1 className="title">Campus Ambassador</h1>
        <Cards />
        <Table />
      </div>

    </>

  );
};

export default MainDash;
