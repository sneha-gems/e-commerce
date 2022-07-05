import styles from '../styles/components/Navbar.module.css'
import Link from 'next/link'

function Navbar(){
    const items = [{item:"HOME", link: '/'},{item:"MEN", link: '/men'}, {item:"WOMEN", link: '/women'}, {item: "KIDS", link: '/kids'}, {item: "BEAUTY", link: '/beauty'}, {item: "GADGETS", link: '/gadgets'}]
    return(
    <>
    <ul className={styles.nav_box}>
        {items.map((item, index) => {return (<li className={styles.nav_item} key={index}><Link href={item?.link}>{item.item}</Link></li>)})}
    </ul>
    </>
    )
}

export default Navbar