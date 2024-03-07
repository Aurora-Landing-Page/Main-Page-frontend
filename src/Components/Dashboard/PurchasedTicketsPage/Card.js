import { useState } from "react";

function Card({ data }) {
  return (
    <>
      <button className="focus:outline-none m-0 p-4" onClick={() => {}}>
        <div className=" max-w-xs w-64 h-64 rounded-lg overflow-hidden border bg-opacity-10">
          <div style={{ width: "auto", height: "auto" }}>
            <div style={{ width: "auto", height: "auto" }}>
              <img
                className="w-full h-56 object-cover"
                src={data?.Image}
                alt="event"
              />
            </div>
          </div>
          <div className="bottom-0 h-full w-full items-center  bg-black text-white">
            <h1 className="text-xl font-bold">{data?.Title}</h1>
          </div>
        </div>
      </button>
    </>
  );
}

export default Card;