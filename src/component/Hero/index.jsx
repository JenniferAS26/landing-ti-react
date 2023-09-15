import PropTypes from 'prop-types'
import {
    AdvancedImage,
    lazyload,
    responsive,
    placeholder,
} from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import './styles.sass'

const Hero = ({ children }) => {
    Hero.propTypes = {
        children: PropTypes.node.isRequired,
    }

    const cloudinary = new Cloudinary({
        cloud: {
            cloudName: 'vegadelalyra',
        },
    })

    const heroBannerDesktop = cloudinary.image(
        'react-makaia/workshop-landing/image-hero_rteslx.jpg'
    )

    const heroBannerMobile = cloudinary.image(
        'react-makaia/workshop-landing/image-hero_yaeobk.jpg'
    )

    heroBannerDesktop.format('auto').quality('auto')
    heroBannerMobile.format('auto').quality('auto')

    return (
        <section className='hero'>
            {children}
            <picture className='hero__image-container'>
                <AdvancedImage
                    cldImg={heroBannerDesktop}
                    plugins={[
                        lazyload({
                            rootMargin: '10px 20px 10px 30px',
                            threshold: 0.25,
                        }),
                        responsive({ steps: 100 }),
                        placeholder({ mode: 'vertalize' }),
                    ]}
                />
                {/* <source
                    media='(min-width: 1440px)'
                    srcSet={
                        
                    }
                /> */}
                {/* <img
                    src={heroBannerMobile}
                    alt='hero banner image'
                /> */}
            </picture>
            <div className='hero__title-container'>
                <h1 className='hero__title-container--title'>
                    immersive experieces that deliver
                </h1>
            </div>
        </section>
    )
}

export default Hero
