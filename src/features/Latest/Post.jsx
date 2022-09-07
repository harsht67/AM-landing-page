import { icons, images } from "../../constants"
import "./Post.scss"

const footerIconsList = [
    "like",
    "comment",
    "whatsapp",
    "share"
]

function Post(props) {

    const { name, title, img, desc } = props.data

    return (
        <article className="Post">
            
            <header>

                <img
                    src={images.postImg1}
                    alt="post user image"
                />

                <p className="sm-text" >
                    {name}
                </p>

            </header>

            <section className="Post__content">

                <h2 className="Post__title text">
                    {title}
                </h2>

                <img
                    className="Post__img"
                    src={images[img]}
                    alt="post image"
                />

                <p className="sm-text">
                    {desc}
                </p>

            </section>

            <hr/>

            <footer>

                {footerIconsList.map(icon => (
                    <div>
                        <img
                            src={icons[icon+"Text"]}
                            alt={icon}
                        />
                    </div>
                ))}

            </footer>

        </article>
    )
}

export default Post