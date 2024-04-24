import styles from './CarFilterInputs.module.css'


const CarFilterInputs = ({nameInput, minValue, maxValue, setMinValue, setMaxValue}) => {
    return (
        <div className={styles.container}>
            <label htmlFor="filter" className={styles.nameInput}>{nameInput}</label>
            <div id ='filter' className={styles.inputsContainer}>
                <div className={styles.minMaxValue}>
                    <span className={styles.minValue}>от</span>
                    <span className={styles.maxValue}>до</span>
                </div>
                <input className={styles.input} type="number" placeholder={minValue} onChange={(e) => {setMinValue(e.target.value)}}/>
                <input className={styles.input} type="number" placeholder={maxValue} onChange={(e) => {setMaxValue(e.target.value)}}/>
            </div>
        </div>
    )
}
export default CarFilterInputs;