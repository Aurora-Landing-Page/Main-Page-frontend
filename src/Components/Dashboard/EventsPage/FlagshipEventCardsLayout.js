import FlagshipEvents from "../FlagshipEventsData";
import Card from "./Card";

function FlagshipEventCardsLayout() {
  return (
    <div className="container p-4 mt-4">
      {FlagshipEvents?.map((details, index) => {
        return <Card data={details} key={index} />;
      })}
    </div>
  );
}

export default FlagshipEventCardsLayout;
