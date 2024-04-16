import styles from '../header/Header.module.css'
import '../../../../styles/global.css'
import { useState } from 'react';
import Popup from '../../../UI/popup/Popup';

const Header = () => {
    const root = document.getElementById('root');
    const [isPopupActive, setPopupActive] = useState(false);
    isPopupActive ? root.classList.add('popupIsActive') : root.classList.remove('popupIsActive');
    const TEXT_PARAGRAPH = 'Введите данные для покупки автомобиля, и мы с вами свяжемся'
    return (
        <div id='head' className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.logo}>
                    <span>BMV-Benz</span> 
                </li>
                <li><a href="#aboutCompany" className={styles.itemLink}>О компании</a></li>
                <li><a href="#feedbacks" className={styles.itemLink}>Отзывы</a></li>
                <li><a href="#contacts" className={styles.itemLink}>Контакты</a></li>
                <li>
                    <div className={styles.orderAndPhone}>
                        <button className={styles.itemButton} onClick={() => {
                                setPopupActive(!isPopupActive);
                                isPopupActive ? root.classList.add('popupIsActive') : root.classList.remove('popupIsActive');
                            }}>Оформить
                        </button>
                        {isPopupActive ?  
                            <Popup setPopupActive={setPopupActive} isPopupActive={isPopupActive} textParagraph={TEXT_PARAGRAPH} formId={'formHeader'} usePesronalData={true}/>
                            : ''
                        }
                        <a className={styles.phone} href="tel:+79189999999">8 (918) 999-99-99</a>
                    </div>
                </li>
            </ul>
                    
        </div>
    )
}
export default Header;