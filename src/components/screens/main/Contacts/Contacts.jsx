import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div id={'contacts'} className={styles.container}>
            <div className={styles.map}>
                <iframe title='yandexMapSalon' src="https://yandex.ru/map-widget/v1/?ll=39.031207%2C45.019628&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjQxMDQzORJO0KDQvtGB0YHQuNGPLCDQmtGA0LDRgdC90L7QtNCw0YAsINCh0YLQsNCy0YDQvtC_0L7Qu9GM0YHQutCw0Y8g0YPQu9C40YbQsCwgMTQ5IgoN9R8cQhUZFDRC&z=16.68" allowFullScreen={true} className={styles.frameMap}></iframe>
            </div>
            <div className={styles.contactContainer}>
                <h2>Контакты</h2>
                <address className={styles.contacts}>
                    <p className={styles.contact}>
                        <span>Телефон:</span>
                        <a href='tel:89189999999999'>8 (918) 999-99-99</a>
                    </p>
                    <p className={styles.contact}> 
                        <span>Почта:</span>
                        <a href='mailto:avtosalonkrd@mail.ru'>avtosalonkrd@mail.ru</a>
                    </p>
                    <p className={styles.contact}>
                        <span>Адрес:</span>
                        <p>г.Краснодар, ул.Ставропольская, 149</p>
                    </p>
                </address>
            </div>
        </div>
    )
}
export default Contacts;