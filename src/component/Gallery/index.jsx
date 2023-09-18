import PropTypes from 'prop-types'
import './styles.sass'

const Gallery = ({ children }) => {
  Gallery.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <section className='gallery-section'>
      <div className='top-container'>
        <h2 className='gallery-section__title'>OUR CREATIONS</h2>
        <button className='gallery-section__button'>SEE ALL</button>
      </div>
      <div className='gallery-section__cards-container'>
        {children}
      </div>
    </section>
  )
}

export default Gallery