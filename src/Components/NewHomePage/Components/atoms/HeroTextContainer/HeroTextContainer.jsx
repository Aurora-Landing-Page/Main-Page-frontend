
import style from './HeroTextContainer.module.scss'
function HeroTextContainer() {

  return (<div className='flex w-full'>
    <svg width="100%" className={style.text}>
      <text x="50%" y="50%">Aurora 2024</text>
    </svg>
  </div>)
}

export default HeroTextContainer;