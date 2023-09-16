import PropTypes from 'prop-types'
import {
    AdvancedImage,
    lazyload,
    responsive,
    placeholder,
} from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import './styles.sass'
import useWindowSize from '../../hooks/useWindowSize'

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

    const { width } = useWindowSize()

    return (
        <section className='hero'>
            {children}
            <picture className='hero__image-container'>
                {width <= 768 ? (
                    <AdvancedImage
                        cldImg={heroBannerMobile}
                        plugins={[
                            lazyload({
                                rootMargin: '10px 20px 10px 30px',
                                threshold: 0.25,
                            }),
                            responsive({ steps: 100 }),
                            placeholder({ mode: 'vertalize' }),
                        ]}
                    />
                ) : (
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
                )}
            </picture>
            <div className='hero__title-container'>
                <h1 className='hero__title-container--title'>
                    <span>immersive</span> 
                    <span>experieces</span> 
                    <span>that deliver</span>
                </h1>
            </div>
        </section>
    )
}

export default Hero
