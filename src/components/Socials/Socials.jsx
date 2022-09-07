import './Socials.scss'
import { images }  from '../../constants'

const socialsList = [
    "facebook",
    "twitter",
    "linkedin",
    "instagram",
    "youtube",
    "google2"
]

function Socials() {
    return (
        <section className="Socials">
            
            {socialsList.map(item => (
                <img
                    src={images[item]}
                    alt={`${item} image`}
                    key={item}
                />
            ))}

        </section>
    )
}

export default Socials;