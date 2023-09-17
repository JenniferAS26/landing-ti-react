import './styles.sass'

import {
    AdvancedImage,
    lazyload,
    responsive,
    placeholder,
} from '@cloudinary/react'

import {Cloudinary} from "@cloudinary/url-gen";

const Info = () => {
  const cld = new Cloudinary({
    cloud: {cloudName: 'dsgfgsjud'}
    });
    const myImage = cld.image('loopstudios/image-interactive_n9osfj.jpg')

    myImage.format('auto').quality('auto')

    return (
        <section className='info-section'>
            <div className="info-section-container">
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
                            responsive({
                                breakpoints: [200, 400, 600],
                                maxWidth: 800,
                                steps: 200,
                            }),
                            placeholder({ mode: 'vertalize' }),
                        ]}
                    />
                </figure>
                <section className='info-section-write'>
                    <h2 className='info-section-write__title'>THE LEADER IN INTERACTIVE VR</h2>
                    <article className='info-section-write__text'>
                        Founded in 2011, Loopstudios has been producing world-class
                        virtual reality projects for some of the best companies around
                        the globe. Our award-winning creations have transformed
                        businesses through digital experiences that bind to their brand.
                    </article>
                </section>
            </div>
        </section>
    )
};

    
export default Info