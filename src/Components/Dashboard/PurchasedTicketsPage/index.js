import axios from "axios";
import { useState, useEffect } from "react";

import events from "../eventData";
import FlagshipEvents from "../FlagshipEventsData";
import EventCard from "./Card";
import { Card } from "../Modal/Card";
import BACKEND_URL from "../../../helper";
function PurchasedTicketCardsLayout() {
  const [participatedEvents, setParticipatedEvents] = useState([]);
  const [purchasedTickets, setPurchasedTickets] = useState([]);
  const [userData, setUserData] = useState();

  const eventsData = [...FlagshipEvents, ...events];

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/getUserData`, {
          withCredentials: true,
        });
        const { data } = res;
        let participatedGroup;

        if(data.participatedGroup){
          participatedGroup = Object.keys(data?.participatedGroup);

        }
        else{
          participatedGroup = [];
        }


        const filteredEvents = eventsData.filter((event) => {
          return (
            data?.participatedIndividual.includes(event.EventId) ||
            participatedGroup.includes(event.EventId)
          );
        });

        console.log("Data: ", data);
        console.log("filteredEvents: ", filteredEvents);


        if (data.groupPurchase.length > 0) {
          setPurchasedTickets(data.groupPurchase);
        } else {
          setPurchasedTickets([
            {
              name: data.name,
              email: data.email,
              phone: data.phone,
            },
          ]);
        }

        setUserData(data);
        setParticipatedEvents(filteredEvents);
      } catch (error) {}
    };
    fetchTickets();
  }, []);

  return (
    <div className="container relative right-4 sm:left-28 p-4 mt-4 flex flex-col w-full justify-center items-center">
      <h1 className="text-2xl font-bold text-center text-white ">
        Participated Events
      </h1>

      {participatedEvents.length === 0 && (
        <h1 className="text-xl font-normal text-center text-white mt-4 ">
          Not Participated in any events
        </h1>
      )}

     <div className="grid grid-cols-1 sm:grid-cols-3 py-8 sm:gap-x-[10%]">
     {participatedEvents?.map((details, index) => {
        return  <EventCard data={details} key={index} /> ;
      })}
     </div>

      <h1 className="text-2xl font-bold text-center text-white mt-12 ">
        Purchased Passes (Whole Event Pass)
      </h1>

      {
        <>
          {/* <h1 className="text-xl font-normal text-center text-white mt-4 ">
            {userData?.purchasedTickets[5] === true
              ? "Whole Event Ticket"
              : userData?.purchasedTickets[2] === true
              ? "Pronite Ticket"
              : "No Tickets purchased"}
          </h1> */}
          {purchasedTickets?.length == 0 && (<h1 className="text-xl font-normal text-center text-white mt-4 ">
          Not Purchased any Passes
        </h1>) }
          {purchasedTickets?.map((user, index) => {
            return (
              <Card.Body
                key={index}
                className="flex flex-col items-center justify-center mt-2 w-[90vw] sm:w-full bg-gray-600 rounded-xl "
              >
                <div className="flex flex-col items-center justify-center ">
                  <h1 className="text-sm sm:text-xl   font-normal text-center text-white ">
                    {user.name}
                  </h1>
                  <h1 className="text-sm sm:text-xl  font-normal text-center text-white ">
                    {user.email}
                  </h1>
                  <h1 className="text-xl font-normal text-center text-white ">
                    {user.phone}
                  </h1>
                </div>
              </Card.Body>
            );
          })}
        </>
      }
    </div>
  );
}

export default PurchasedTicketCardsLayout;
