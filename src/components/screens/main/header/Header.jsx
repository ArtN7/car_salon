import styles from '../header/Header.module.css'
import '../../../../styles/global.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const nav = useNavigate()
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