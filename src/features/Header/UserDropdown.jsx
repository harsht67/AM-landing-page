import './UserDropdown.scss'
import { images, icons } from '../../constants'

function UserDropdown() {
    return (
        <section className="UserDropdown">

            <div>

                <img
                    src={images.user}
                    alt="user image"
                />

                <span className="sm-text">
                    Admin Login
                </span>

                <img
                    src={icons.arrowDown}
                    alt="arrow down icon"
                />

            </div>

        </section>
    )
}

export default UserDropdown