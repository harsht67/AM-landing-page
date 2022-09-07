import './FooterHeader.scss'
import { Socials } from "../../components"

function FooterHeader() {
    return (
        <header className="FooterHeader">

            <h1 className="font3 f4">
                Sri Rangjimandir
            </h1>

            <section className="FooterHeader__socials">

                <h2 className="lg-text">
                    Follow Us 
                </h2>

                <Socials/>

            </section>

        </header>
    )
}

export default FooterHeader