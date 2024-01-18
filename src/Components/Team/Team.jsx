import { useEffect, useState } from "react";
import "./Team.css";
import Loader from "../AlertAndLoader/Loader";
import axios from "axios";
import Alert from "../AlertAndLoader/Alert";
import Toast from "../AlertAndLoader/Toast";
import Navbar from '../Navbar/Navbar';

const MemberCard = ({ name, contact, imageUrl }) => {
    return (
        <div className="team-coordinator-card">
            <div className="team-img">
                <img src={imageUrl} alt="Profile" /></div>
            <div className="team-coordinator-card-details">
                <h3>{name}</h3>
                <p>Contact: {contact}</p></div>
        </div>
    );
};



const Team = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Navbar />
                    <div className="team-aurora-team">
                        <h1>Aurora Team</h1>
                        <h2>Coordinators</h2>
                        <div className="team-coordinators">
                            <MemberCard name="Coordinator 1" contact="+1234567890" imageUrl={require("./img/1.jpg")} />
                            <MemberCard name="Coordinator 2" contact="+1987654321" imageUrl={require("./img/1.jpg")} />
                        </div>

                        <h2>Core Team</h2>
                        <div className="team-core-team">
                            <MemberCard name="Member 1" contact="+1111111111" imageUrl={require("./img/1.jpg")} />
                            <MemberCard name="Member 2" contact="+2222222222" imageUrl={require("./img/1.jpg")} />
                            <MemberCard name="Member 2" contact="+2222222222" imageUrl={require("./img/1.jpg")} />
                            <MemberCard name="Member 2" contact="+2222222222" imageUrl={require("./img/1.jpg")} />
                            <MemberCard name="Member 2" contact="+2222222222" imageUrl={require("./img/1.jpg")} />
                            <MemberCard name="Member 2" contact="+2222222222" imageUrl={require("./img/1.jpg")} />
                            <MemberCard name="Member 2" contact="+2222222222" imageUrl={require("./img/1.jpg")} />
                            <MemberCard name="Member 2" contact="+2222222222" imageUrl={require("./img/1.jpg")} />
                            <MemberCard name="Member 2" contact="+2222222222" imageUrl={require("./img/1.jpg")} />
                            <MemberCard name="Member 2" contact="+2222222222" imageUrl={require("./img/1.jpg")} />

                        </div>
                    </div>


                </>
            )
            }
        </>
    );
}

export default Team;