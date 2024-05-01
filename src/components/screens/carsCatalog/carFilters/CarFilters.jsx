import styles from './CarFilters.module.css';
import CarFilterInputs from './CarFilterInputs/CarFilterInputs';

const FILTER_ATTRIBUTES = [
    {
        "name":"Price",
        'inputName': 'По цене:',
    },
    {
        'name': 'Year',
        'inputName': 'По году:',
    },
    {
        'name': 'Mileage',
        'inputName': 'По пробегу:',
    }
]
const CarFilters = ({filterInputs, handleFilter, handleResetFilter}) => {
    const buttonFilter = `btn ${styles.buttonFilter}`;
    const buttonReset = `btn ${styles.buttonReset}`;


    return (
        <div className={styles.container}>
            <label htmlFor="filter" className={styles.label}>Фильтровать:</label>
            <form id='filter' className={styles.form}>
                <ul className={styles.listOfFilter}>
                    {filterInputs(FILTER_ATTRIBUTES).map(({id, name, inputName, minValue, maxValue})=> {
                        return <li key={id}><CarFilterInputs nameInput={inputName} minValue={minValue}
                        maxValue={maxValue} name={name}/></li>
                    })}
                </ul>
                <button className={buttonReset} onClick={(e) => handleResetFilter(e)}>Сбросить</button>
                <button className={buttonFilter} onClick={(e) => handleFilter(e)}>Показать</button>
            </form>
        </div>
    )
}
export default CarFilters;