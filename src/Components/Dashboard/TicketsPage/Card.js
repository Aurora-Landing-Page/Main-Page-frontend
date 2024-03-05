function Card({ data }) {
  console.log("Data: ", data);

  return (
    <div className=" max-w-xs w-48 h-48 rounded-lg overflow-hidden border border-yellow-200 bg-orange-200 bg-opacity-10">
      <div style={{ width: 192, height: "auto" }}>
        <div style={{ width: 192, height: "auto" }}>
          <img
            className="w-full h-full object-cover"
            src={data?.Image}
            alt="event"
          />
          <div className="p-4">
            <h3 className="text-white text-xl font-semibold">{data?.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
