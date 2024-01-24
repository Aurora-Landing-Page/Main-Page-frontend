import events from "../eventData";
import Card from "./Card";

function EventCardsLayout() {
  return (
    <div className=" mt-4 flex flex-col   sm:grid  sm:grid-cols-6 sm:gap-x-16 pt-6 mr-[10%] sm:mr-0">
      {events?.map((details, index) => {
        return <Card data={details} key={index} className="flex justify-center" />
      })}
    </div>
  );
}

export default EventCardsLayout;
