import styles from './ButtonsCarItem.module.css'
import '../../../../styles/global.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Popup from '../../../UI/popup/Popup';
import PopupAdmin from '../../../UI/popup/PopupAdmin';

const ButtonsCarItemAdmin = ({ carId, category }) => {
    const nav = useNavigate();
    const root = document.getElementById('root');
    const [isPopupActive1, setPopupActive1] = useState(false);
    const [isPopupActive2, setPopupActive2] = useState(false);
    isPopupActive1 || isPopupActive2 ? root.classList.add('popupIsActive') : root.classList.remove('popupIsActive');

    const TEXT_PARAGRAPH_DELETE = 'Вы, действительно, хотите удалить автомобиль?';
    const TEXT_PARAGRAPH_UPDATE = 'Измените данные';
    return (
        <div className={styles.buttons}>
            <button className='btn' onClick={() => {
                setPopupActive1(!isPopupActive1);
                isPopupActive1 ? root.classList.add('popupIsActive') : root.classList.remove('popupIsActive');
            }}>
                Изменить
            </button>
            {isPopupActive1 ?
                <PopupAdmin setPopupActive={setPopupActive1} isPopupActive={isPopupActive1} textParagraph={TEXT_PARAGRAPH_UPDATE} formId={'formUpdateCarItem'} admin={true} action={"update"}  carId={carId} />
                : ''
            }
            <button className='btn' onClick={() => {
                setPopupActive2(!isPopupActive2);
                isPopupActive2 ? root.classList.add('popupIsActive') : root.classList.remove('popupIsActive');
            }}>
                Удалить
            </button>
            {isPopupActive2 ?
                <Popup carId ={carId} setPopupActive={setPopupActive2} isPopupActive={isPopupActive2} textParagraph={TEXT_PARAGRAPH_DELETE} formId={'formDeleteCarItem'} admin={true} action={"delete"} />
                : ''
            }
            <button className='btn' onClick={() => nav(`/car_salon/catalog/${category}/car/${carId}`)}>Подробнее</button>
        </div>
    )
}
export default ButtonsCarItemAdmin;