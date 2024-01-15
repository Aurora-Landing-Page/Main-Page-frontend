import style from './Footer.module.scss'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
    return ( <div className={style.footer}>
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
    </div> );
}

export default Footer;