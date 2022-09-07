import { icons } from '../../constants'
import './FooterMain.scss'

const links = [
    "daily services",
    "time sheets",
    "festival calender",
    "FAQ",
    "rules & stay",
    "services",
    "charitable services",
    "terms & privacy"
]

function FooterMain() {
    return (
        <section className="FooterMain sm-text">

            <section className="FooterMain__contact">

                <h2 className="FooterMain__title f5">
                    Contact Us
                </h2>

                <section>

                    <img
                        src={icons.location}
                        alt="location icon"
                    />

                    <p>
                        Manager/CEO Smt. Anagha Srinivasan, Sri Rangji Mandir, 
                        Vrindavan, U.P, India-281121
                    </p>

                </section>

                <section>

                    <img
                        src={icons.phone}
                        alt="phone icon"
                    />

                    <div>
                        <p>+ 91-565 244 2787</p> 
                        <p>+ 91-813 080 8180</p>
                    </div>

                </section>

                <section>

                    <img
                        src={icons.house}
                        alt="house icon"
                    />

                    <div>
                        <p>For Guest House</p>
                        <p>+91-798 303 0674</p> 
                        <p>+91-933 488 2069</p>
                    </div>

                </section>

            </section>

            <section className="FooterMain__links">

                <h2 className="FooterMain__title f5">
                    Useful links
                </h2>

                <ul>

                    {links.map(link => (
                        <li
                            key={link}
                        >
                            {link}
                        </li>
                    ))}

                </ul>

            </section>

        </section>
    )
}

export default FooterMain