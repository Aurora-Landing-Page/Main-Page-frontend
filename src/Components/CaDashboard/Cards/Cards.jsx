import React, { useState, useEffect } from "react";
import "./Cards.css";
import { UilClipboardAlt, UilCoins } from "@iconscout/react-unicons";
import Card from "../Card/Card";
import { Stack } from "@mui/material";
import BACKEND_URL from "../../../helper.js";
import axios from "axios";

const Cards = () => {
  const [registrations, setRegistrations] = useState(0);
  const [barValue, setBarValue] = useState(0);
  const [data, setData] = useState([]);
  const [creditValue, setCreditValue] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/getCaData`, {
          withCredentials: true,
        });
        
        // Assuming the API response has a 'data' key containing the user information
        const userData = response.data.referrals;

        // Fetch payment status for each user
        const paymentStatusPromises = userData.map(async (user) => {
          try {
            const paymentStatusResponse = await axios.post(
              `${BACKEND_URL}/getPaymentStatus`,
              {
                email: user.email,
              },
              {
                withCredentials: true,
              }
            );
            // Check if associatedPayments is an empty array or contains a string
            const hasAssociatedPayments =
              Array.isArray(paymentStatusResponse.data) &&
              paymentStatusResponse.data.length > 0;

            return { ...user, hasAssociatedPayments };
          } catch (error) {
            console.error(
              `Error fetching payment status for ${user.email}:`,
              error
            );
            return { ...user, hasAssociatedPayments: false };
          }
        });

        // Wait for all payment status requests to complete
        const modifiedData = await Promise.all(paymentStatusPromises);
        setData(modifiedData);

        const filteredData = modifiedData.filter(
          (user) => user.hasAssociatedPayments
        );
        const duePaymentFilteredData = modifiedData.filter(
          (user) => !user.hasAssociatedPayments
        );

        const registrationsCount = filteredData?.length || 0;
        setRegistrations(registrationsCount);
        const duePaymentRegistrationsCount =
          duePaymentFilteredData?.length || 0;
        let calculatedBarValue;
        let calculatedCreditValue;
        calculatedCreditValue =
          duePaymentRegistrationsCount * 10 + registrationsCount * 100;
        if (registrationsCount >= 15) {
          calculatedBarValue = 100;
        } else {
          calculatedBarValue = (registrationsCount * 100) / 15;
        }
        setBarValue(calculatedBarValue);
        setCreditValue(calculatedCreditValue);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  const cardsData = [
    {
      title: "Registrations",
      color: {
        backGround: "linear-gradient(180deg, #454343 0%, #6e6c6c 100%)",
        boxShadow: "0px 2px 4px 0px #81c8e2",
      },
      value: registrations,
      barValue: null,
      png: UilClipboardAlt,
      description:
        "The count of referrals that you have made through your referral code",
    },
    {
      title: "Credit Score",
      color: {
        backGround: "linear-gradient(180deg, #454343 0%, #6e6c6c 100%)",
        boxShadow: "0px 2px 4px 0px #e365d0",
      },
      barValue: Math.round(barValue),
      value: Math.round(creditValue),
      png: UilCoins,
      description:
        "If you are successful in completing 15 referrals, you will avail a 50% discount.",
    },
  ];

  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              description={card.description}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
