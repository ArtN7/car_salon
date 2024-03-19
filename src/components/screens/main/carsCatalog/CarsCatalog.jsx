import CarItem from '../carItem/CarItem';
import cars from "../../../../carsBD"
import { useState } from 'react';
import Sorts from './sorts/Sorts';
import CarFilters from './carFilters/CarFilters'
import styles from '../carsCatalog/CarsCatalog.module.css'

const CarsCatalog = () => {
    const [allCars, setAllCars] = useState(cars);
    return (
        <div id={'carsCatalogContainer'} className={styles.container}>
            <div className={styles.containerSortsFilters}>
                <Sorts allCars={allCars} setAllCars={setAllCars}/>
                <CarFilters allCars={allCars} setAllCars={setAllCars}/>
            </div>
            <ul className={styles.catalogs}>
                {allCars.length > 0 ? 
                    allCars.map((car) => {
                    return <li key = {car.id}><CarItem car={car}/></li>
                    }) :
                     <h2 className={styles.notFoundCars}>К сожалению, автомобили не найдены, примените другие фильтры или сбросьте значения</h2>}
            </ul>
        </div>
    )
}
export default CarsCatalog;