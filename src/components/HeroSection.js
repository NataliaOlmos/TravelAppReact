import React from 'react';
import Button  from '../components/Button';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="travel-app/public/videos" autoPlay loop muted />
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large">
                    WATCH TRAILER <i className="far fa-play-ci" ></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;