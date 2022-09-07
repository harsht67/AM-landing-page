import './HeaderRow2.scss'
import Nav from './Nav'

function HeaderRow2() {
    return (
        <section className="HeaderRow2">

            <h1 className="HeaderRow2__logo font3 f4">
            
                Sri Rangjimandir
            
            </h1>

            <Nav/>

            <button className="HeaderRow2__btn">

                Donate

            </button>


        </section>
    )
}

export default HeaderRow2