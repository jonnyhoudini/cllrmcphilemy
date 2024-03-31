import React from 'react'
import { Link } from 'react-router-dom'
import photo from '../images/JamesMcPhilemy.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const facebook = <FontAwesomeIcon icon={faFacebook} />
const twitter = <FontAwesomeIcon icon={faSquareXTwitter} />
const email = <FontAwesomeIcon icon={faEnvelope} />

const Home = () => {
    return (
        <>
            <div id="home-container">
                <div id="home-header">
                    <div id="header-left">
                        <img src={photo} alt="Cllr James Mcphilemy Photo" id="logo" />
                    </div>
                    <div id="header-right">
                        <h2>Cllr James McPhilemy</h2>
                        <h3>Cumbernauld South</h3>
                        <div id="socials">
                            {/* Add your social media icons here */}
                            <a href="#">{facebook}</a>
                            <a href="#">{twitter}</a>
                            <a href="#">{email}</a>
                        </div>
                    </div>
                </div>
                <h1>What issue can I help you with?</h1>
                <div id="button-container">
                    <Link to="/bins"><button><span className="icon">🗑️</span>Litter</button></Link>
                    <Link to="/grass"><button><span className="icon">🌱</span>Grass</button></Link>
                    <Link to="/roads"><button><span className="icon">🛣️</span>Roads</button></Link>
                    <Link to="/lights"><button><span className="icon">💡</span>Street Lights</button></Link>
                    <Link to="/housing"><button><span className="icon">🏠</span>Housing</button></Link>
                    <Link to="/facilities"><button><span className="icon">🏫</span>Community Facilities</button></Link>
                    <Link to="/other"><button><span className="icon">❓</span>Other</button></Link>
                </div>
            </div>
        </>
    );
}

export default Home