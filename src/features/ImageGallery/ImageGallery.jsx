import './ImageGallery.scss'
import { icons, images } from '../../constants'
import { Button } from '../../components'
import { useState } from 'react'

const galleryImgs = [
    "galleryImg1",
    "galleryImg2",
]

function ImageGallery() {

    const [imgIndex, setImgIndex] = useState(0)

    const decImgIndex = () => {
        if(imgIndex > 0) {
            setImgIndex(prev => prev-1)
        }
    }

    const incImgIndex = () => {
        if(imgIndex < galleryImgs.length-1) {
            setImgIndex(prev => prev+1)
        }
    }

    return (
        <article
            className="ImageGallery"
            style={{backgroundImage: `url(${images[galleryImgs[imgIndex]]})`}}
        >

            <h1 className="ImageGallery__heading text">
                LOREM ISPUM IS SIMPLY DUMMY 
            </h1>

            <h2 className="ImageGallery__title font2 f3">
                Lord Sri Goda-Rangamannar 
            </h2>

            <p className="ImageGallery__desc">
                Sri Rangji Mandir is dedicated to Lord Sri Goda-Rangamannar.
                Goda or Andal as she is popularly known in South India was a famous 
                8th century Vaishnava saint who composed "Tiruppuvai" which centers 
                around her love for her beloved Lord Krishna and his Leela Bhoomi Vrindavan.
            </p>

            <Button bckColor="#F8A61C">
                Learn More
            </Button>

            <img
                className="ImageGallery__arrowBtn arrow--left"
                src={icons.arrowLeft}
                alt="left arrow icon"
                onClick={decImgIndex}
            />

            <img
                className="ImageGallery__arrowBtn arrow--right"
                src={icons.arrowRight}
                alt="right arrow icon"
                onClick={incImgIndex}
            />

            <section className="ImageGallery__nav">

                {galleryImgs.map((x, i) => {
                    return i == imgIndex 
                        ? <img 
                            src={icons.dotFilled} 
                            alt="dot icon"  
                            onClick={() => setImgIndex(i)}
                        />
                        : <img 
                            src={icons.dot} 
                            alt="active dot icon" 
                            onClick={() => setImgIndex(i)}
                        />
                })}

            </section>


        </article>
    )
}

export default ImageGallery