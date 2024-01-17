import React, { useState, useEffect } from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi";

import { TabbedLayout } from "./TabbedLayout";
import "./index.css";
import Toast from "../AlertAndLoader/Toast";
import Loader from "../AlertAndLoader/Loader";
import Alert from "../AlertAndLoader/Alert";

import EventCardsLayout from "./EventsPage";
import TicketCardsLayout from "./TicketsPage";

const Dashboard = () => {
  const [showToast, setShowToast] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [loading, setLoading] = useState(true);
  const [messege, setMessege] = useState("");
  // TODO: Aurora logo, logout button

  const [navigation, setNavigation] = useState([
    {
      component: <EventCardsLayout />,
      icon: HiOutlineGlobeAlt,
      name: "Events",
      id: "/events",
    },
    {
      component: <TicketCardsLayout />,
      icon: HiOutlineGlobeAlt,
      name: "Tickets",
      id: "/tickets",
    },
  ]);

  const handleToastClose = () => {
    setMessege("");
    setShowToast(false);
  };

  const handleAlertClose = () => {
    setMessege("");
    setShowAlert(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
        <div className="pt-6 lg:pt-20 dashboard">
          <div className="max-w-3xl  mx-auto sm:px-6 lg:max-w-full xl:max-w-[90rem] lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-9 lg:grid lg:grid-cols-12 lg:gap-8 ">
              <TabbedLayout
                isTabbed={true}
                navigation={navigation}
                setNavigation={setNavigation}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
