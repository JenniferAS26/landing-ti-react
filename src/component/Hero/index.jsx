import PropTypes from 'prop-types'
import heroBannerMobile from '../../assets/image-hero.jpg'
import heroBannerDesktop from '../../assets/image-hero-desktop.jpg'
import './styles.sass'

const Hero = ({ children }) => {
  Hero.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <section className='hero'>
      {children}
      <picture className='hero__image-container'>
        <source media='(min-width: 1440px)' srcSet={heroBannerDesktop}  />
        <img src={heroBannerMobile} alt='hero banner image' />
      </picture>
      <div className='hero__title-container'>
        <h1 className='hero__title-container--title'>immersive experieces that deliver</h1>
      </div>
    </section>
  )
}

export default Hero