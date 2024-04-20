import { useNavigate } from 'react-router-dom';
import styles from './CarInfoItem.module.css'
const CarInfoItem = ({category = '', car = ''}) => {
    const nav = useNavigate();
    const buttonClass = `btn ${styles.button}`
    if (category === '') {
        return (
            <div className={styles.container}>
                <div className={styles.promoImage} style={{
                    backgroundImage:`url(${car.url})`,
                }}>
                </div>
                <div className={styles.info}>
                    <span className={styles.promoFire}>
                        <img src={require('../images/firePromo.png')} width={'35px'} alt='promoFire'/>
                    </span>
                    <span className={styles.promoName}>{car.name}</span>
                    <button className = {buttonClass} onClick={() => nav(`/car_salon_3kurs/catalog/${car.category}/car/${car.id}`)}>Перейти &#x2192;</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <img className={styles.categoryImage} src={require(`../images/category/${category.name}.png`)} alt = 'promoCar'/>
                <div className={styles.info}>
                    <span className={styles.name}>{category.ruName}</span>
                    <button className = {buttonClass} onClick={() => nav(`/car_salon_3kurs/catalog/${category.name}`)}>Перейти &#x2192;</button>
                </div>
            </div>
        )
    }
}

export default CarInfoItem;