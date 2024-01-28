import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Navbar from "./Components/Navbar/Navbar";
import Dash from "./Components/CaDashboard/Dash"
import MainDash from "./Components/CaDashboard/MainDash/MainDash"
import Profile from "./Components/CaDashboard/Profile/Profile"

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Signup />} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path='/schedule' element={<SchedulePage/>}/> */}
        {/* <Route path="/sponsors" element={<Sponsors />} /> */}
        {/* <Route path='/pronites' element={<Pronites/>}/> */}
        {/* <Route path="/pronites" element={<Pronites2 />} /> */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/events" element={<EventPage />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/faq" element={<Faq />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Signup />} /> */}
        {/* <Route path="/team" element={<Team />} /> */}
        <Route path="/dashboard" element={<Dash />}>
          <Route index element={<MainDash />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
