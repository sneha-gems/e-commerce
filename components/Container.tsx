import styles from '../styles/pages/women.module.css'
type props = {
    children?:  React.ReactNode
}

const Container = ({children}:props) => {
return(
<div className={styles.grid}>
    {children}
</div>
)
}

export default Container