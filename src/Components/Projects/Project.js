import React from 'react';

import classes from './Project.module.css';
import pianoApp from '../../assets/Home/pianoApp.jpg'

function Project(props) {
    return (
        <section id="Project">
            <div className={classes.mySkillContainer}>
            <h1 className={classes.header}>My projects
            </h1>
            <div className={classes.parentCard}>
                <section>
                <div className={classes.mySkillContainer}>
                <h1 className={classes.header}>My projects
                    <i className="fa-solid fa-trophy"></i>
                </h1>
                <div className={classes.parentCard}>
                    <section>
                        <div className={classes.card}>
                            <img src={pianoApp} alt="piano app image"></img>
                            <h3>Piano Application.</h3>
                        </div>
                    </section>
                    <section>
                        <div className={classes.card}>
                        <i class="fa-solid fa-chalkboard-user"></i>
                             <h3>Trainer Tracker</h3>
                        </div>
                    </section>  
                </div>
            </div>
                </section>
            </div>
        </div>
        </section>
    );
}

export default Project;