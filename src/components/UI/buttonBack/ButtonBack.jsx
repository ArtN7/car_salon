import styles from './ButtonBack.module.css'
const ButtonBack = ({nav, buttonClass}) => {
    const newButtonClass = `${buttonClass} ${styles.newButtonClass}`
    return (
        <button className={newButtonClass} onClick={() => nav(-1)}>
            <svg class={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 128 128">
                <path stroke="#000" stroke-width="8" d="M51.011 96.989L18.0001 63.978 51.011 30.9671M18 64L115 64"></path>
            </svg>
        </button>
    )
}
export default ButtonBack;