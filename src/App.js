import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/HomePage/Home';
import SchedulePage from './Components/SchedulePage/SchedulePage';
import Sponsors from './Components/SponsorPage/Sponsors';
import Pronites from './Components/Pronites/Pronites';
import AboutPage from './Components/AboutPage/AboutPage';
import EventPage from './Components/EventPage/EventPage';
import EventDetails from './Components/EventDetails/EventDetails';
import Contact from './Components/Contact/Contact';
import Faq from './Components/Faq/Faq';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Pronites2 from './Components/Pronites2/Pronites2';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
 <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/schedule' element={<SchedulePage/>}/>
        <Route path='/sponsors' element={<Sponsors/>}/>
        {/* <Route path='/pronites' element={<Pronites/>}/> */}
        <Route path='/pronites' element={<Pronites2/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/events' element={<EventPage/>}/>
        {/* <Route path='/events/eventDetails' element={<EventDetails/>}/> */}
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
 </div>
  );
}

export default App;
