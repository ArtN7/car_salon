import styles from '../car-item/CarItem.module.css'
import ButtonsCarItem from './ButtonsCarItem';

const CarItem = ({car}) => {
    const price = new Intl.NumberFormat("ru-RU", {
        style: 'currency', currency: 'RUB',
    }).format(car.price);
    const mileage = new Intl.NumberFormat("ru-RU").format(car.mileage);
    const hp = new Intl.NumberFormat("ru-RU").format(car.hp);
    return (
        <div className = {styles.container}>
            <h2 className={styles.name}>{car.name}</h2>
            <img src={car.url} alt = {car.alt} className={styles.image}/>
            <p className={styles.description}>{car.description}</p>
            <div>
                <p className={styles.year}>Год выпуска: {car.year}</p>
                <p className={styles.mileage}>Пробег: {mileage}</p>
                <p className={styles.hp}>Лошадиные силы: {hp}</p>
            </div>
            <p className={styles.price}>Цена: {price}</p>
            <ButtonsCarItem carId={car.id}/>
        </div>
    )
}
export default CarItem;