import { useState } from "react";
import { EventModal } from "../EventModal";

function Card({ data }) {
  const [modapOpen, setModapOpen] = useState(false);

  return (
    <>
      <EventModal isOpen={modapOpen} setIsOpen={setModapOpen} data={data} />
      <div></div>
      <button
        className="focus:outline-none m-0 p-4"
        onClick={() => {
          setModapOpen(true);
        }}
      >
        <div className=" max-w-xs w-64 h-64 rounded-lg overflow-hidden border bg-opacity-10">
          <div >
            <div>
              <img
                className="w-full h-56 object-cover"
                src={data?.Image}
                alt="event"
              />
            </div>
          </div>
          <div className="bottom-0 h-full w-full items-center  bg-black text-white">
            <h1 className="text-xl font-bold">{data?.Title} </h1>
          </div>
        </div>
      </button>
    </>
  )
}

export default Card;