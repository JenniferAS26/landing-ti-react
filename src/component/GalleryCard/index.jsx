// import bannerMobile from '../../assets/mobile/image-deep-earth.jpg'
// import bannerDesktop from '../../assets/desktop/image-deep-earth.jpg'
import PropTypes from 'prop-types'
import './styles.sass'

const GalleryCard = ({cardDetail}) => {
  GalleryCard.propTypes = {
    cardDetail: PropTypes.node.isRequired,
  }

  return (
    <section className='gallery-card'>
      <h3 className='gallery-card__title'>{cardDetail.name}</h3>
      <picture className='gallery-card__image-container' >
        <source media='(min-width: 1440px)' srcSet={cardDetail.desktop_image} />
        <img 
          className='gallery-card__image' 
          src={cardDetail.mobile_image} 
          alt='banner card image' 
        />
      </picture>
      
    </section>
  )
}

export default GalleryCard