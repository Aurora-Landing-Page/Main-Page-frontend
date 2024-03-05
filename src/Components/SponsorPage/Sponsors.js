import React from "react";
import "./Sponsors.css";
import cocaImg from "../../assets/cocacola.60789f99.png";
import img2 from "../../assets/blu-lounge.f54b1da0.jpg";
import Navbar from "../Navbar/Navbar";
import Loader from "../AlertAndLoader/Loader";
import { useEffect, useState } from "react";

const Sponsors = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="body1">
          <Navbar />
          <div className="sponsors-marketHead">
            <h2>Marketing Heads</h2>
            <div className="sponsors-names">
              <div className="sponsors-Head">
                <h3>Divyansh Pathak</h3>
                {/* <a href="mailto:abc@aurorafest.org">abc@aurorafest.org</a> */}
                <a href="tel:+91-9560421964">+91-9560421964</a>
              </div>
              <div className="sponsors-Head">
                <h3>Sumit Verma</h3>
                {/* <a href="mailto:abc@aurorafest.org">abc@aurorafest.org</a> */}
                <a href="tel:+91-7272099495">+91-7272099495</a>
              </div>
            </div>
            <a  href="mailto:accounts@aurorafest.in">accounts@aurorafest.in</a>

          </div>

          <div className="sponsors-sponContainer">
            <div className="sponsors-innerContainer1">
              <h1>PREVIOUS SPONSORS</h1>
              <div className="sponsors-titleSpon">
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img
                        src={require("./img/cocacola.60789f99.png")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>Coca Cola</h4>
                    <span>Title Sponsor</span>
                  </div>
                </div>
              </div>
              <div className="sponsors-restSpon">
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img
                        src={require("./img/tribevibe.3e919435.png")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>TribeVibe</h4>
                    <span>Festival Partner</span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img
                        src={require("./img/blu-lounge.f54b1da0.jpg")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>Blu Lounge</h4>
                    <span>Flagship Event Sponsor - Corna </span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img
                        src={require("./img/yono-sbi.30ffda32.png")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>YONO - SBI</h4>
                    <span>Flagship Event Sponsor - MnM </span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img src={require("./img/sics.4420f55c.jpg")} alt="" />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>SICS </h4>
                    <span>Event Sponsor - StepUp </span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img
                        src={require("./img/fastrack.3cf395af.png")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>Fastrack</h4>
                    <span>Title Sponsor - Parivesh </span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img
                        src={require("./img/jawed-habib.d63228a3.png")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>Jawed Habib </h4>
                    <span>Flagship Event Co-Sponsor - Parivesh </span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img src={require("./img/bigfm.90230eb8.png")} alt="" />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>Big FM </h4>
                    <span>Event Sponsor - Morning Radio </span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img src={require("./img/inox.d5254ef0.png")} alt="" />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>INOX</h4>
                    <span>Cinema Partner </span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img src={require("./img/pnb.eb2acf62.png")} alt="" />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>PNB</h4>
                    <span>Banking Partner</span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img src={require("./img/lensfit.893df903.png")} alt="" />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>Lensfit</h4>
                    <span>Vision Partner</span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img
                        src={require("./img/sehatone.a1081264.png")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>SehatOne </h4>
                    <span>HealthCare Partner</span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img src={require("./img/dalmia.2cf8a5a7.png")} alt="" />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>Dalmia Group</h4>
                    <span>Foundation Partner</span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img src={require("./img/bigfm.90230eb8.png")} alt="" />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>Big FM</h4>
                    <span>Radio Partner</span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img src={require("./img/boi.dd87a364.png")} alt="" />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>BOI</h4>
                    <span>Banking Partner</span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img src={require("./img/clarks.d705d471.jpg")} alt="" />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>Clarks</h4>
                    <span>Stay Partner</span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img
                        src={require("./img/india-khabar.7b9841b3.jpeg")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>India Khabar</h4>
                    <span>Streaming Partner</span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img
                        src={require("./img/nisha-dance.e75dd42b.jpg")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>Nisha Dance Academy</h4>
                    <span>Event Co-Sponsor - Step Up</span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img
                        src={require("./img/eurofins.71c92ef1.jpg")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>Eurofins Clinical Genetics</h4>
                    <span>Sponsor</span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img src={require("./img/atkt.605e2d33.png")} alt="" />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>ATKT</h4>
                    <span>Sponsor</span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img src={require("./img/o-genie.6db32bfd.jpg")} alt="" />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>O Genie</h4>
                    <span>Sponsor</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="sponsors-innerContainer2">
              <h1>SOCIAL MEDIA PARTNERS</h1>
              <div className="sponsors-restSpon">
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img src={require("./img/punhub.8f11d963.png")} alt="" />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>PunHub </h4>
                    <span>Social Media Partner </span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img
                        src={require("./img/gwaliorMP.865ea6ad.png")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>GwaliorMPIndia </h4>
                    <span>Social Media Partner </span>
                  </div>
                </div>
                <div className="sponsors-sponCard">
                  <div className="sponsors-imgContain">
                    <a href="">
                      <img
                        src={require("./img/city-vibes.e2259393.png")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="sponsors-sponInfo">
                    <h4>The City Vibes Gwalior </h4>
                    <span>Social Media Partner </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sponsors;
