import './Nav.scss'
import { icons } from '../../constants'
import { useState } from 'react'

const navList = [
    {
        name: "Home",
        hasContent: false
    },
    {
        name: "About",
        hasContent: false
    },
    {
        name: "Update",
        hasContent: false
    },
    {
        name: "Gallery",
        hasContent: false
    },
    {
        name: "Schedule",
        hasContent: true
    },
    {
        name: "Donation",
        hasContent: true
    },
    {
        name: "Services",
        hasContent: true
    },
    {
        name: "Shop",
        hasContent: false
    },
    {
        name: "Blog",
        hasContent: false
    },
    {
        name: "Contact Us",
        hasContent: false
    }
]

function Nav() {

    const [currNav, SetCurrNav] = useState(navList[0].name)

    return (
        <nav className="Nav sm-text">
            <ul>

                {navList.map((item, i) => (
                    <li
                        key={i+item.name}
                        className={currNav==item.name ? "nav--active" : null}
                        onClick={() => SetCurrNav(item.name)}
                    >
                        
                        <span>{item.name}</span>

                        {item.hasContent
                            ? <img src={icons.arrowDown} alt="arrow down icon" />
                            : null
                        }

                    </li>
                ))

                }

            </ul>
        </nav>
    )
}

export default Nav