import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import './styles.sass'

const Footer = () => {
  const items = [
    {text: 'About'},
    {text: 'Careers'},
    {text: 'Events'},
    {text: 'Products'},
    {text: 'Support'},
  ]

  return (
    <section className='footer'>
      <div className='logo-options'>
        <h4 className='logo-options__title'>loopstudios</h4>
        <ul className='logo-options__list'>
          {
            items.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))
          }
        </ul>
      </div>
      <div className='social-media'>
        <ul className='social-media__list'>
          <li><AiFillFacebook /></li>
          <li><AiOutlineTwitter /></li>
          <li><BsPinterest /></li>
          <li><AiOutlineInstagram /></li>
        </ul>
        <p className='social-media__text'>© 2021 Loopstudios. All rights reserved</p>
      </div>
    </section>
  )
}

export default Footer