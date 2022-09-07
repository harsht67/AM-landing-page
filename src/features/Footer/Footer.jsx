import './Footer.scss'
import FooterHeader from './FooterHeader'
import FooterFooter from './FooterFooter'
import FooterMain from './FooterMain'

function Footer() {
    return (
        <article className="Footer">

            <FooterHeader/>

            <FooterMain/>

            <FooterFooter/>

        </article>
    )
}

export default Footer