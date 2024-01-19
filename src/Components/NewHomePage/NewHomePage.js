import { useState } from "react";
import "./NewHomePage.css";
import Layout from "./Components/layouts/Layout";
import Slider from "./Components/Slider/Slider";
import Footer from "./Components/compound/Footer/Footer";

function NewHomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="overflow-x-hidden" >
      <Layout />
      <Slider />
      <Footer />
    </div>
  );
}

export default NewHomePage;
