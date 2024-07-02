import React from 'react'
import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form action="https://formspree.io/f/myzgyydn" method="post">
            <div className='formGroup'>
                <label htmlFor="name" hidden>Name</label>
                <input type="text" name="name" id='name' placeholder='Name' required />
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden>Email</label>
                <input type="email" name="email" id='Email' placeholder='email' required />
            </div>
            <div className='formGroup'>
                <label htmlFor="message" hidden>Message</label>
                <textarea name="message" id='message' placeholder='Message' required ></textarea>
            </div>
            <input type="submit" className='hober btn' value="submit" />
        </form>

    </section>
  )
}

export default Contact