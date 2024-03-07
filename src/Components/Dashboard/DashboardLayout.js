import React, { useState, useEffect } from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TabbedLayout } from "./TabbedLayout";
import "./index.css";
import Toast from "../AlertAndLoader/Toast";
import Loader from "../AlertAndLoader/Loader";
import Alert from "../AlertAndLoader/Alert";
import FlagshipEventCardsLayout from "./EventsPage/FlagshipEventCardsLayout";
import EventCardsLayout from "./EventsPage/EventCardsLayout";
import TicketCardsLayout from "./TicketsPage";
import PurchasedTicketCardsLayout from "./PurchasedTicketsPage";
import Logo from "./images/o.png";
import BACKEND_URL from "../../helper";
import Navbar from "../Navbar/Navbar";
import { CiLogout } from "react-icons/ci";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [loading, setLoading] = useState(true);
  const [messege, setMessege] = useState("");

  const [navigation, setNavigation] = useState([
    {
      component: <EventCardsLayout />,
      icon: HiOutlineGlobeAlt,
      name: "Events",
      id: "/club-events",
    },
    {
      component: <TicketCardsLayout />,
      icon: HiOutlineGlobeAlt,
      name: "Passes",
      id: "/passes",
    },
    {
      component: <PurchasedTicketCardsLayout />,
      icon: HiOutlineGlobeAlt,
      name: "Purchased Passes",
      id: "/purchasedPasses",
    },
    // {
    //   component: <CiLogout />,
    //   icon: CiLogout,
    //   name: "Log Out",
    //   id: "/",
    // },
  ]);

  const handleToastClose = () => {
    setMessege("");
    setShowToast(false);
  };

  const handleAlertClose = () => {
    setMessege("");
    setShowAlert(false);
  };

  const handleLogout = async () => {
    await axios.post(`${BACKEND_URL}/logout`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    navigate("/");
    setMessege("Logged out successfully");
    setShowAlert(true);
  };

  const checkUserLoginStatus = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/getUserData`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (response.status !== 200) {
        setMessege("Please login first");
        setShowAlert(true);

        navigate("/login");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      setMessege("Please login first");
      setShowAlert(true);
      navigate("/login");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    checkUserLoginStatus();
  }, []);

  return (
    <div className="login">
      {showToast && (
        <Toast message={messege} duration={3000} onClose={handleToastClose} />
      )}
      {showAlert && (
        <Alert message={messege} duration={3000} onClose={handleAlertClose} />
      )}
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className=" dashboard">
            <Navbar />
            <div className="max-w-3xl  lg:max-w-full xl:max-w-[90rem] lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-9 lg:grid lg:grid-cols-12 lg:gap-8 ">
                <TabbedLayout
                  isTabbed={true}
                  navigation={navigation}
                  setNavigation={setNavigation}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;