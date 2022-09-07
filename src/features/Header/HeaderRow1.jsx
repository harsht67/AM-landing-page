import './HeaderRow1.scss'
import { Socials } from '../../components'
import SearchBar from './SearchBar'
import UserDropdown from './UserDropdown'

function HeaderRow1() {
    return (
        <section className="HeaderRow1">

            <Socials/>

            <SearchBar/>

            <UserDropdown/>

        </section>
    )
}

export default HeaderRow1