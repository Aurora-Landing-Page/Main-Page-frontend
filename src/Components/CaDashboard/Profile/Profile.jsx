
import "./Profile.css";
const Profile =  () => {
  // const [loading, setLoading] = useState(false)

  // const response = await axios.get("http://localhost:3000/getCaData")
  // const ca = response.data
  // // console.log(ca);
  // const registrations = ca.referrals.length;
  // let progress;
  // if (registrations >= 15) {
  //   progress = 100;
  // } else {
  //   progress = (registrations * 100) / 15;
  // }
  return (
    <div className="profile">
      <h1 className="p-title">Profile</h1>

      <div className="detail-section">
        <h4 className="data">
          Name &emsp;&emsp;&emsp;&emsp;&emsp; :{/* {ca.name}  */}
           Abc
        </h4>
        <h4 className="data">
          College &emsp;&nbsp;&emsp;&emsp;&emsp;:
          {/* {ca.college} */}
           IIITM
        </h4>
        <h4 className="data">
          City &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;:
          {/* {ca.city} */}
           Gwalior
        </h4>
        <h4 className="data">
          Phone No &nbsp;&emsp;&emsp;&emsp;:
          {/* {ca.phone} */}
           1223344556
        </h4>
        <h4 className="data">
          Email&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:
          {/* {ca.email} */}
           abc@gmail.com
        </h4>
        <h4 className="data">
          Gender&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;:
          {/* {ca.gender} */}
           Male
        </h4>
        <h4 className="data">
          DOB &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:
          {/* {ca.dob} */}
           2004
        </h4>
        <h4 className="data">
          Referral Code &ensp;&nbsp;:
          {/* {ca.referralCode} */}
           12345
        </h4>
        <h4 className="data">
          Registrations&emsp; :{/* {registrations} */}
           12
        </h4>
        <h4 className="data">
          Credits &emsp;&emsp;&emsp;&ensp;&emsp;:
          {/* {registrations * 100} */}
           100
        </h4>
        <h4 className="data">
          progress&emsp;&emsp;&ensp;&emsp; :{/* {progress}% */}
           12
        </h4>
      </div>
    </div>
  );
};

export default Profile;
