import style from './MidSections.module.scss'
import mid_background from '../../assets/videos/about_back.mp4'
import logo from '../../assets/Images/Logo.svg'
function MidSection() {
    return (<div className={style.midsection}>
        <video className='video' loop autoPlay muted style={{ width: "100vw" }} >
            <source src={mid_background}></source>
        </video>
        <div className={style.midMain}>
            <div className={style.Description}>
                Get ready to be blown away at Aurora, ABV-IIITM Gwalior's spectacular Annual Cultural Fest—the unrivaled heartbeat of Central India's college scene! We're not just hosting an event; we're orchestrating the grandest celebration of talent, diversity, and pure exhilaration.     From electrifying performances to pulse-pounding contests, Aurora is THE ultimate destination for an explosion of excitement. Prepare to embark on a journey filled with mesmerizing music, captivating dance, and unadulterated joy. As the crowning jewel of college fests in Central India, Aurora 2024 guarantees an experience so unforgettable, it'll be etched in your memory forever.
            </div>
            <div >
                <img src={logo} className={style.Logo}></img>
            </div>
        </div>
    </div>);
}

export default MidSection;