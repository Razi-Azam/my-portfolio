import React from 'react';

import classes from './ContactMe.module.css';

function ContactMe(props) {
    return (
        <section id="ContactMe">
            <div className={classes.contactMeContainer}>
                <h1>Contact Me</h1>
            </div>
        </section>
    );
}

export default ContactMe;