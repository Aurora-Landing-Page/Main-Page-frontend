import { useEffect, useLayoutEffect, useState } from "react";
import "./Signup.css";
import axios from "axios";
import Loader from "../AlertAndLoader/Loader";
import Toast from "../AlertAndLoader/Toast";
import IconImage from "./images/o.png";
import data from "./data.js";
import Alert from "../AlertAndLoader/Alert.jsx";
import Navbar from '../Navbar/Navbar';


const Signup = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    gender: "",
    college: "",
    city: "",
    dob: "2000-01-01",  // 2024-01-06T12:34:56.789Z
    password: "",
    referralCode: ""
  };

  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [messege, setMessege] = useState("");
  const [FormData, setFormData] = useState(initialFormData);

  const handleToastClose = () => {
    setMessege("");
    setShowToast(false);
  };

  const handleAlertClose = () => {
    setMessege("");
    setShowAlert(false);
  };
  const backStep = (e) => {
    e.preventDefault();

    setShowStep1(true);
    setShowStep2(false);

  }

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;

    if (name == "dob") {
      const year = parseInt(value.substring(0, 4), 10);

      if (year < 1985 || year > 2010) {
        setMessege("Enter a valid date of birth !");
        setShowAlert(true);
      }
      else {
        setFormData({ ...FormData, [name]: value });
        console.log(FormData);
      }
    }
    else {

      setFormData({ ...FormData, [name]: value });
      console.log(FormData);

    }


    setFormData({ ...FormData, [name]: value });
    console.log(FormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!FormData.phone) {
      setMessege("Enter your phone number !");
      setShowAlert(true);
      return;

    }
    if (FormData.phone.at(0) == String(0)) {
      setMessege("Phone number should not start with 0 !");
      setShowAlert(true);

      return;
    }
    if (FormData.phone.length != 10) {
      setMessege("Enter a valid phone number !");
      setShowAlert(true);
      return;
    }


    if (!FormData.dob) {
      setMessege("Enter your date of birth !");
      setShowAlert(true);
      return;
    }
    if (!FormData.gender) {
      setMessege("Enter your Gender !");
      setShowAlert(true);
      return;
    }
    if (!FormData.college) {
      setMessege("Enter your college name !");
      setShowAlert(true);
      return;
    }
    if (!FormData.city) {
      setMessege("Enter your city name !");
      setShowAlert(true);
      return;
    }

    let NewDate = new Date(FormData.dob);
    NewDate = NewDate.toISOString();

    setFormData({ ...FormData, ["dob"]: NewDate });
    console.log(FormData);

    try {
      const response = await axios.post(
        "http://localhost:3001/registerUser",
        FormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);

      setFormData(initialFormData);
      setShowStep1(true);
      setShowStep2(false);

      setMessege("Registraion Successful");
      setShowToast(true);
    } catch (e) {
      console.log(e);
      setMessege("An Error occured");
      setShowToast(true);
    }
  };
  const [showStep1, setShowStep1] = useState(true);
  const [showStep2, setShowStep2] = useState(false);
  useEffect(() => {
    setShowStep1(true);
    setShowStep2(false);
  }, []);
  const nextStep = (e) => {
    e.preventDefault();

    if (!FormData.name) {
      setMessege("Enter your name !");
      setShowAlert(true);
      return;
    }
    if (!FormData.email) {
      setMessege("Enter your email !");
      setShowAlert(true);
      return;
    }
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

    if (!regexExp.test(FormData.email)) {
      setMessege("Enter a valid email !");
      setShowAlert(true);
      return;
    }

    if (!FormData.password) {
      setMessege("Enter your password !");
      setShowAlert(true);
      return;
    }
    if (FormData.password.length < 4 || FormData.password.length > 19) {
      setMessege("Password length should be between 4 and 19 !");
      setShowAlert(true);
      return;
    }

    setShowStep1(false);
    setShowStep2(true);
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {showToast && (
        <Toast message={messege} duration={3000} onClose={handleToastClose} />
      )}
      {showAlert && (
        <Alert message={messege} duration={3000} onClose={handleAlertClose} />
      )}
      {loading ? (
        <Loader />
      ) : (
        <div className="signup">
          {/* <Navbar /> */}

          <div
            id="step1"
            className="signup1"
            style={{ display: showStep1 ? "flex" : "none" }}
          >
            <div>
              <img src="" alt="" />
              <img className="signup_logo" src="images/aurora.jpg" alt="" />
            </div>
            <form action="">
              <div className="signup1_box">
                <h2 className="signup1_h2">Register</h2>
                <div className="signup1_cnt">
                  {/* <div className="signup1_cnt1">1</div> */}

                  <div id="signup1_active" class="signup1_cnt1">
                    <img
                      src={IconImage}
                      alt=""
                      style={{
                        width: "100%",
                        height: "40px",
                        position: "absolute",
                        top: "-6%",
                        left: "0%",
                      }}
                    />
                  </div>
                  <div className="signup1_line"></div>
                  <div className="signup1_cnt2">2</div>
                </div>
                <div className="signup1_user-box">
                  <input
                    type="text"
                    autoComplete="off"
                    className="signup1_input"
                    name="name"
                    value={FormData.name}
                    onChange={handleChange}
                    required
                  />
                  <label className="signup1_input-txt" htmlFor="text">
                    Name
                  </label>
                </div>
                <div className="signup1_user-box">
                  <input
                    type="text"
                    autoComplete="off"
                    className="signup1_input"
                    name="email"
                    value={FormData.email}
                    onChange={handleChange}
                    required
                  />
                  <label className="signup1_input-txt" htmlFor="email">
                    Email
                  </label>
                </div>
                <div className="signup1_user-box" style={{ position: "relative", top: "18px" }}>
                  <input
                    id="date"
                    className="signup1_input"
                    placeholder=""
                    type="date"
                    value={FormData.dob}
                    onChange={handleChange}
                    name="dob"
                    autoComplete="off"
                    required=""
                    endIc
                  />
                  <label className="signup1_input-txt" htmlFor="date" >
                    Date of Birth
                  </label>
                </div>
                <div className="signup1_user-box">
                  <input
                    type="password"
                    className="signup1_input"
                    name="password"
                    value={FormData.password}
                    onChange={handleChange}
                    required
                  />
                  <label className="signup1_input-txt" htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="signup1_button">
                  <button onClick={nextStep} className="signup1_btn">
                    <a>Next</a>
                  </button>
                </div>
                <hr />
                <div className="signup1_already"> Welcome To Aurora</div>
                {/* <div className="signup1_button">
                  <a className="signup1_ln" href={"/login"}>
                    Login
                  </a>
                </div> */}
              </div>
            </form>
          </div>
          <div
            id="step2"
            className="signup2"
            style={{ display: showStep2 ? "flex" : "none" }}
          >
            <div>
              <img src="" alt="" />
              <img
                className="signup_logo"
                src="images/aurora.jpg"
                alt=""
              />{" "}
            </div>
            <form action="">
              <div className="signup2_box">
                <h2 className="signup2_h2">Register</h2>
                <div className="signup2_cnt">
                  <div className="signup2_cnt1">1</div>
                  <div className="signup2_line"></div>
                  {/* <div className="signup2_cnt2">2</div> */}
                  <div id="signup2_active" class="signup2_cnt2">
                    <img
                      src={IconImage}
                      alt=""
                      style={{
                        width: "100%",
                        height: "40px",
                        position: "absolute",
                        top: "-6%",
                        left: "0%",
                      }}
                    />
                  </div>
                </div>
                <div className="signup2_user-box">
                  <input
                    list="collegeList"
                    className="signup2_input clgTxt"
                    name="college"
                    value={FormData.college}
                    onChange={handleChange}
                    required
                  />
                  <datalist id="collegeList">
                    {data.map((item, index) => {
                      return (
                        <option className="option" key={index}>
                          {item.value}
                        </option>
                      );
                    })}
                  </datalist>
                  <label className="signup2_input-txt clgLbl" htmlFor="text">
                    Full College / Institute Name
                  </label>
                </div>
                <div className="signup2_user-box">
                  {/* <span className="signup2_fa-solid ">
                <FaUser />
              </span> */}
                  <input
                    type="text"
                    className="signup2_input"
                    name="phone"
                    value={FormData.phone}
                    onChange={handleChange}
                    required
                  />
                  <label className="signup2_input-txt" htmlFor="text">
                    Phone Number
                  </label>
                </div>
                <div className="signup2_user-box">
                  <input
                    type="text"
                    className="signup2_input"
                    name="city"
                    value={FormData.city}
                    onChange={handleChange}
                    required
                  />
                  <label className="signup2_input-txt" htmlFor="text">
                    City
                  </label>
                </div>
                <div className="signup2_user-box">
                  <input type="text" className="signup2_input" required />
                  <label className="signup2_input-txt" htmlFor="text">
                    State
                  </label>
                </div>
                <div className="signup2_user-box">
                  <input type="text" name="referralCode"
                    value={FormData.referralCode}
                    onChange={handleChange} className="signup2_input" required />
                  <label className="signup2_input-txt" htmlFor="text">
                    Referral Code
                  </label>
                </div>
                <div className="signup2_gender">
                  <p className="signup2_gndr" htmlFor="input">
                    Gender
                  </p>
                  <input
                    type="radio"
                    className="signup2_input"
                    value="Female"
                    onChange={handleChange}
                    name="gender"
                    required
                  />
                  <label className="signup2_input-gender" htmlFor="gender">
                    Female
                  </label>
                  <input
                    type="radio"
                    className="signup2_input"
                    value="Male"
                    onChange={handleChange}
                    name="gender"
                    required
                  />
                  <label className="signup2_input-gender" htmlFor="gender">
                    Male
                  </label>
                </div>
                <div className="signup2_button">
                  <button className="signup2_btn" onClick={backStep} style={{ margin: "3%" }}>
                    <a>Back</a>
                  </button>
                  <button className="signup2_btn" onClick={handleSubmit}>
                    <a>Submit</a>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;