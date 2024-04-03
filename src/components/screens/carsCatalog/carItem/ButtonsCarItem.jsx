import styles from './ButtonsCarItem.module.css'
import '../../../../styles/global.css'
import { useNavigate } from 'react-router-dom'
const ButtonsCarItem = ({carId}) => {
    const nav = useNavigate();
    return (
        <div className={styles.buttons}>
            <button className='btn' onClick={() => nav(`car/${carId}/formforbuy`, { replace: false })}>Оформить</button>
            <button className='btn' onClick={() => nav(`car/${carId}`, { replace: false })}>Подробнее</button>
        </div>
    )
}
export default ButtonsCarItem;