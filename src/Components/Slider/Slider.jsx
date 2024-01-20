import React, { useState, useEffect } from 'react';
import "./SliderStyle.css"
import img1 from "./image/img1.jpg"
import img2 from "./image/img2.jpg"
import img3 from "./image/img3.jpg"
import img4 from "./image/img4.jpg"
import img5 from "./image/img5.jpg"
// import Layout from './layouts/Layout';

const Slider = () => {
  
    const [timeRunning, setTimeRunning] = useState(3000);
    const [timeAutoNext, setTimeAutoNext] = useState(7000);
  
    useEffect(() => {
      const nextDom = document.getElementById('next');
      const prevDom = document.getElementById('prev');
      const carouselDom = document.querySelector('.carousel');
      const SliderDom = carouselDom.querySelector('.carousel .list');
      const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
      const timeDom = document.querySelector('.carousel .time');
  
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
  
      let runTimeOut = setTimeout(() => {
        // Handle timeout logic
        console.log('Timeout logic here');
      }, timeRunning);
  
      let runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
  
      nextDom.onclick = () => showSlider('next');
      prevDom.onclick = () => showSlider('prev');
  
      return () => {
        clearTimeout(runTimeOut);
        clearTimeout(runNextAuto);
      };
    }, [timeRunning, timeAutoNext]);
  
    const showSlider = (type) => {
      const carouselDom = document.querySelector('.carousel');
      const SliderDom = carouselDom.querySelector('.carousel .list');
      const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
      const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
  
      const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
  
      let runTimeOut;
      let runNextAuto;
  
      if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }
  
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);
  
      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        // Assuming there is a 'next' button in your component
        const nextButton = document.getElementById('next');
        nextButton.click();
      }, timeAutoNext);
    };
  
    return (
        <>
      {/* <Layout/> */}
        <div className="carousel">
      
        <div className="list">

            <div className="item">
                <img src={img1}/>
                <div className="content">
                    <div className="author">AURORA 2k24</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <a 
                        style={{color: "#7808d0"}}
                        className="button" href="#">
                            <span className="button__icon-wrapper">
                                <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>
                                
                                <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>
                            </span>
                            Explore
                        </a>
                       
                    </div>
                </div>
            </div>

            <div className="item">
                <img src={img2}/>
                <div className="content">
                    <div className="author">AURORA 2k24</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div> 
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
        
                    </div>
                    <div className="buttons">
                        <a 
                        style={{color: "#7808d0"}}
                        className="button" href="#">
                            <span className="button__icon-wrapper">
                                <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>
                                
                                <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>
                            </span>
                            Explore
                        </a>
                       
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img3}/>
                <div className="content">
                    <div className="author">AURORA 2k24</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons" >
                        <a 
                        style={{color: "#7808d0"}}
                        className="button" href="#">
                            <span className="button__icon-wrapper">
                                <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>
                                
                                <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>
                            </span>
                            Explore
                        </a>
                    
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img4}/>
                <div className="content">
                    <div className="author">AURORA 2k24</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <a
                        style={{color: "#7808d0"}} 
                       

                         className="button" href="#">
                            <span className="button__icon-wrapper">
                                <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>
                                
                                <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>
                            </span>
                           Explore
                        </a>
                       
                    </div>
                </div>
            </div>
            <div className="item">
            <img src={img5}/>
                <div className="content">
                    <div className="author">AURORA 2k24</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <a 
                       
                        style={{color: "#7808d0"}}
                        className="button" href="#">
                            <span className="button__icon-wrapper">
                                <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>
                                
                                <svg className="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                                </svg>
                            </span>
                            Explore
                        </a>
                   
                    </div>
                </div>
            </div>
        </div>
      
        <div className="thumbnail">
            <div className="item">
                <img src={img1}/>
                <div className="content">
                    <div className="title">
                      
                    </div>
                    <div className="description">
                        
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img2}/>
                <div className="content">
                    <div className="title">
                        
                    </div>
                 
                </div>
            </div>
            <div className="item">
                <img src={img3}/>
                <div className="content">
                    <div className="title">
                     
                    </div>
                    <div className="description">
                      
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img4}/>
                <div className="content">
                    <div className="title">
                    
                    </div>
                    <div className="description">
                  
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img5}/>
                <div className="content">
                    <div className="title">
                       
                    </div>
                   
                </div>
            </div>
        </div>
  

        <div className="arrows">
            <button id="prev"> ← </button>
            <button id="next"> → </button>
        </div>
       
       
    </div>
    </>
  
    );
}

export default Slider



