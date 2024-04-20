import styles from './CarFilters.module.css';
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



const clickButton = (cars, MIN_MAX_VALUES) => {
    return cars
        .filter((car) => car.price >= MIN_MAX_VALUES[0][0] && car.price <= MIN_MAX_VALUES[0][1])
        .filter((car) => car.year >= MIN_MAX_VALUES[1][0] && car.year <= MIN_MAX_VALUES[1][1])
        .filter((car) => car.mileage >= MIN_MAX_VALUES[2][0] && car.mileage <= MIN_MAX_VALUES[2][1])
        .filter((car) => car.hp >= MIN_MAX_VALUES[3][0] && car.hp <= MIN_MAX_VALUES[3][1])

}

const CarFilters = ({cars, setAllCars}) => {

    const FILTER_ATTRIBUTES = [
        {
            'id': 1,
            'name': 'Price',
            'inputName': 'По цене:',
            'minValue': getValue(cars, 'price', 'min'),
            'maxValue': getValue(cars, 'price', 'max'),
        },
        {
            'id': 2,
            'name': 'Year',
            'inputName': 'По году:',
            'minValue': getValue(cars, 'year', 'min'),
            'maxValue': getValue(cars, 'year', 'max'),
        },
        {
            'id': 3,
            'name': 'Mileage',
            'inputName': 'По пробегу:',
            'minValue': getValue(cars, 'mileage', 'min'),
            'maxValue': getValue(cars, 'mileage', 'max'),
        },
        {
            'id': 4,
            'name': 'Horse power',
            'inputName': 'По силам:',
            'minValue': getValue(cars, 'hp', 'min'),
            'maxValue': getValue(cars, 'hp', 'max'),
        },
    ]

    const [minPrice, setMinPrice] = useState(FILTER_ATTRIBUTES[0].minValue);
    const [maxPrice, setMaxPrice] = useState(FILTER_ATTRIBUTES[0].maxValue);
    const [minYear, setMinYear] = useState(FILTER_ATTRIBUTES[1].minValue);
    const [maxYear, setMaxYear] = useState(FILTER_ATTRIBUTES[1].maxValue);
    const [minMileage, setMinMileage] = useState(FILTER_ATTRIBUTES[2].minValue);
    const [maxMileage, setMaxMileage] = useState(FILTER_ATTRIBUTES[2].maxValue);
    const [minHP, setMinHP] = useState(FILTER_ATTRIBUTES[3].minValue);
    const [maxHP, setMaxHP] = useState(FILTER_ATTRIBUTES[3].maxValue);

    const MIN_MAX_FUNC = [
        [setMinPrice, setMaxPrice],
        [setMinYear, setMaxYear],
        [setMinMileage, setMaxMileage],
        [setMinHP, setMaxHP]
    ]
    const MIN_MAX_VALUES = [
        [minPrice, maxPrice],
        [minYear, maxYear],
        [minMileage, maxMileage],
        [minHP, maxHP]
    ]

    const buttonFilter = `btn ${styles.buttonFilter}`
    const buttonReset = `btn ${styles.buttonReset}`

    const buttonFilterClick = (e) => {
        e.preventDefault();
        setAllCars([...clickButton(cars, MIN_MAX_VALUES)])        
    }

    const FILTER_INPUTS = document.getElementById('filter')?.querySelectorAll('input');
    const buttonResetClick = (e) => {
        e.preventDefault();
        if (FILTER_INPUTS !== undefined){
            FILTER_INPUTS.forEach((input) => {
                // if (input.value !== '') input.value = '';
            });
        }
        MIN_MAX_FUNC.forEach(([minFunc, maxFunc], count) => {
            minFunc(FILTER_ATTRIBUTES[count].minValue);
            maxFunc(FILTER_ATTRIBUTES[count].maxValue)
        })
        setAllCars(cars);
    }
    return (
        <div className={styles.container}>
            <label htmlFor="filter" className={styles.label}>Фильтровать:</label>
            <form id='filter' className={styles.form}>
                <ul className={styles.listOfFilter}>
                    {FILTER_ATTRIBUTES.map(({id, inputName, minValue, maxValue})=> {
                        return <li key={id}><CarFilterInputs nameInput={inputName} minValue={minValue}
                        maxValue={maxValue} setMinValue={MIN_MAX_FUNC[id - 1][0]} setMaxValue={MIN_MAX_FUNC[id - 1][1]}/></li>
                    })}
                </ul>
                <button className={buttonReset} onClick={(e) => buttonResetClick(e)}>Сбросить</button>
                <button className={buttonFilter} onClick={(e)=> buttonFilterClick(e)}>Показать</button>
            </form>
        </div>
    )
}
export default CarFilters;