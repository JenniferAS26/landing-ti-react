import mobileImage from '../../assets/images/image-interactive-mobile.jpg'
import desktopImage from '../../assets/images/image-interactive-desktop.jpg'
import './styles.sass'

const InfoTemp = () => {
  return (
    <section className='info-container'>
      <picture className='info-container__picture'>
        <source
          media='(min-width: 1440px)'
          srcSet={desktopImage}  
        />
        <img src={mobileImage} alt='image' />
      </picture>
      <div className='info-container__text-container'>
        <h2 className='info-container__text-container--title'>THE LEADER IN INTERACTIVE VR</h2>
        <p className='info-container__text-container--text'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
      </div>
    </section>
  )
}

export default InfoTemp