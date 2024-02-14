
import { useNavigate } from 'react-router-dom';
import styles from './ButtonsCarItem.module.css'
import '../../../../styles/global.css'
const ButtonsCarItem = ({carId}) => {
    const nav = useNavigate();
    return (
        <div className={styles.buttons}>
            <button className='btn' onClick={() => nav(`/car_salon_3kurs/car/${carId}/formforbuy`)}>Купить</button>
            <button className='btn' onClick={() => nav(`/car_salon_3kurs/car/${carId}`)}>Подробнее</button>
        </div>
    )
}
export default ButtonsCarItem;