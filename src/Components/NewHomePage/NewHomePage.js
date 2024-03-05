import { useState } from "react";
import "./NewHomePage.css";
import Layout from "./Components/layouts/Layout";
import Slider from "./Components/Slider/Slider";
import Footer from "./Components/compound/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Loader from "../AlertAndLoader/Loader";
import { useEffect } from "react";

function NewHomePage() {
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
        <>
            {loading ? (<Loader />) : (

                <div className="overflow-x-hidden" >
                    <Navbar />
                    <Layout />
                    <Slider />
                    <Footer />
                </div>
            )}
        </>

    );
}

export default NewHomePage;
