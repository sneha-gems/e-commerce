import styles from '../styles/components/Footer.module.css'

function Footer(){
    return(
      <footer>
    <div className={styles.box}>
    <ul>
        <li className={styles.social}>Social Link</li>
        <div className={styles.links}>
        <li className={styles.item}>Facebook</li>
        <li className={styles.item}>Instagram</li>
        <li className={styles.item}>Twitter</li>
        <li className={styles.item}>Whatsapp</li>
        </div>
    </ul>
    <ul className={styles.contact}>
        <li>EMAIL: help@gmail.com</li>
        <li>ADDRESS: Indore, Madhya Pradesh</li>
        <li>CONTACT: +91 1234567890</li>
    </ul>
    </div>
    </footer>
    )
}

export default Footer