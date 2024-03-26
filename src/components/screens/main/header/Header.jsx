import styles from '../header/Header.module.css'
import '../../../../styles/global.css'
import { useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup';
import FormToOrder from '../../../UI/formToOrder/FormToOrder';

const Header = () => {
    const nav = useNavigate();
    return (
        <div id='head' className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.logo}>
                    <span>Краснодар</span> 
                    <span>Авто</span>
                </li>
                <li><button className={styles.itemButton} onClick={() => nav('aboutcompany')}>О компании</button></li>
                <li><button className={styles.itemButton} onClick={() => nav('reviews')}>Отзывы</button></li>
                <li><button className={styles.itemButton} onClick={() => nav('contacts')}>Контакты</button></li>
                <li>
                    <div className={styles.orderAndPhone}>
                        <Popup trigger={open => <button className={styles.itemButton}>Заказать</button> } >
                            <div className={styles.containerForm}>
                                <p>Оставьте свои данные и мы с вами свяжемся</p>
                                <FormToOrder pesronalData={true} formId={'headerOrder'} formStyle={styles.form}/>
                            </div>
                        </Popup>
                        <a className={styles.phone} href="tel:+79189999999">8 (918) 999-99-99</a>
                    </div>
                </li>
            </ul>
                    
        </div>
    )
}
export default Header;