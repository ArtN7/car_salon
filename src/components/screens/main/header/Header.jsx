import styles from '../header/Header.module.css'
import '../../../../styles/global.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const nav = useNavigate()
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li>Logo</li>
                <li><button className={styles.itemButton} onClick={() => nav('car_salon_3kurs/aboutcompany')}>О компании</button></li>
                <li><button className={styles.itemButton} onClick={() => nav('car_salon_3kurs/reviews')}>Отзывы</button></li>
                <li><button className={styles.itemButton} onClick={() => nav('car_salon_3kurs/contacts')}>Контакты</button></li>
                <li>
                    <div className={styles.orderAndPhone}>
                        <button className={styles.itemButton}>
                            Заказать
                        </button>
                        <a className={styles.phone} href="tel:+79189999999">8 (918) 999-99-99</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Header;