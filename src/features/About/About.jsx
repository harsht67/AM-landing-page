import './About.scss'
import { Button } from '../../components'
import { images } from '../../constants'

function About() {
    return (
        <article className="About">

            <img
                className="About__img"
                src={images.aboutImg}
                alt="about image"
            />

            <section className="About__text">

                <h1 className="About__title f4">
                    about
                </h1>

                <h2 className="About__name f4">
                    Sri Rangji Mandir
                </h2>

                <p className="About__desc text">
                    Sri Rangji Mandir is dedicated to Lord Sri Goda-Rangamannar. 
                    Goda or Andal as she is popularly known in South India was a 
                    famous 8th-century Vaishnava saint who composed "Tiruppuvai" 
                    which centers around her love for her beloved Lord Krishna and 
                    his Leela Bhoomi Vrindavan. She pines for him, fasts for him, 
                    sings songs in his praise, and wants to attain him by marrying 
                    him. Lord Ranganatha who is none other than Krishna answers her 
                    prayers by becoming her bridegroom. In Sri Rangji Mandir, Lord 
                    Krishna is present as the bridegroom with a walking stick in his 
                    hand as is the custom in a traditional south Indian marriage. 
                    To his right is Andal and to his left Garuda, the vahana of Lord Krishna.
                </p>

                <Button bckColor="#f70b0f">
                    Learn More
                </Button>

            </section>

        </article>
    )
}

export default About