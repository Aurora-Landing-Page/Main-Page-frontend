import { Stack } from "@mui/material";
import "./Profile.css";
import { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../../../helper.js";
const Profile = () => {
  // const [loading, setLoading] = useState(false)
  const [ca, setCa] = useState({});
  const [registrations, setRegistrations] = useState(0);
  const [creditValue, setCreditValue] = useState(0);

  const handleProfileData = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/getCaData`, {
        withCredentials: true,
      });
      const caData = response.data;
      setCa(caData);
      // Assuming the API response has a 'data' key containing the user information
      const userData = response.data.referrals;

      // Fetch payment status for each user
      const paymentStatusPromises = userData.map(async (user) => {
        try {
          const paymentStatusResponse = await axios.post(
            `${BACKEND_URL}/getPaymentStatus`,
            {
              email: user.email,
            },
            {
              withCredentials: true,
            }
          );
          // Check if associatedPayments is an empty array or contains a string
          const hasAssociatedPayments =
            Array.isArray(paymentStatusResponse.data) &&
            paymentStatusResponse.data.length > 0;

          return { ...user, hasAssociatedPayments };
        } catch (error) {
          console.error(
            `Error fetching payment status for ${user.email}:`,
            error
          );
          return { ...user, hasAssociatedPayments: false };
        }
      });

      // Wait for all payment status requests to complete
      const modifiedData = await Promise.all(paymentStatusPromises);

      const filteredData = modifiedData.filter(
        (user) => user.hasAssociatedPayments
      );
      const duePaymentFilteredData = modifiedData.filter(
        (user) => !user.hasAssociatedPayments
      );

      const registrationsCount = filteredData?.length || 0;
      setRegistrations(registrationsCount);
      const duePaymentRegistrationsCount = duePaymentFilteredData?.length || 0;

      let calculatedCreditValue;
      calculatedCreditValue =
        duePaymentRegistrationsCount * 10 + registrationsCount * 100;

      setCreditValue(calculatedCreditValue);
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
          <h4 className="data">Credits : {creditValue}</h4>
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
