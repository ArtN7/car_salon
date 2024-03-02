import styles from './AboutCompany.module.css'

const AboutCompany = () => {
    return (
        <div className={styles.container}>
            <h2>О компании</h2>
            <div className={styles.infoCompany}>
                <p>text</p>
                <a className='link' href={`/car_salon_3kurs/aboutcompany`}>Больше информации</a>
            </div>
            <div className={styles.trust}>
                <p>Почему нам доверяют?</p>
                <ul className={styles.facts}>
                    <li className={styles.fact}>Мы возглавляем топ-3 автосалонов по количеству продаж</li>
                    <li className={styles.fact}>У нас самый большой выбор</li>
                    <li className={styles.fact}>Самые низкие процентные ставки по автокредитам</li>
                    <li className={styles.fact}>бесплатное ТО в течение 2-х лет после покупки нового автомобиля</li>
                </ul>
            </div>
        </div>
    )
}
export default AboutCompany;