import HeroTextContainer from "../../atoms/HeroTextContainer/HeroTextContainer";
import hero_background from '../../assets/videos/Hero_background.mp4'
import mobile_hero_back from '../../assets/videos/mobile_hero_back.mp4'
import style from './HeroSection.module.scss'
import Logo from '../../assets/Images/Logo.svg'
import { useNavigate } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa6";
function HeroSection() {
    const navigate = useNavigate();
    // const next = (e) => {
    //     e.preventDefault();

    //      navigate('/register') 
    //     }
    return (
        <div className={style.HeroSection}>
            <video
                className={style.backvideo}
                loop autoPlay muted>
                <source src={hero_background} type="video/mp4"></source>
            </video>

            <div className="overflow-x-hidden sm:overflow-x-auto">
                <video
                    className={style.backvideoMobile}
                    loop autoPlay muted>
                    <source src={mobile_hero_back} type="video/mp4"></source>
                </video>
            </div>

            <div className={style.textContr}>
                <img src={Logo} className={style.Logo}></img>
                <HeroTextContainer />
         
                <a className={style.Button} 
                href="/register"
                // onClick={()=>{navigate('/register') }} 
                > Register Now <FaLocationArrow style={{ marginTop: "2px" }} /></a>
            </div>

        </div>);
}

export default HeroSection;
