import HeroTextContainer from "../../atoms/HeroTextContainer/HeroTextContainer";
import hero_background from '../../assets/videos/Hero_background.mp4'
import mobile_hero_back from '../../assets/videos/mobile_hero_back.mp4'
import style from './HeroSection.module.scss'
import Logo from '../../assets/Images/Logo.png'
import { FaLocationArrow } from "react-icons/fa6";
function HeroSection() {
    return (
    <div className={style.HeroSection}>
        <video className={style.backvideo}  autoPlay={true} loop={true}>
            <source src={hero_background}></source>
        </video>
        <video className={style.backvideoMobile}  autoPlay={true} loop={true}>
            <source src={mobile_hero_back}></source>
        </video>
        <div className={style.textContr}>
            <img src={Logo} className={style.Logo}></img>
            <HeroTextContainer/>
            <button className={style.Button}> Register Now <FaLocationArrow style={{marginTop:"2px"}}/></button>
        </div>
    </div> );
}

export default HeroSection;