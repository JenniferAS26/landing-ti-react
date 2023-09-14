import PropTypes from 'prop-types'
import './styles.sass'

const Gallery = ({ children }) => {
  Gallery.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <section className='gallery-section'>
      <h2 className='gallery-section__title'>OUR CREATIONS</h2>
      <div className='gallery-section__cards-container'>
        {children}
      </div>
      <button className='gallery-section__button'>SEE ALL</button>
    </section>
  )
}

export default Gallery