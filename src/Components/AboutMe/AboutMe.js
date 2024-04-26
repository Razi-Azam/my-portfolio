import React from 'react';

import AboutMebanner from '../../assets/Home/aboutBanner.jpg';
import classes from './AboutMe.module.css';

function AboutMe(props) {

    return (
        <section id="AboutMe">
            <div className={classes.aboutMeContainer}>
                <div className={classes.card}>
                    <h1 className={classes.header}>About Me</h1>
                    <p>
                        Hi, I am a passionate software developer. 
                        <br/>I love to write code especially for front end.
                        <br/>Please, click on the <span className={classes.spanText1}>Download CV</span> button to know more about me.
                        <br/>Thank You.
                    </p>
                </div>
                <div className={classes.banner}>
                    <img src={AboutMebanner} alt="AboutMeBanner" />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;