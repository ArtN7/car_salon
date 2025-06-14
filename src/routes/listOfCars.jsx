import { useNavigate } from "react-router-dom";
import ButtonBack from "../components/UI/buttonBack/ButtonBack";
import { useState } from "react";
import CarItem from "../components/screens/carsCatalog/carItem/CarItem";
import styles from '../routes/listOfCars.module.css'
import '../styles/global.css';
import PopupAdmin from "../components/UI/popup/PopupAdmin.jsx";
import SearchBar from "../components/UI/searchBar/SearchBar.jsx";

const ListOfCars = ({ cars }) => {

    const nav = useNavigate();

    const [allCars, setAllCars] = useState(cars);

    const root = document.getElementById('root');
    const [isPopupActive, setPopupActive] = useState(false);

    isPopupActive ? root.classList.add('popupIsActive') : root.classList.remove('popupIsActive');
    const TEXT_PARAGRAPH = "Добавление автомобиля";

    const handleSearchLogic = (e) => {
        e.preventDefault();
        const inputValue = document.getElementById('inputSearch').value;
        const filtered = cars.filter(car =>
            car.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        setAllCars([...filtered]);
    };

    const handleSearchReset = (e) => {
        e.preventDefault();
        setAllCars(cars);
        const input = document.getElementById("inputSearch");
        input.value = '';
    }

    return (
        <div>            
            <div className={styles.containerHeaderListOfCars}>
                <ButtonBack nav={nav} buttonClass={"btn " + styles.button} />
                <h1>Список автомобилей</h1>
                <button className={styles.buttonAdd} onClick={() => {
                    setPopupActive(!isPopupActive);
                    isPopupActive ? root.classList.add('popupIsActive') : root.classList.remove('popupIsActive');
                }}>
                    Добавить автомобиль
                </button>

            </div>
            
            <SearchBar handleSearch={handleSearchLogic} handleReset={handleSearchReset}/>
            
            {!isPopupActive ?
                <ul className={styles.list}>
                    {allCars.length > 0 ?
                        allCars.map((car) => {
                            return <li key={car.id} className={styles.itemList}><CarItem car={car} admin={true} /></li>
                        }) :
                        <h2>К сожалению, автомобили не найдены</h2>}
                </ul> : ''
            }
            {isPopupActive ?
                <PopupAdmin cars = {allCars} setPopupActive={setPopupActive} isPopupActive={isPopupActive} textParagraph={TEXT_PARAGRAPH} action="add" admin={true} />
                : ''
            }

        </div>
    )

}
export default ListOfCars