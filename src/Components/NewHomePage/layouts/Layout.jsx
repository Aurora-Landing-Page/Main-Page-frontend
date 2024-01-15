import style from './Layout.module.scss'
import HeroSection from '../compound/HeroSection/HeroSection';
import MidSection from '../compound/mid_Section/MidSection';
import Footer from '../compound/Footer/Footer';
function Layout() {
    return ( <div className={style.Layout}>
        <HeroSection/>
        <MidSection/>
        <Footer/>
    </div> );
}

export default Layout;