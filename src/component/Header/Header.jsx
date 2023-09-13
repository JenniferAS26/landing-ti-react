import './Header.sass'
import React from 'react'
import {
    AdvancedImage,
    lazyload,
    responsive,
    placeholder,
} from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

const Header = () => {
    const cloudinary = new Cloudinary({
        cloud: {
            cloudName: 'vegadelalyra',
        },
    })

    const myImage = cloudinary.image(
        'react-makaia/workshop-landing/image-hero_rteslx.jpg'
    )

    myImage.format('auto').quality('auto')

    return (
        <figure>
            <AdvancedImage
                width='100%'
                height='100%'
                cldImg={myImage}
                plugins={[
                    lazyload({
                        rootMargin: '10px 20px 10px 30px',
                        threshold: 0.25,
                    }),
                    responsive({ steps: 200 }),
                    placeholder({ mode: 'vertalize' }),
                ]}
            />
        </figure>
    )
}

export default Header
