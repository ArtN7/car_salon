import styles from './Contact.module.css'

const Contacts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.map}>
                <iframe title='yandexMapSalon' src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=38.979401%2C45.044792&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjM5ODQ4MxJC0KDQvtGB0YHQuNGPLCDQmtGA0LDRgdC90L7QtNCw0YAsINCa0YDQsNGB0L3QsNGPINGD0LvQuNGG0LAsIDE3Ni8xIgoNNeobQhUBLjRC&z=17.29" allowfullscreen="true" className={styles.frameMap}/>
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
                        <p>г.Краснодар, ул.Красная, д.176/1</p>
                    </p>
                </address>
            </div>
        </div>
    )
}
export default Contacts;