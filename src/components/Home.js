import React from 'react'
import About from './About'
import Pics from './Pics'
import Signin from './Signin'
import Contact from './Contact'

const Home = () => {
    return (
        <div>
            <div className="text">
                <img className="img" src="front.jpg" alt="" />
                <h2><span>Welcome to Varanasi</span> </h2>
                <br />
                <p>
                    Varanasi, also known as Banaras and Kashi, is a major city in the north Indian state of Uttar Pradesh. Situated on the banks of the holy river Ganga, the city has great religious significance for the Hindus.
                </p>
                <img className="vt" src='images/vt.jpg' />
                <img className="bhu" src="images/bhu.jpg" />
                <p>
                    Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Vishwanath Gali of Varanasi, Uttar Pradesh in India.
                </p>
                <img className="vt" src='images/sarnath.jpg' />
                <img className="bhu" src="images/sarnath1.jpg" />
                <p>
                    Sarnath is a place located 10 kilometres north-east of Varanasi near the confluence of the Ganges and the Varuna rivers in Uttar Pradesh, India. The Deer Park in Sarnath is where Gautama Buddha first taught the Dharma.
                </p>
                <img className="vt" src='images/80.jpg' />
                <img className="bhu" src="images/bird.jpg" />
                <p>Manikarnika Ghat (Hindi: मणिकर्णिका घाट) is one of the holiest cremation grounds among the sacred riverfronts (ghats), alongside the river Ganga, in the city of Varanasi in the Indian state of Uttar Pradesh. In Hinduism, death is considered as a gateway to another life marked by the results of one's karma.
                </p>
                <About />
                <Pics />
                <Signin />
                <Contact />
            </div>
            <br />
        </div>


    )
}

export default Home