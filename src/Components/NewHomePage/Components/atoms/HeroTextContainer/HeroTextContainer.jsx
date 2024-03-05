
import style from './HeroTextContainer.module.scss'
function HeroTextContainer() {

  return (<div className='flex w-full' style={{ height: "100%" }} >
    <div className={style.main}>
      <svg width="100%">
        <text x="50%" y="20%">Aurora 2024</text>
        <text x="50%" y="75%">15-17 March</text>
      </svg>

    </div>

  </div>)
}

export default HeroTextContainer;
