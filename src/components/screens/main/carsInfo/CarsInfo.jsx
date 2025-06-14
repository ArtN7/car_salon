import styles from './CarsInfo.module.css'
import CarInfoItem from './carInfoItem/CarInfoItem'

const CAR_CATEGORIES = [
    {
        "name": "sedan",
        "ruName": "седан"
    },
    {
        "name": "crossover",
        "ruName": "кроссовер"
    },
    {
        "name": "coupe",
        "ruName": "купе"
    },
    {
        "name": "cabriolet",
        "ruName": "кабриолет"
    }
];

const CarsInfo = ({cars}) => {

    const PROMOTION_CARS = cars.filter(car => car?.promo === true);

    return(
        <div id={'carsCategory'} className={styles.container}>
            <ul className={styles.catalogs}>
                {PROMOTION_CARS.map((car) => {
                    return (
                        <li key = {car.id}>
                            <CarInfoItem car={car}/>
                        </li>
                    )
                })}
                {CAR_CATEGORIES.map((category, index) => {
                    return (
                        <li key = {index}>
                            <CarInfoItem category={category}/>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}
export default CarsInfo;