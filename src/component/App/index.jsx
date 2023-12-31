// import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBarTailWindNextUI from '../Navbar'
import Gallery from '../Gallery'
import GalleryCard from "../GalleryCard";
import Info from "../Info"
import Hero from '../Hero'
import Footer from '../Footer';

function App() {
    const [cardDetails, setCardDetails] = useState([])
    
    useEffect(() => {
        fetch('https://api-workshop-3-production.up.railway.app/gallery')
            .then(response => response.json())
            .then(data => setCardDetails(data))
    }, [])
    return (
        <section className='wrapper'>
            <Hero>
                <NavBarTailWindNextUI />
            </Hero>
            <Info />
            <Gallery>
                {cardDetails.map((cardDetail, index) => (
                    <GalleryCard
                        key={index}
                        cardDetail={cardDetail}
                    />
                ))}
            </Gallery>
            <Footer />
        </section>
    )
}

export default App
