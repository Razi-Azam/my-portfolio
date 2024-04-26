import React from 'react';

import classes from './MySkill.module.css';
import tailwindIcon from '../../assets/Home/tailwind-css.svg'

function MySkill(props) {
    return (
        <section id="MySkill">
            <div className={classes.mySkillContainer}>
                <h1 className={classes.header}>My Skills</h1>
                <div className={classes.parentCard}>
                    <section>
                        <div className={classes.card}>
                            <i className="fa fa-brands fa-html5"></i>
                            <h3>HTML5</h3>
                        </div>
                        <div className={classes.card}>
                            <i className="fa fa-brands fa-css3-alt"></i>
                            <h3>CSS3</h3>
                        </div>
                    </section>
                    <section>
                        <div className={classes.card}>
                            <i className="fa-brands fa-js"></i>
                            <h3>JavaScript</h3>
                        </div>
                        <div className={classes.card}>
                            <i className="fa fa-brands fa-react"></i>
                            <h3>React</h3>
                        </div>
                    </section>
                    <section>
                        <div className={classes.card}>
                            <i className="fa-brands fa-bootstrap"></i>
                            <h3>Bootstrap</h3>
                        </div>
                        <div className={classes.card}>
                            <img src={tailwindIcon} alt="tailwind css icon"></img>
                            <h3>Tailwind CSS</h3>
                        </div>
                    </section>
                    <section>
                        <div className={classes.card}>
                            <i className="fa fa-solid fa-p"></i>
                            <h3>PicsArt</h3>
                        </div>
                        <div className={classes.card}>
                            <i className="fa fa-brands fa-figma"></i>
                            <h3>Figma</h3>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default MySkill;