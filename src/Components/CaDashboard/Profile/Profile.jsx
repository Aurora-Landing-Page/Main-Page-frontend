import { Stack } from "@mui/material";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="detail-section">
        <Stack spacing={4}>

          <h4 className="data data-first">
            Name :  Abc
          </h4>
          <h4 className="data">
            College :  IIITM
          </h4>
          <h4 className="data">
            City :  Gwalior
          </h4>
          <h4 className="data">
            Gender : Male
          </h4>

          <h4 className="data">
            Email : abc@gmail.com
          </h4>
          <h4 className="data">
            Phone No :  1223344556
          </h4>

          <h4 className="data">
            DOB :  2004
          </h4>
          <h4 className="data">
            Referral Code :  12345
          </h4>
          <h4 className="data">
            Registrations :     12
          </h4>
          <h4 className="data">
            Credits : 100
          </h4>
          <h4 className="data">
            Progress : 12
          </h4>
          <h4 className="data data-last">
            **Note : If you are successful to complete 15 referrals, you will avail 50% discount.
          </h4>

        </Stack>
      </div>
    </div>
  );
};

export default Profile;
