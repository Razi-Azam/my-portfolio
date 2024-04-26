import React from 'react';

import classes from './Achievement.module.css';

function Achievement(props) {
    return (
        <section id="Achievement">
            <div className={classes.mySkillContainer}>
                <h1 className={classes.header}>My Achievements
                    <i className="fa-solid fa-trophy"></i>
                </h1>
                <div className={classes.parentCard}>
                    <section>
                        <div className={classes.card}>
                         <i class="fa fa-solid fa-trophy"></i>
                            <h3>Ramanujan Award</h3>
                            <p>Given by Evelyn Learning System</p>
                        </div>
                    </section>
                    <section>
                        <div className={classes.card}>
                            <i class="fa fa-solid fa-award"></i>
                            <h3>Got A++ and a laptop</h3>
                            <p>Bhavishya Jyoti Scholarship Test.</p>
                        </div>
                    </section>
                    <section>
                        <div className={classes.card}>
                            <i class="fa fa-solid fa-medal"></i>
                            <h3>Top 100 Poets of India</h3>
                            <p>Given by s7 in National Level Poetry Competition.</p>
                        </div>
                    </section>
                    <section>
                        <div className={classes.card}>
                            <i class="fa fa-solid fa-graduation-cap"></i>
                            <h3>Taught MySQL to a Delhi University Student with a project.</h3>
                            <p>She got 90+ percentage in the exam.</p>
                        </div>
                   </section>
                </div>
            </div>
        </section>
    );
}

export default Achievement;