import sortSelect from '../sorts/sortsLogic';
const Sorts = ({allCars, setAllCars}) => {
    return (
        <div>
            <label htmlFor={'selectSort'}>
                <h2>Сортировать:</h2>
                <select id = {'selectSort'}  onChange={() => setAllCars(() => [...sortSelect(allCars)])}>
                    <option value={"byDefault"}>По умолчанию</option>
                    <option value={"sortByPriceUp"}>По цене вверх</option>
                    <option value={"sortByPriceDown"}>По цене вниз</option>
                    <option value={"sortByAZ"}>По алфавиту A-Z</option>
                    <option value={"sortByZA"}>По алфавиту Z-A</option>
                </select>
            </label>
        </div>
    )
}
export default Sorts;