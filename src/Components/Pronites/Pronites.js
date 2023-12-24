import React from 'react';
import { details,check } from './data';
import ProniteCard from './ProniteCard';
import './Pronites.css'
import { useState,useEffect } from 'react';

const Pronites = () => {
    let screenWidth = window.innerWidth;
    let [showcard,setShowCard] = useState(2);
    
    useEffect(() => {
      check();
      const handleResize = () => {
        check();
      }
    
      window.addEventListener('resize', handleResize);
      
      document.querySelector('.app1').style.cssText=`background-image:url("${details[showcard-1].bgurl}")`
      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
      }
  
    }, [showcard])
    
    const clickHandler = (val)=>{
     setShowCard(showCard =>{
      if(showCard+val <= 0){
        return 3;
      }
      else if(showCard+val >3){
        return 1;
      }
      else{
        return showCard + val;
      }
     })
     
    }
  return (

    <div className="app1">
    <button className='button1' onClick={()=>{
    clickHandler(1)
    }}>
    <i className="fa-solid fa-angle-left" ></i>

    </button>
    {details.map((item,index) => {
    return(<ProniteCard key={index} states={item} showCard={showcard}></ProniteCard>)
    })}
    <button className='button2' onClick={()=>{
    clickHandler(-1)
    }}>
    <i className="fa-solid fa-angle-right" ></i>

    </button>
    </div>


  )
}

export default Pronites
