import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/components/Navbar.module.css'
import { items } from '../utils/common'

function Navbar(){
    
    return(
    <div className={styles.nav_box}>
    <ul className={styles.nav_list}>
        {items.map((item, index) => {
            return (
            <li className={styles.nav_item} key={index}><Link href={item?.link}>{item.item}</Link></li>
            )}
        )}
    </ul>
    <div className={styles.cart}>
        <Link href="/cart">
            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: 100, color: "blue", height: '30px' }}/>
        </Link>
    </div>
    </div>
    )
}

export default Navbar