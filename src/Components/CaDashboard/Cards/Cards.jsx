import React from "react";
import "./Cards.css";
import { UilClipboardAlt, UilCoins } from "@iconscout/react-unicons";
import Card from "../Card/Card";

const Cards = () => {
  // const response = await axios.get("http://localhost:3000/getCaData")
  // const ca = response.data
  // const registrations = ca.referrals.length
  // let barVal
  // if(registrations >= 15) {
  //   barVal = 100
  // }  else {
  //   barVal = (registrations*100)/15
  // }
  const cardsData = [
    {
      title: "Registrations",
      color: {
        backGround: "linear-gradient(180deg, #454343 0%, #6e6c6c 100%)",
        boxShadow: "0px 2px 4px 0px #81c8e2",
      },

      value:
        //  registrations
        15,
      barValue: null,
      png: UilClipboardAlt,
      description:
        "The count of refferals that you have made through your refferal code",
    },
    {
      title: "Credit Score",
      color: {
        backGround: "linear-gradient(180deg, #454343 0%, #6e6c6c 100%)",
        boxShadow: "0px 2px 4px 0px #e365d0",
      },
      barValue:
        //  barVal
        15,
      value:
        //  registrations * 100
        15,
      png: UilCoins,
      description:
        "If you are successful to complete 15 referrals, you will avail 50% discount.",
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
