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
  const icons = [
    { brand: <AiFillFacebook />},
    { brand: <AiOutlineTwitter />},
    { brand: <BsPinterest />},
    { brand: <AiOutlineInstagram />},
  ]

  return (
    <section className='footer'>
      <div className='logo-options'>
        <h4 className='logo-options__title'>loopstudios</h4>
        <ul className='logo-options__list'>
          {
            items.map((item, index) => (
              <li className='logo-options__list--items' key={index}>{item.text}</li>
            ))
          }
        </ul>
      </div>
      <div className='social-media'>
        <ul className='social-media__list'>
          {
            icons.map((icon, index) => (
                <li 
                  className='social-media__list--items' 
                  key={index}
                >
                  {icon.brand}
                </li>
            ))
          }
        </ul>
        <p className='social-media__text'>© 2021 Loopstudios. All rights reserved</p>
      </div>
    </section>
  )
}

export default Footer