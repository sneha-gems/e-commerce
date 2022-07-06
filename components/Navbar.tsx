import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import styles from '../styles/components/Navbar.module.css'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

function Navbar(){
    const items = [
        {item:"HOME", link: '/'},
        {item:"MEN", link: '/men'}, 
        {item:"WOMEN", link: '/women'}, 
        {item: "KIDS", link: '/kids'}, 
        {item: "JWELLERY", link: '/beauty'}, 
        {item: "GADGETS", link: '/gadgets'}
    ]
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
    <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: 100, color: "blue", height: '30px' }}/>
    </div>
    </div>
    )
}

export default Navbar