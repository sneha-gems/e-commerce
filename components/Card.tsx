import Image from 'next/image'
import { MouseEventHandler, useEffect, useState } from 'react'
import styles from '../styles/components/Card.module.css'
import { itemProps } from '../utils/common'

type props<T> = {
    data: any,
    state?: any,
    onClick?: MouseEventHandler<T>
}


const Card = ({data, onClick, state}: props<HTMLButtonElement>) => {
    const [disable, setDisable] = useState(false)
    const disableHandler = () => {
        try {
            return state.map((item: itemProps) => {
                if(data?.id === item?.id && item?.disable){
                    setDisable(true)
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if(state){
            disableHandler()
        }else{
            return 
        }
    }, [onClick])

    return (
    <>
    <div className={styles.card_box} key={data?.id}>
        <div className={styles.card}>
            <div className={styles.img}>
                <Image src={data?.image} width="400px" height="400px"/>
            </div>
            <div className={styles.desc}>
                <div className={styles.card__body}>
                    <h4>{`₹${data?.price}`}</h4>
                    <p>
                        {data?.description}
                    </p>
                    <div className={styles.action}>
                        <button onClick={onClick} disabled={disable}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}


export default Card