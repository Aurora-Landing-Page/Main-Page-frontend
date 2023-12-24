import { useEffect } from 'react'

const Toast = ({children}) => {
        function showAlert(message) {
          const alertBox = document.getElementById("cyber-alert-box");
          const alertMessage = document.getElementById("cyber-alert-message");
          alertMessage.textContent = message;
          alertBox.style.display = "block";
        }

        function showToast(message, duration = 3000) {
          const toast = document.getElementById("cyber-toast");
          const toastMessage = document.getElementById("cyber-toast-message");
          toastMessage.textContent = message;
          toast.style.opacity = 1;
          toast.style.transform = "translateX(0)";

          // Hide the toast after 'duration' milliseconds
          setTimeout(() => {
            toast.style.opacity = 0;
            toast.style.transform = "translateX(100%)";
          }, duration);
        }

        useEffect(() => {
          document
            .getElementById("cyber-toast-close")
            .addEventListener("click", () => {
              const toast = document.getElementById("cyber-toast");
              toast.style.opacity = 0;
              toast.style.transform = "translateX(100%)";
            });

          document
            .getElementById("cyber-alert-close")
            .addEventListener("click", () => {
              const alertBox = document.getElementById("cyber-alert-box");
              alertBox.style.display = "none";
            });
        }, []);
  return (
    <div>
        <div id="cyber-toast-container">
        <div id="cyber-toast">
            <span id="cyber-toast-message">{children}</span>
            <button id="cyber-toast-close">×</button>
        </div>
    </div>
    </div>
  );
}

export default Toast