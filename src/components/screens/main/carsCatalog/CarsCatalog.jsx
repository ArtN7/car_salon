import CarItem from '../car-item/CarItem';
import cars from "../../../../carsBD"
import { useState } from 'react';
import Sorts from '../sorts/Sorts';
const CarsCatalog = () => {
    const [allCars, setAllCars] = useState(cars);
    return (
        <div>
            <Sorts allCars={allCars} setAllCars={setAllCars}/>
            <ul>
                {allCars.map((car) => {
                    return <li key = {car.id}><CarItem car={car}/></li>
                })}
            </ul>
        </div>
    )
}
export default CarsCatalog;