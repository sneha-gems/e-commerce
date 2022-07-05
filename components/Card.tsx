import Image from 'next/image'
import styles from '../styles/components/Card.module.css'
type props = {
    data: any,
    key: number
}

const Card = ({data, key}: props) => {
    return (
    <>
    <div className={styles.card_box} key={key}>
        <div className={styles.card}>
        <div className={styles.img}>
            <Image src={data?.image} width="300px" height="350px"/>
        </div>
        <div className={styles.desc}>
            <div className={styles.card__body}>
            <h4>{data?.price}</h4>
            <p>
                {data?.description}
            </p>
        </div>
        </div>
        <div className={styles.action}>

        </div>
        </div>
    </div>
    </>
    )
}


export default Card