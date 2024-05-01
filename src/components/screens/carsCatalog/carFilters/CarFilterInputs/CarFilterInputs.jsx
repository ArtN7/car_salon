import styles from './CarFilterInputs.module.css'


const CarFilterInputs = ({name, nameInput, minValue, maxValue}) => {
    return (
        <div className={styles.container}>
            <p className={styles.nameInput}>{nameInput}</p>
            <div id ='filterPartInputsContainer' className={styles.inputsContainer}>
                <label className={styles.minValue}>
                    <input name={name} className={styles.input} type="number" placeholder={minValue} />
                </label>
                <label className={styles.maxValue}>
                    <input name={name} className={styles.input} type="number" placeholder={maxValue} />
                </label>
            </div>
        </div>
    )
}
export default CarFilterInputs;