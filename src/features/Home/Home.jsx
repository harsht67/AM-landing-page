import './Home.scss'
import ImageGallery from '../ImageGallery/ImageGallery'
import Latest from '../Latest/Latest'
import About from '../About/About'

function Home() {
    return (
        <article className="Home">

            <ImageGallery/>

            <Latest/>

            <About/>

        </article>
    )
}

export default Home