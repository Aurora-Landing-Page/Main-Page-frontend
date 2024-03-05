import style from './Layout.module.scss'
import HeroSection from '../compound/HeroSection/HeroSection';
import MidSection from '../compound/mid_Section/MidSection';



function Layout() {
    return (<div className={style.Layout}>
        <HeroSection />
        <MidSection />
    </div>);
}

export default Layout;