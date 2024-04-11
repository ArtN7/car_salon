import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import CarItem from './carItem/CarItem';
import Sorts from './sorts/Sorts';
import CarFilters from './carFilters/CarFilters'
import styles from '../carsCatalog/CarsCatalog.module.css'


const CarsCatalog = ({cars, categories}) => {
    const nav = useNavigate()
    cars = Object.values(cars)[0] //this str will be delete when i create json server
    const location = useLocation();
    let nameCategory = location.pathname.split('/').at(-1);
    const categoryCars = cars[nameCategory]
    const [allCars, setAllCars] = useState(categoryCars);
    if (allCars.length === 0) return (
        <p>Cars not found</p>
    )
    const buttonClass = `btn ${styles.button}`
    for (let i = 0; i < categories.length; i += 1) {
        if (categories[i] === nameCategory) {
            return (
                <div>
                    <button className={buttonClass} onClick={() => nav('/car_salon_3kurs')}>Назад</button>
                    <div id={'carsCatalogContainer'} className={styles.container}>
                        <div className={styles.containerSortsFilters}>
                            <Sorts allCars={allCars} setAllCars={setAllCars}/>
                            <CarFilters cars={allCars} setAllCars={setAllCars}/>
                        </div>
                        <ul className={styles.catalogs}>
                            {allCars.length > 0 ? 
                                allCars.map((car) => {
                                return <li key = {car.id}><CarItem car={car}/></li>
                                }) :
                                <h2 className={styles.notFoundCars}>К сожалению, автомобили не найдены, примените другие фильтры или сбросьте значения</h2>}
                        </ul>
                    </div>
                </div>
            )
        } 
    }
}
export default CarsCatalog;