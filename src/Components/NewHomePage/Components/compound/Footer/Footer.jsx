import "./Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <>
      {/* <div className={style.footer}>
        <div className={style.footerTop}>
          <div>Connect with us </div>
          <div className={style.sh}>
            <a href='https://www.instagram.com/aurora_iiitm/'><FaInstagram/></a>
            <a href='https://www.facebook.com/auroraiiitm/'><FaFacebook/></a>
            <a href='https://www.linkedin.com/company/aurora-iiitm-gwalior/?originalSubdomain=in'><FaLinkedin/></a>
           <a href='https://www.youtube.com/@AuroraIIITGwaliorFest'><FaYoutube /></a>
          
          </div>
        </div>
        <div className={style.DecoDiv}>
            <div className={style.Rotator}></div>
        </div>
    </div> */}
      <div className="main_wave">
        <div className="footer">
          <div className="waves ">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
          </div><div>
            <ul class="social-icon">
              <a class='social-icon__link' href='https://www.instagram.com/aurora_iiitm/'><FaInstagram /></a>
              <li class="social-icon__item"></li>
              <li class="social-icon__item">            <a class='social-icon__link' href='https://www.facebook.com/auroraiiitm/'><FaFacebook /></a>
              </li>
              <a class='social-icon__link' href='https://www.linkedin.com/company/aurora-iiitm-gwalior/?originalSubdomain=in'><FaLinkedin /></a>
              <li class="social-icon__item"></li>
              <a class='social-icon__link' href='https://www.youtube.com/@AuroraIIITGwaliorFest'><FaYoutube /></a>
              <li class="social-icon__item"></li>
            </ul>
          </div>
          <div><ul class="menu">
            <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
            <li class="menu__item"><a class="menu__link" href="#">About</a></li>
            <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
            <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
            <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

          </ul></div>

          <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
        </div>
      </div >
    </>
  );
}

export default Footer;