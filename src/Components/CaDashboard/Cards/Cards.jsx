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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/getCaData`, {
          withCredentials: true,
        });
        console.log(response.data);
        const ca = response.data;
        const registrationsCount = ca?.referrals.length || 0;
        setRegistrations(registrationsCount);

        let calculatedBarValue;
        if (registrationsCount >= 15) {
          calculatedBarValue = 100;
        } else {
          calculatedBarValue = (registrationsCount * 100) / 15;
        }
        setBarValue(calculatedBarValue);
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
      value: Math.round((registrations * 100)/15),
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
