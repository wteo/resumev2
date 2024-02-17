import React from 'react';
import styles from './Contact.module.css'; 

const Contact = () => {

    const formSpreeUrl = 'https://formspree.io/f/xpzvzeko'; 

    return (
        <div className={styles.contact}>
            <form action={formSpreeUrl} method="POST">
                <p className={styles.contact__title}>Say hello!</p>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                />
                <button type="submit">Send</button>
            </form>
            <div id='contact'>
                <p id={styles.email}>wendyteo.wy@gmail.com</p>
                <p id={styles.phone}>(+61) 458 369 510</p>
            </div>
            <p id={styles.github}>
                <a href='https://github.com/wteo/' target='_blank' rel='noreferrer'>
                    github.com/wteo/
                </a>
            </p>
            <p id={styles.place}>Sydney, Australia</p>
        </div>
    );
};

export default Contact;