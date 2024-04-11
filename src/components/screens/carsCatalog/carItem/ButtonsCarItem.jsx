import styles from './ButtonsCarItem.module.css'
import '../../../../styles/global.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Popup from '../../../UI/popup/Popup';
const ButtonsCarItem = ({carId}) => {
    const nav = useNavigate();
    const root = document.getElementById('root');
    const [isPopupActive1, setPopupActive1] = useState(false);
    const [isPopupActive2, setPopupActive2] = useState(false);
    isPopupActive1 || isPopupActive2 ? root.classList.add('popupIsActive') : root.classList.remove('popupIsActive');

    const TEXT_PARAGRAPH_Order = 'Введите данные для покупки автомобиля, и мы с вами свяжемся';
    const TEXT_PARAGRAPH_TEST = 'Запишитесь на тест-драйв прямо сейчас!';

    return (
        <div className={styles.buttons}>
            <button className='btn' onClick={() => {
                    setPopupActive1(!isPopupActive1);
                    isPopupActive1 ? root.classList.add('popupIsActive') : root.classList.remove('popupIsActive');
                }}>
                Оформить
            </button>
            {isPopupActive1 ?   
                <Popup setPopupActive={setPopupActive1} isPopupActive={isPopupActive1} textParagraph={TEXT_PARAGRAPH_Order} formId={'formOrderCarItem'} usePesronalData={true}/>
                : ''
            }
            <button className='btn' onClick={() => {
                    setPopupActive2(!isPopupActive2);
                    isPopupActive2 ? root.classList.add('popupIsActive') : root.classList.remove('popupIsActive');
                }}>
                Тест-драйв
            </button>
            {isPopupActive2 ?   
                <Popup setPopupActive={setPopupActive2} isPopupActive={isPopupActive2} textParagraph={TEXT_PARAGRAPH_TEST} formId={'formTestDriveCarItem'} usePesronalData={true}/>
                : ''
            }
            <button className='btn' onClick={() => nav(`car/${carId}`, { replace: false })}>Подробнее</button>
        </div>
    )
}
export default ButtonsCarItem;