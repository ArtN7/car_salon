import { useNavigate } from 'react-router-dom';
import styles from './AboutCompany.module.css';

const AboutCompany = () => {
    const classButton= `btn ${styles.button}`;
    const nav = useNavigate();
    return (
        <div className={styles.container}>
            <h2>О компании</h2>
            <div className={styles.infoCompany}>
                <p>Мы возглавляем топ-3 автосалонов по количеству продаж. Наша компания продает автомобили более 20 лет на рынке. 
                    text text text
                </p>
                <button className={classButton} onClick={() => nav(`aboutcompany`, {replace: false})}>Больше информации</button>
            </div>
            <div className={styles.trust}>
                <h3>Почему нам доверяют?</h3>
                <ul className={styles.facts}>
                    <li className={styles.fact}>Продано более 12000 автомобилей.</li>
                    <li className={styles.fact}>У нас самый большой выбор</li>
                    <li className={styles.fact}>Самые низкие процентные ставки по автокредитам</li>
                    <li className={styles.fact}>Бесплатное ТО в течение 2-х лет после покупки</li>
                </ul>
            </div>
        </div>
    )
}
export default AboutCompany;