import styles from './CarFilters.module.css';
import cars from '../../../../carsBD'
import { useState } from 'react';
import CarFilterInputs from './CarFilterInputs/CarFilterInputs';



const getValue = (cars, key, value) => {
    return cars.reduce((acc, currentValue) => {
        switch (value) {
            case 'min':
                if (currentValue[key] < acc) {
                    acc = currentValue[key]
                }
                break;
            case 'max':
                if (currentValue[key] > acc) {
                    acc = currentValue[key]
                }
                break;
            default:
                break;
        }
        return acc;
    }, cars[0][key]);
}

const FILTER_ATTRIBUTES = {
    'price': getValue(cars, 'price', 'min'),
    'year': getValue(cars, 'year', 'min'),
    'mileage': getValue(cars, 'mileage', 'min'),
    'hp': getValue(cars, 'hp', 'min')
}
const clickButton = (cars, minPrice, maxPrice) => {
    return cars.filter((car) => {
        if (car.price >= minPrice && car.price <= maxPrice) return car;
    })
}

const CarFilters = ({allCars, setAllCars}) => {
    const [minPrice, setMinPrice] = useState(getValue(cars, 'price', 'min'));
    const [maxPrice, setMaxPrice] = useState(getValue(cars, 'price', 'max'));
    // const [minYear, setMinYear] = useState(getValue(cars, 'year', 'min'));
    // const [minMileage, setMinMileage] = useState(getValue(cars, 'mileage', 'min'));
    // const [minHp, setMinHp] = useState(getValue(cars, 'hp', 'min'));
    return (
        <div className={styles.container}>
            <label htmlFor="filter">Фильтровать:</label>
            <form id='filter'>
                <CarFilterInputs nameInput={'По цене:'} minValue={minPrice}
                    maxValue={maxPrice} setMinValue={setMinPrice} setMaxValue={setMaxPrice}/>
                <button className='btn' onClick={(e) => {
                    e.preventDefault();
                    setAllCars([...clickButton(allCars, minPrice, maxPrice)])
                }}>Показать</button>
            </form>
        </div>
    )
}
export default CarFilters;