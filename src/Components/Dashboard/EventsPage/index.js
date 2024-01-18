import events from "../eventData";
import Card from "./Card";

function EventCardsLayout() {
  return (
    <div className="container p-4 mt-4">
      {events?.map((details, index) => {
        return <Card data={details} key={index} />;
      })}
    </div>
  );
}

export default EventCardsLayout;
