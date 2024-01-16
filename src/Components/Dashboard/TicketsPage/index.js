import { useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useEffect } from "react";

function TicketCardsLayout() {
  const [tickets, setTickets] = useState([]);

  // TODO: Fetch tickets from backend
  const handleTicketRequest = async () => {
    try {
      // const res = await axios.get();
      // setTickets(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleTicketRequest();
  }, []);

  return (
    <div className="container mx-auto p-4 mt-14">
      {tickets.length <= 0 ? (
        <div className="flex justify-center items-center">
          <h1 className="text-xl font-bold">
            Your purchased tickets will show here
          </h1>
        </div>
      ) : (
        <div className="bg-transparent p-4 grid grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-x-72 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3">
          {tickets?.map((details, index) => {
            return <Card data={details} key={index} />;
          })}
        </div>
      )}
    </div>
  );
}

export default TicketCardsLayout;
