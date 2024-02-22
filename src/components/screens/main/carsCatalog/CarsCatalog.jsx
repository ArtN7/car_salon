import CarItem from '../car-item/CarItem';
import cars from "../../../../carsBD"
import { useState } from 'react';
import Sorts from '../sorts/Sorts';
import styles from '../carsCatalog/CarsCatalog.module.css'
import CarFilters from '../carFilters/CarFilters';
const CarsCatalog = () => {
    const [allCars, setAllCars] = useState(cars);
    return (
        <div className={styles.container}>
            <div className={styles.containerSortsFilters}>
                <Sorts allCars={allCars} setAllCars={setAllCars}/>
                <CarFilters allCars={allCars} setAllCars={setAllCars}/>
            </div>
            <ul className={styles.catalogs}>
                {allCars.map((car) => {
                    return <li key = {car.id}><CarItem car={car}/></li>
                })}
            </ul>
        </div>
    )
}
export default CarsCatalog;