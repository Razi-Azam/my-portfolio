import React, {useState} from 'react';

import classes from './Navigation.module.css';

function Navigation() {
    const [activeNav, setActiveNav] = useState("#");
    
    return (
        <nav className={classes.Navigation}>
            <a 
                href="#Home" 
                onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? classes.active : " "}
            >
                <i className="fa fa-home"></i>
            </a>
            <a 
                href="#AboutMe"
                onClick={() => setActiveNav("#AboutMe")}
                className={activeNav === "#AboutMe" ? classes.active : " "}
            >
                <i className="fa fa-user"></i>
            </a>
            <a 
                href="#MySkill"
                onClick={() => setActiveNav("#MySkill")}
                className={activeNav === "#MySkill" ? classes.active : " "}
            >
                <i className="fa fa-list"></i>
            </a>
            <a 
                href="#Achievement"
                onClick={() => setActiveNav("#Achievement")}
                className={activeNav === "#Achievement" ? classes.active : " "}
            >
                <i className="fa fa-trophy"></i>
            </a>
            <a 
                href="#Project"
                onClick={() => setActiveNav("#Project")}
                className={activeNav === "#Project" ? classes.active : " "}
            >
                <i className="fa fa-brands fa-github"></i>
            </a>
            <a 
                href="#Testimonial"
                onClick={() => setActiveNav("#Testimonial")}
                className={activeNav === "#Testimonial" ? classes.active : " "}
            >
                <i className="fa fa-users"></i>
            </a>
            <a 
                href="#ContactMe"
                onClick={() => setActiveNav("#ContactMe")}
                className={activeNav === "#ContactMe" ? classes.active : " "}
            >
                <i className="fa fa-paper-plane"></i>
            </a>
        </nav>
    )
}

export default Navigation
