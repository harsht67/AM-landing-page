import { images } from '../../constants'
import './FooterFooter.scss'

function FooterFooter() {
    return (
        <section className="FooterFooter">

            <small>
                <span>© 2022 Apnaa Mandir (Regd.). </span> 
                <span>All Rights Reserved </span> 
                (<span>Term of Use</span>) 
                <br/>
                <span>Developed and Managed by </span> 
                <span>apnaamandir.com</span>
            </small>


            <img
                src={images.amLogo}
                alt="aapna mandir logo"
            />

        </section>
    )
}

export default FooterFooter