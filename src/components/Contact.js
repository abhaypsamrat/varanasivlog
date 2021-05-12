import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <div class="social-container">
            <h3>Contact me</h3>
            <br />
            <a href="https://www.linkedin.com/in/abhaypsamrat" target='blank'
                className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>

            <a href="https://www.facebook.com/abhaypratap.samrat.3/" target='blank'
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>

            <a href="https://www.twitter.com/abhaypsamrat" target='blank'
                className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>

            <a href="https://www.instagram.com/abhaypsamrat" target='blank'
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>

            <a href="https://www.youtube.com/channel/UCvat0an-Mof_eU9LO-_UZOw" target='blank'
                className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.github.com/abhaypsamrat" target='blank'
                className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>
    )
}

export default Contact
