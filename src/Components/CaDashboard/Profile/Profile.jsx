import { Stack } from "@mui/material";
import "./Profile.css";

const Profile = () => {
  // const [loading, setLoading] = useState(false)
  // const response = await axios.get("http://localhost:3000/getCaData")
  // const ca = response.data
  // const registrations = ca.referrals.length;
  // let progress;
  // if (registrations >= 15) {
  //   progress = 100;
  // } else {
  //   progress = (registrations * 100) / 15;
  // }

  return (
    <div className="profile">
      <div className="detail-section">
        <Stack spacing={4}>
          <h4 className="data data-first">
            Name : Abc
            {/* {ca.name}  */}
          </h4>
          <h4 className="data">
            College : IIITM
            {/* {ca.college} */}
          </h4>
          <h4 className="data">
            City : Gwalior
            {/* {ca.city} */}
          </h4>
          <h4 className="data">
            Gender : Male
            {/* {ca.gender} */}
          </h4>

          <h4 className="data">
            Email : abc@gmail.com
            {/* {ca.email} */}
          </h4>
          <h4 className="data">
            Phone No : 1223344556
            {/* {ca.phone} */}
          </h4>

          <h4 className="data">
            DOB : 2003
            {/* {ca.dob} */}
          </h4>
          <h4 className="data">
            Referral Code : 12345
            {/* {ca.referralCode} */}
          </h4>
          <h4 className="data">
            Registrations : 12
            {/* {registrations} */}
          </h4>
          <h4 className="data">
            Credits : 100
            {/* {registrations * 100} */}
          </h4>
          <h4 className="data">
            Progress : 12
            {/* {progress} */}
          </h4>
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
