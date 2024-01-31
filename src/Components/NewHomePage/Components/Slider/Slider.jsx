import React, { useState, useEffect } from "react";
import "./SliderStyle.css";
import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";
import img4 from "./image/img4.jpg";
import img5 from "./image/img5.jpg";
import Footer from "../compound/Footer/Footer";
// import Layout from './layouts/Layout';

const Slider = () => {
  const [timeRunning, setTimeRunning] = useState(3000);
  const [timeAutoNext, setTimeAutoNext] = useState(7000);

  useEffect(() => {
    const nextDom = document.getElementById("next");
    const prevDom = document.getElementById("prev");
    const carouselDom = document.querySelector(".carousel");
    const SliderDom = carouselDom.querySelector(".carousel .list");
    const thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
    const timeDom = document.querySelector(".carousel .time");

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    let runTimeOut = setTimeout(() => {
      // Handle timeout logic
      console.log("Timeout logic here");
    }, timeRunning);

    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    nextDom.onclick = () => showSlider("next");
    prevDom.onclick = () => showSlider("prev");

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, [timeRunning, timeAutoNext]);

  const showSlider = (type) => {
    const carouselDom = document.querySelector(".carousel");
    const SliderDom = carouselDom.querySelector(".carousel .list");
    const thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
    const thumbnailItemsDom = document.querySelectorAll(
      ".carousel .thumbnail .item"
    );

    const SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");

    let runTimeOut;
    let runNextAuto;

    if (type === "next") {
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom.classList.add("next");
    } else {
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(
        thumbnailItemsDom[thumbnailItemsDom.length - 1]
      );
      carouselDom.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove("next");
      carouselDom.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      // Assuming there is a 'next' button in your component
      const nextButton = document.getElementById("next");
      if (nextButton) nextButton?.click();
    }, timeAutoNext);
  };

  return (
    <>
      {/* <Layout/> */}
      <div>
        <div className="Heading_Slider">Previously At Aurora</div>
        <div className="carousel">
          <div className="list">
            <div className="item">
              <img src={img1} />
              <div className="content">
                <div className="author">AURORA</div>
                <div className="title">Indian Ocean</div>
                <div className="topic">Band</div>
                <div className="des">
                  Embark on a musical voyage as the legendary band Indian Ocean
                  takes center stage, weaving a tapestry of cultural rhythms and
                  soulful melodies that resonate with the very heartbeat of our
                  fest - a symphony of memories to last a lifetime.
                </div>
                <div className="buttons">
                  <a className="button" href="/events">
                    <span
                      style={{ color: "#7808d0" }}
                      className="button__icon-wrapper"
                    >
                      <svg
                        width="10"
                        className="button__icon-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 15"
                      >
                        <path
                          fill="currentColor"
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        ></path>
                      </svg>

                      <svg
                        className="button__icon-svg  button__icon-svg--copy"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        fill="none"
                        viewBox="0 0 14 15"
                      >
                        <path
                          fill="currentColor"
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        ></path>
                      </svg>
                    </span>
                    <a style={{ color: "white" }}>Explore</a>
                  </a>
                </div>
              </div>
            </div>

            <div className="item">
              <img src={img2} />
              <div className="content">
                <div className="author">AURORA</div>
                <div className="title">DJ AceAxe</div>
                <div className="topic">DJ Night</div>
                <div className="des">
                  Navigate the sonic realms with DJ AceAxe, where beats become a
                  language and the dance floor transforms into a euphoric
                  landscape. His electrifying mix transcended the ordinary,
                  turning our fest into a pulsating haven of rhythm and beats.
                </div>
                <div className="buttons">
                  <a className="button" href="/events">
                    <span
                      style={{ color: "#7808d0" }}
                      className="button__icon-wrapper"
                    >
                      <svg
                        width="10"
                        className="button__icon-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 15"
                      >
                        <path
                          fill="currentColor"
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        ></path>
                      </svg>

                      <svg
                        className="button__icon-svg  button__icon-svg--copy"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        fill="none"
                        viewBox="0 0 14 15"
                      >
                        <path
                          fill="currentColor"
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        ></path>
                      </svg>
                    </span>
                    <a style={{ color: "white" }}>Explore</a>
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={img3} />
              <div className="content">
                <div className="author">AURORA</div>
                <div className="title">Mohit Chauhan</div>
                <div className="topic">Celebrity Night</div>
                <div className="des">
                  Mohit Chauhan's voice, a symphony of emotions, painted the
                  canvas of our fest with hues of love, passion, and nostalgia,
                  creating a musical masterpiece that resonated with every
                  heart.
                </div>
                <div className="buttons">
                  <a className="button" href="/events">
                    <span
                      style={{ color: "#7808d0" }}
                      className="button__icon-wrapper"
                    >
                      <svg
                        width="10"
                        className="button__icon-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 15"
                      >
                        <path
                          fill="currentColor"
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        ></path>
                      </svg>

                      <svg
                        className="button__icon-svg  button__icon-svg--copy"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        fill="none"
                        viewBox="0 0 14 15"
                      >
                        <path
                          fill="currentColor"
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        ></path>
                      </svg>
                    </span>
                    <a style={{ color: "white" }}>Explore</a>
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={img4} />
              <div className="content">
                <div className="author">AURORA</div>
                <div className="title">Indian Ocean</div>
                <div className="topic">Band Performance</div>
                <div className="des">
                  Diverse genres harmonized on one stage, creating a musical
                  mosaic that celebrated the rich tapestry of sounds. The band's
                  performance was a testament to the unity found in musical
                  diversity.
                </div>
                <div className="buttons">
                  <a className="button" href="/events">
                    <span
                      style={{ color: "#7808d0" }}
                      className="button__icon-wrapper"
                    >
                      <svg
                        width="10"
                        className="button__icon-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 15"
                      >
                        <path
                          fill="currentColor"
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        ></path>
                      </svg>

                      <svg
                        className="button__icon-svg  button__icon-svg--copy"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        fill="none"
                        viewBox="0 0 14 15"
                      >
                        <path
                          fill="currentColor"
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        ></path>
                      </svg>
                    </span>
                    <a style={{ color: "white" }}>Explore</a>
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={img5} />
              <div className="content">
                <div className="author">AURORA</div>
                <div className="title">Olly Esse</div>
                <div className="topic">EDM Night</div>
                <div className="des">
                  Underneath the starlit sky, immerse yourself in the magic of
                  bass drops and dance moves. Our DJ night promises a cosmic
                  journey through beats that reverberate with pure energy.
                </div>
                <div className="buttons">
                  <a className="button" href="/events">
                    <span
                      style={{ color: "#7808d0" }}
                      className="button__icon-wrapper"
                    >
                      <svg
                        width="10"
                        className="button__icon-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 15"
                      >
                        <path
                          fill="currentColor"
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        ></path>
                      </svg>

                      <svg
                        className="button__icon-svg  button__icon-svg--copy"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        fill="none"
                        viewBox="0 0 14 15"
                      >
                        <path
                          fill="currentColor"
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        ></path>
                      </svg>
                    </span>
                    <a style={{ color: "white" }}>Explore</a>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="thumbnail">
            <div className="item">
              <img src={img1} />
              <div className="content">
                <div className="title"></div>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img src={img2} />
              <div className="content">
                <div className="title"></div>
              </div>
            </div>
            <div className="item">
              <img src={img3} />
              <div className="content">
                <div className="title"></div>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img src={img4} />
              <div className="content">
                <div className="title"></div>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img src={img5} />
              <div className="content">
                <div className="title"></div>
              </div>
            </div>
          </div>

          <div className="arrows">
            <button
              id="prev"
              style={{
                display: "none",
                backgroundColor: "white",
                color: "black",
              }}
            >
              {" "}
              ←{" "}
            </button>
            <button
              id="next"
              style={{
                display: "none",
                backgroundColor: "white",
                color: "black",
              }}
            >
              {" "}
              →{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
