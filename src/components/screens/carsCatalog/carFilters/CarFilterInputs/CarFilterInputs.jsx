import styles from './CarFilterInputs.module.css'


const CarFilterInputs = ({nameInput, minValue, maxValue, setMinValue, setMaxValue}) => {
    return (
        <div className={styles.container}>
            <label htmlFor="filter" className={styles.nameInput}>{nameInput}</label>
            <div id ='filter' className={styles.inputsContainer}>
                <label className={styles.minValue}>
                    <input className={styles.input} type="number" placeholder={minValue} onChange={(e) => {setMinValue(e.target.value)}}/>
                </label>
                <label className={styles.maxValue}>
                    <input className={styles.input} type="number" placeholder={maxValue} onChange={(e) => {setMaxValue(e.target.value)}}/>
                </label>
            </div>
        </div>
    )
}
export default CarFilterInputs;