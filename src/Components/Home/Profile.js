import React from "react";
//for typing effect
import Typical from 'react-typical';
//for audio file
import ReactAudioPlayer from 'react-audio-player';

import classes from "./Profile.module.css";

function Profile(props) {
  return (
    <section id="Home">
        <div className={`${classes.profileContainer}`}>
        <div className={classes.profileParent}>
        <div className={classes.profileDetails}>
            <div className={classes.colz}>
            <div className={classes.colzIcon}>
                {/*Audio Player*/}
                <ReactAudioPlayer
                    src="simplePiano.mp3"
                    autoPlay
                />
                {/*Here, "noreferrer noopener" provides security*/}
                <a
                href="https://twitter.com/raziazam1"
                target="_blank"
                rel="noreferrer noopener"
                > 
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                href="https://www.linkedin.com/in/razi-azam-47750087/"
                target="_blank"
                rel="noreferrer noopener"
                >
                <i className="fa fa-brands fa-linkedin-in"></i>
                </a>
                <a
                href="https://www.quora.com/profile/Razi-10"
                target="_blank"
                rel="noreferrer noopener"
                >
                <i className="fa fa-brands fa-quora"></i>
                </a>
                <a
                href="https://www.instagram.com/coderrazi/"
                target="_blank"
                rel="noreferrer noopener"
                >
                <i className="fa fa-brands fa-instagram"></i>
                </a>
                <a
                href="https://youtube.com/@coderrazi"
                target="_blank"
                rel="noreferrer noopener"
                >
                <i className="fa fa-brands  fa-youtube"></i>
                </a>
            </div>
            </div>

            <div className={classes.profileDetailsName}>
            <span className={classes.primaryText}>
                {" "}
                Hi, This is <span className={classes.highlightedText}>Razi</span>
            </span>
            </div>
            <div className={classes.profileDetailsRole}>
            <span className={classes.primaryText}>
                {" "}
                <h1>
                    <Typical 
                        loop={Infinity}
                        //Each steps will display the text for 1 sec and vanish
                        steps={[
                            "😍 Passionate Dev",
                            1400,
                            "👨🏻‍💻 FrontEnd Dev",
                            1400,
                            "🌏 Full Stack Dev",
                            1400,
                            "💻 React Dev",
                            1400,
                            "👨🏻‍🎓 Self Learner",
                            1400,
                        ]}
                    />
                </h1>
                <span className={classes.profileRoleTagline}>
                    Love to develop apps and ready to learn new tech.
                </span>
            </span>
        </div>
            <div className={classes.profileOptions}>
                <button className="btn primary-btn">
                    {" "}
                    Contact Me{" "}
                </button>
                <a href="CV.pdf" download="razi azam cv.pdf">
                    <button className={`btn highlighted-btn ${classes.highlightedBtn}`}>Download CV</button>
                </a>
            </div>
        </div>
        <div className={classes.profilePicture}>
            <div className={classes.profilePictureBackground}>
            </div>
        </div>
        </div>
    </div>
    </section>
  );
}

export default Profile;
