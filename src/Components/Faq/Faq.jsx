import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Loader from "../AlertAndLoader/Loader";
import Navbar from "../Navbar/Navbar";

const Faq = () => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const myStyle = {
    height: '100vh',
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) :
        (
          <div style={myStyle}>
            <Navbar />
            <iframe
              title="ExternalHTML"
              src="./FAQ/index.html"
              width="100%"
              height="100%"
              frameBorder="0"
            />
          </div>

        )
      }
    </div>
  );
}



export default Faq;
