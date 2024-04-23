import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import CarItem from './carItem/CarItem';
import Sorts from './sorts/Sorts';
import CarFilters from './carFilters/CarFilters'
import styles from '../carsCatalog/CarsCatalog.module.css'


const CarsCatalog = ({cars}) => {
    const nav = useNavigate()
    const location = useLocation();
    const nameCategory = location.pathname.split('/').at(-1);
    cars = Object.values(cars)[0] //this str will be delete when i create json server
    const newCars = cars.filter(car => car.category === nameCategory)
    const [allCars, setAllCars] = useState(newCars);
    
    const buttonClass = `btn ${styles.button}`
    return (
        <div>
            <button className={buttonClass} onClick={() => nav('/car_salon_3kurs')}>Назад</button>
            <div id={'carsCatalogContainer'} className={styles.container}>
                <div className={styles.containerSortsFilters}>
                    <Sorts allCars={newCars} setAllCars={setAllCars}/>
                    <CarFilters cars={newCars} setAllCars={setAllCars}/>
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
export default CarsCatalog;