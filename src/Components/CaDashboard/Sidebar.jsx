import { useState } from "react";
import "./Sidebar.css";
import Logo from "./imgs/CaLogo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "./Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);

 

  return (
    <>
      <div
        className="ca-bars"
        style={expanded ? { left: "2%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="ca-sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="ca-logo">
          <img
            src={Logo}
            alt="logo"
            onClick={() => window.location.replace("https://aurorafest.in/")}
          />
          <span className="aurora">Aurora</span>
        </div>

        <div className="ca-menu" >
          {SidebarData.map((item, index) => {
            return (
              <Link to={item.link} className="ca-nav">
                <div
                  key={index}
                  className={
                    selected === index ? "menuItem active" : "menuItem"
                  }
                  onClick={() => {
                    setSelected(index);
                  }}
                >
                  <item.icon />
                  <span>{item.heading}</span>
                </div>
              </Link>
            );
          })}

          {/* <Link to="/signout" className="icons">
              <UilSignOutAlt />
            </Link> */}
          <button className="menuItem  icons" >
            <UilSignOutAlt /> <span className="signOutText">Logout</span>
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
