import FlagshipEvents from "../FlagshipEventsData";
import Card from "./Card";

function FlagshipEventCardsLayout() {
  return (
    <div className="mt-4 flex flex-col  sm:grid sm:grid-cols-3 lg:grid-cols-4 lg:gap-y-10 gap-y-0 sm:pt-10  lg:gap-x-8 mr-[10%] sm:mr-32  lg:mr-0 ">
      {FlagshipEvents?.map((details, index) => {
        return <Card data={details} key={index} />;
      })}
    </div>
  );
}

export default FlagshipEventCardsLayout;
