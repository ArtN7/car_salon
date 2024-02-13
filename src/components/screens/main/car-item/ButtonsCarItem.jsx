
import { useNavigate } from 'react-router-dom';
import styles from './ButtonsCarItem.module.css'

const ButtonsCarItem = ({carId}) => {
    const nav = useNavigate();
    return (
        <div className={styles.buttons}>
            <button onClick={() => nav(`/car_salon_3kurs/car/${carId}/formforbuy`)}>Купить</button>
            <button onClick={() => nav(`/car_salon_3kurs/car/${carId}`)}>Подробнее</button>
        </div>
    )
}
export default ButtonsCarItem;