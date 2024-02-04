import events from "../eventData";
import Card from "./Card";

function EventCardsLayout() {

  return (
    <>
      <div className=" mt-4 flex flex-col" >
        <h3 style={{
          display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "900",
          marginLeft: "-25%",
        }}  >Le Arte Fiesta</h3>
        <div className=" mt-2 flex flex-col ml-[-10%] sm:ml-0 sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:gap-x-16 pt-6 sm:pt-[25vh] lg:pt-6 mr-[10%] lg:mr-0" >
          {events?.map((details, index) => {
            return (details.Category == "La Arte Fiesta" && < Card data={details} key={index} className="flex justify-center" />)
          })}
        </div>

        <h3 style={{
          display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "900",
          marginLeft: "-25%"
        }} className=" mt-4 " >Step Up</h3>
        <div className=" mt-2 flex flex-col  ml-[-10%] sm:ml-0  sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:gap-x-16 pt-6 sm:pt-[25vh] lg:pt-6 mr-[10%] lg:mr-0">



          {events?.map((details, index) => {
            return (details.Category == "Step-up" && < Card data={details} key={index} className="flex justify-center" />)
          })}
        </div>

        <h3 style={{
          display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "900",
          marginLeft: "-25%"
        }} className=" mt-4 " >Eumelia</h3>
        <div className=" mt-2 flex flex-col  ml-[-10%] sm:ml-0  sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:gap-x-16 pt-6 sm:pt-[25vh] lg:pt-6 mr-[10%] lg:mr-0">



          {events?.map((details, index) => {
            return (details.Category == "Eumelia" && < Card data={details} key={index} className="flex justify-center" />)
          })}
        </div>

        <h3 style={{
          display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "900",
          marginLeft: "-25%"
        }} className=" mt-4 " >Literary arts</h3>
        <div className=" mt-2 flex flex-col  ml-[-10%] sm:ml-0  sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:gap-x-16 pt-6 sm:pt-[25vh] lg:pt-6 mr-[10%] lg:mr-0">

          {events?.map((details, index) => {
            return (details.Category == "Literary_SpeakingArts" && < Card data={details} key={index} className="flex justify-center" />)
          })}
        </div>

        <h3 style={{
          display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "900",
          marginLeft: "-25%",
        }}  >The Pikture</h3>
        <div className=" mt-2 flex flex-col ml-[-10%] sm:ml-0 sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:gap-x-16 pt-6 sm:pt-[25vh] lg:pt-6 mr-[10%] lg:mr-0" >
          {events?.map((details, index) => {
            return (details.Category == "ThePikture" && < Card data={details} key={index} className="flex justify-center" />)
          })}
        </div>

        <h3 style={{
          display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "900",
          marginLeft: "-25%"
        }} className=" mt-4 " >Rang Manch</h3>
        <div className=" mt-2 flex flex-col  ml-[-10%] sm:ml-0  sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:gap-x-16 pt-6 sm:pt-[25vh] lg:pt-6 mr-[10%] lg:mr-0">



          {events?.map((details, index) => {
            return (details.Category == "RangManch" && < Card data={details} key={index} className="flex justify-center" />)
          })}
        </div>


        <h3 style={{
          display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "900",
          marginLeft: "-25%"
        }} className=" mt-4 " >Other Events</h3>
        <div className=" mt-2 flex flex-col  ml-[-10%] sm:ml-0  sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:gap-x-16 pt-6 sm:pt-[25vh] lg:pt-6 mr-[10%] lg:mr-0">
          {events?.map((details, index) => {
            return (details.Category == "Others" && < Card data={details} key={index} className="flex justify-center" />)
          })}
        </div>

      </div >

    </>
  );
}

export default EventCardsLayout;