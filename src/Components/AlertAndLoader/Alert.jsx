import React, { useEffect, useState } from 'react';
import './Alert.css';

const Alert = ({ message, duration = 3000, onClose }) => {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const showToast = () => {
      console.log("showAlert called");
      setIsVisible(true);

      // Hide the toast after 'duration' milliseconds
      setTimeout(() => {
        setIsVisible(false);
        onClose(); // Close the toast after animation
      }, duration);
    };

    const closeToast = () => {
      setIsVisible(false);
      onClose(); // Close the toast on button click
    };

    // Ensure that showToast is called
    showToast();

    // Cleanup event listeners on component unmount
    const closeButton = document.getElementById("cyber-alert-close");
    if (closeButton) {
      closeButton.addEventListener("click", closeToast);
    }

    return () => {
      if (closeButton) {
        closeButton.removeEventListener("click", closeToast);
      }
    };
  }, [duration, onClose]);




  return (
    <>
      {isVisible && (
        <div>
          <div id="cyber-toast-container">
            <div id="cyber-alert-box">
              <span id="cyber-alert-message">{message}</span>
              <button id="cyber-alert-close">×</button>
            </div>
          </div>

        </div>
      )}
    </>
  )
}


export default Alert;
