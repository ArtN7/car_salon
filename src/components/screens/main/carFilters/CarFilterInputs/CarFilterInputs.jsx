import styles from './CarFilterInputs.module.css'
const CarFilterInputs = ({nameInput, minValue, maxValue, setMinValue, setMaxValue}) => {
    return (
        <div>
            <label htmlFor="filter-price">{nameInput}</label>
            <div id ='filter-price' className={styles.inputsContainer}>
                <div className={styles.inputContainer}>
                    <span className={styles.minValue}>от</span>
                    <input className={styles.inputPrice} type="number" placeholder={minValue} onChange={(e) => {setMinValue(e.target.value)}}/>
                </div>
                <div>
                    <div className={styles.containerMaxValue}>
                        <span className={styles.maxValue}>до</span>
                        <span className={styles.signMaxValue}>₽</span>
                    </div>
                    <input className={styles.inputPrice} type="number" placeholder={maxValue} onChange={(e) => {setMaxValue(e.target.value)}}/>
                </div>
            </div>
        </div>
    )
}
export default CarFilterInputs;