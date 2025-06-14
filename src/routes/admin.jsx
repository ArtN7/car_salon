import { useNavigate } from "react-router-dom";
import styles from '../routes/admin.module.css'

export default function Admin() {

    const nav = useNavigate();

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.strHello}>Добро пожаловать!</h1>
            <div className={styles.buttonsContainer}>
                <button className={styles.button} onClick={() => nav(`listOfCars`, { replace: false })}>Список автомобилей</button>
                <button className={styles.button} onClick={() => nav(`customerRequests`, { replace: false })}>Заявки клиентов</button>
            </div>
        </div>
    )
}