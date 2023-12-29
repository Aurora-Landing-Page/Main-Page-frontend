import Navbar from "../Navbar/Navbar";

const Home = () => {
  const myStyle = {
    height: "100vh",
  };
  return (
    <div style={myStyle}>
      <Navbar />
      <iframe
        title="ExternalHTML"
        src="NewHomePage/index5.html"
        width="100%"
        height="100%"
        frameBorder="0"
      />
    </div>
  );
};

export default Home;
