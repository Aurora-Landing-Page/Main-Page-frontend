import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import Toast from "../AlertAndLoader/Toast";
import Loader from "../AlertAndLoader/Loader";
import Alert from "../AlertAndLoader/Alert";
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
import image from "./images/o.png";
// import { FaArrowTrendUp } from 'react-icons/fa6';
import BACKEND_URL from "../../helper";
// import Navbar from "../Navbar/Navbar";

const Login = () => {
  const navigate = useNavigate();

  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showToast, setShowToast] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [messege, setMessege] = useState("");

  const handleToastClose = () => {
    setMessege("");
    setShowToast(false);
  };

  const handleAlertClose = () => {
    setMessege("");
    setShowAlert(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`${BACKEND_URL}/loginCa`, formData, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          });
      console.log(response.data);
      setMessege("Logged in successfully");
      setShowToast(true);

      navigate("/dashboard");
    } catch (e) {
      setMessege("Invalid Credentials");
      setShowAlert(true);
      console.log(e);
    }
    // setFormData(initialFormData);
  };

  const handleForgetPassword = async () => {
    if(formData.email === "" ){
      setMessege("Please enter your email!");
      setShowAlert(true);
      return;
    }
    setLoading(true);
    
    try {
      const res = await axios.post(
        `${BACKEND_URL}/forgotPassword`,
        { email: formData.email, type: "ca" },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      setLoading(false);
        setMessege("Check your Email for new password!")
        setShowToast(true)
    } catch (e) {
      setLoading(false);
      setMessege("No Account with this email exists, Please register again!");
      setShowAlert(true);
      console.log(e);
    }

    // setFormData(initialFormData);
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    // const loginShowPassword = document.querySelector("#login_show-password");
    // const loginPasswordField = document.querySelector("#login_password");
    // loginShowPassword.addEventListener("click", function () {
    //   const type = loginPasswordField.getAttribute("type") === "password" ? "text" : "password";
    //   loginPasswordField.setAttribute("type", type);
    //   this.classList.toggle("fa-eye");
    //   this.classList.toggle("fa-eye-slash");
    // });
  }, []);

  return (
    <div className="login">
      {showToast && (
        <Toast message={messege} duration={3000} onClose={handleToastClose} />
      )}
      {showAlert && (
        <Alert message={messege} duration={3000} onClose={handleAlertClose} />
      )}
      {loading ? (
        <Loader />
      ) : (
        <div class="login_big-box">
          {/* <Navbar/> */}
          <h1 class="login_welcome">Welcome Back</h1>
          <div class="login_box">
            <form action="submit">
              <h2 class="login_h2">
                L
                <span>
                  <img src={image} alt="" />
                </span>
                gin
              </h2>
              <div class="login_user-box">
                <input
                  type="text"
                  autocomplete="off"
                  class="login_input"
                  onChange={(e) => {
                    formData.email = e.target.value;
                  }}
                  required
                />
                <label class="login_input-txt" for="email">
                  Email
                </label>
              </div>
              <div class="login_user-box login_passwd">
                <input
                  type="password"
                  id="login_password"
                  class="login_input"
                  onChange={(e) => {
                    formData.password = e.target.value;
                  }}
                  required
                />
                <label class="login_input-txt" for="password">
                  Password
                </label>
                {/* <i class="fa fa-eye" id="login_show-password" aria-hidden="true"></i> */}
              </div>
              <div class="login_button">
                <a class="login_a" href="#">
                  <button class="login_btn" onClick={handleSubmit}>
                    Log In
                  </button>
                </a>
              </div>
              <div class="login_link">
                <a href="#">
                  {" "}
                  <p></p>
                </a>
                <a href="#" onClick={handleForgetPassword}>Forget Password</a>
                <hr />
                <p>Not Registered yet?</p>
                <a class="login_a" href="/">
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;