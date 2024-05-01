import sortSelect from './sortsLogic';
import styles from './Sorts.module.css'
const Sorts = ({cars, setAllCars}) => {
    return (
        <div className={styles.container}>
            <label htmlFor={'selectSort'} className={styles.labelSort}>Сортировать:</label>
            <select id = {'selectSort'}  className={styles.select} onChange={() => setAllCars(() => [...sortSelect(cars)])}>
                <option value={"byDefault"}>По умолчанию</option>
                <option value={"sortByNameUp"}>По имени A-Z</option>
                <option value={"sortByNameDown"}>По имени Z-A</option>
                <option value={"sortByPriceUp"}>По цене вверх</option>
                <option value={"sortByPriceDown"}>По цене вниз</option>
                <option value={"sortByYearUp"}>Старее</option>
                <option value={"sortByYearDown"}>Новее</option>
                <option value={"sortByMileageUp"}>Пробег вверх</option>
                <option value={"sortByMileageDown"}>Пробег вниз</option>
                <option value={"sortByHorsePowewrUp"}>Лошадиные силы вверх</option>
                <option value={"sortByHorsePowewrDown"}>Лошадиные силы вниз</option>
            </select>
        </div>
    )
}
export default Sorts;