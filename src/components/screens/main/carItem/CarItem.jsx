import styles from '../carItem/CarItem.module.css'
import ButtonsCarItem from './ButtonsCarItem';

const CarItem = ({car}) => {
    const price = new Intl.NumberFormat("ru-RU", {
        style: 'currency', currency: 'RUB',
    }).format(car.price);
    const mileage = new Intl.NumberFormat("ru-RU").format(car.mileage) + ' км';
    const hp = new Intl.NumberFormat("ru-RU").format(car.hp);
    return (
        <div className = {styles.container}>
            <h2 className={styles.name}>{car.name}</h2>
            <img src={car.url} alt = {car.alt} className={styles.image}/>
            <p className={styles.description}>
                <span>{car.description}</span>
            </p>
            <ul className={styles.listOfСharacteristics}>
                <li className={styles.year}>Год выпуска: {car.year}</li>
                <li className={styles.mileage}>Пробег: {mileage}</li>
                <li className={styles.hp}>Лошадиные силы: {hp}</li>
            </ul>
            <p className={styles.price}>Цена: {price}</p>
            <ButtonsCarItem carId={car.id}/>
        </div>
    )
}
export default CarItem;