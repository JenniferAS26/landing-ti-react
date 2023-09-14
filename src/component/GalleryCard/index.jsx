import bannerMobile from '../../assets/mobile/image-deep-earth.jpg'
import bannerDesktop from '../../assets/desktop/image-deep-earth.jpg'
import './styles.sass'

const GalleryCard = () => {
  return (
    <section className='gallery-card'>
      <h3 className='gallery-card__title'>Name Complete</h3>
      <picture>
        <source media='(min-width: 1440px)' srcSet={bannerDesktop} />
        <img 
          className='gallery-card__image' 
          src={bannerMobile} 
          alt='banner card image' 
        />
      </picture>
      
    </section>
  )
}

export default GalleryCard