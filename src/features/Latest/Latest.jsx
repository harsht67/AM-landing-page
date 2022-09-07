import './Latest.scss'
import Post from './Post'

const posts = [
    {
        name: "Sri Ranjimandir Seva Samiti",
        title: "VAHAN SAVARI (Different Savaris)",
        img: "postImg1",
        desc: "Sri Rangji Mandir is dedicated to Lord Sri Goda-Rangamannar. Goda or Andal as she is popularly known in South India was a famous"
    },
    {
        name: "Sri Ranjimandir Seva Samiti",
        title: "### SRI DEEPAWALI UTSAV ###",
        img: "postImg2",
        desc: "Sri Rangji Mandir is dedicated to Lord Sri Goda-Rangamannar. Goda or Andal as she is popularly known in South India was a famous"
    }
]

function Latest() {
    return (
        <article className="Latest">

            <section className="Latest__header f4">

                <span>latest</span>
                <span>update</span> 
            
            </section>

            <section className="Latest__post">

                { posts.map(post => <Post data={post} />) }

            </section>

        </article>
    )
}

export default Latest