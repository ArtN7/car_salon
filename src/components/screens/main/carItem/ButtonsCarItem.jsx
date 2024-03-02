import styles from './ButtonsCarItem.module.css'
import '../../../../styles/global.css'
const ButtonsCarItem = ({carId}) => {
    return (
        <div className={styles.buttons}>
            <a className='link' href={`/car_salon_3kurs/car/${carId}/formforbuy`}>Купить</a>
            <a className='link' href={`/car_salon_3kurs/car/${carId}`}>Подробнее</a>
        </div>
    )
}
export default ButtonsCarItem;