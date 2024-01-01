import Navbar from "../Navbar/Navbar";

const EventPage = () => {
  const myStyle = {
    height: '100vh',
  };
    return (
      <div style={myStyle}>
      <Navbar />

        <iframe
          title="ExternalHTML"
          src="./EventPage/index4.html"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
  
    );
  };
  
  export default EventPage;
  