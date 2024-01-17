import events from "../eventData";
import Card from "./Card";

function EventCardsLayout() {
  return (
    <div className="container p-4 mt-4">
      <div className="bg-transparent grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-1  md:grid-cols-3 md:gap-x-1 lg:grid-cols-4 lg:lg:gap-x-1">
        {events?.map((details, index) => {
          return <Card data={details} key={index} />;
        })}
      </div>
    </div>
  );
}

export default EventCardsLayout;
