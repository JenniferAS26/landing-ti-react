// import Header from '../Header/Header'
// import { Outlet } from 'react-router-dom'
import Gallery from '../Gallery'
import GalleryCard from "../GalleryCard";

function App() {
    return (
        <section className='wrapper'>
            {/* <Header /> */}
            <Gallery>
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
            </Gallery>
            {/* <Outlet /> */}
        </section>
    )
}

export default App