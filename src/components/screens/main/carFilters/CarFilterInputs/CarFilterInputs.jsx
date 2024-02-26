import styles from './CarFilterInputs.module.css'


const CarFilterInputs = ({nameInput, minValue, maxValue, setMinValue, setMaxValue}) => {
    return (
        <div>
            <label htmlFor="filter">{nameInput}</label>
            <div id ='filter' className={styles.inputsContainer}>
                    <span className={styles.minValue}>от</span>
                    <input className={styles.input} type="number" placeholder={minValue} onChange={(e) => {setMinValue(e.target.value)}}/>
                    <span className={styles.maxValue}>до</span>
                    <input className={styles.input} type="number" placeholder={maxValue} onChange={(e) => {setMaxValue(e.target.value)}}/>
            </div>
        </div>
    )
}
export default CarFilterInputs;