import { Stack } from "@mui/material";
import "./Profile.css";
import { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../../../helper.js";
const Profile = () => {
  // const [loading, setLoading] = useState(false)
  const [ca, setCa] = useState({});
  const [registrations, setRegistrations] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleProfileData = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/getCaData`, {
        withCredentials: true,
      });
      console.log(response);
      const caData = response.data;
      setCa(caData);

      const registrationsCount = caData?.referrals.length || 0;
      setRegistrations(registrationsCount);

      let progressValue;
      if (registrationsCount >= 15) {
        progressValue = 100;
      } else {
        progressValue = Math.round((registrationsCount * 100) / 15);
      }
      setProgress(progressValue);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleProfileData();
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <div className="profile">
      <div className="detail-section">
        <Stack spacing={4}>
          <h4 className="data data-first">Name : {ca.name}</h4>
          <h4 className="data">College : {ca.college}</h4>
          <h4 className="data">City : {ca.city}</h4>
          <h4 className="data">Gender : {ca.gender}</h4>

          <h4 className="data">Email : {ca.email}</h4>
          <h4 className="data">Phone No : {ca.phone}</h4>

          <h4 className="data">DOB : {ca.dob}</h4>
          <h4 className="data">Referral Code : {ca.referralCode}</h4>
          <h4 className="data">Registrations : {registrations}</h4>
          <h4 className="data">
            Credits : {Math.round((registrations * 100) / 15)}
          </h4>
          <h4 className="data">Progress : {progress}</h4>
          <h4 className="data data-last">
            **Note : If you are successful to complete 15 referrals, you will
            avail 50% discount.
          </h4>
        </Stack>
      </div>
    </div>
  );
};

export default Profile;
