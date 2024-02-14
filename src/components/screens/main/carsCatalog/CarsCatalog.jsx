import CarItem from '../car-item/CarItem';
import cars from "../../../../carsBD"
import { useState } from 'react';
import Sorts from '../sorts/Sorts';
import styles from '../carsCatalog/CarsCatalog.module.css'
const CarsCatalog = () => {
    const [allCars, setAllCars] = useState(cars);
    return (
        <div className={styles.containerCatalog}>
            <Sorts allCars={allCars} setAllCars={setAllCars}/>
            <ul className={styles.catalogs}>
                {allCars.map((car) => {
                    return <li key = {car.id}><CarItem car={car}/></li>
                })}
            </ul>
        </div>
    )
}
export default CarsCatalog;