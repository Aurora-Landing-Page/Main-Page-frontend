import { useEffect,useState } from "react"
import './Signup.css'
import axios from "axios";
import Loader from "../AlertAndLoader/Loader";
import Toast from "../AlertAndLoader/Toast";
const Signup = () => {
      const initialFormData = {
        name: "",
        email: "",
        phone: "",
        gender: "",
        college: "",
        city: "",
        dob: "2023-12-12T15:30:00Z",
        password: "",
      };

      const [FormData,setFormData] = useState(initialFormData);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...FormData, [name]: value });
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://aurora-nokc.onrender.com/register',FormData,{
            "headers": {
              "Content-Type": "application/json"
            }
          })
          console.log(response.data);
          <Toast>Regestraion Successful</Toast>;
        } catch (e) {
          console.log(e);
          <Toast>An Error occured</Toast>;
        }
      };
      const [showStep1, setShowStep1] = useState(true);
      const [showStep2, setShowStep2] = useState(false);
      useEffect(() => {
        setShowStep1(true);
        setShowStep2(false);
      },[]); 
          const nextStep = (e) => {
            e.preventDefault()
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
      {loading ? (
        <Loader />
      ) : (
        <div className="signup">
          <div
            id="step1"
            className="signup1"
            style={{ display: showStep1 ? "flex" : "none" }}
          >
            <div>
              <img src="" alt="" />
              <img className="signup_logo" src="images/auroraa.png" alt="" />
            </div>
            <form action="">
              <div className="signup1_box">
                <h2 className="signup1_h2">Register</h2>
                <div className="signup1_cnt">
                  {/* <div className="signup1_cnt1">1</div> */}
                  
                    <div id="signup1_active" class="signup1_cnt1"><img src="images/o.png" alt=""/></div>
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
                <div className="signup1_already">Already Registered?</div>
                <div className="signup1_button">
                  <a className="signup1_ln" href={"/login"}>
                    Login
                  </a>
                </div>
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
                src="images/auroraa.png"
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
                    <div id="signup2_active" class="signup2_cnt2"><img src="images/o.png" alt=""/></div>
                </div>
                <div className="signup2_user-box">
                  <input
                    type="text"
                    className="signup2_input clgTxt"
                    name="college"
                    value={FormData.college}
                    onChange={handleChange}
                    required
                  />
                  <label className="signup2_input-txt clgLbl" htmlFor="text">
                    College / Organisation Name
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
                    Contact
                  </label>
                </div>
                <div className="signup2_user-box">
                  {/* <span className="signup2_fa-solid">
                <FaLock />
              </span> */}
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
                  {/* <span className="signup2_fa-solid ">
                <FaLock />
              </span> */}
                  <input type="text" className="signup2_input" required />
                  <label className="signup2_input-txt" htmlFor="text">
                    State
                  </label>
                </div>
                <div className="signup2_gender">
                  <p className="signup2_gndr" htmlFor="input">
                    Gender
                  </p>
                  <input
                    type="radio"
                    className="signup2_input"
                    value={FormData.gender}
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
                    name="gender"
                    required
                  />
                  <label className="signup2_input-gender" htmlFor="gender">
                    Male
                  </label>
                </div>
                <div className="signup2_button">
                  <a href="#">
                    <button className="signup2_btn" onClick={handleSubmit}>
                      Submit
                    </button>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup