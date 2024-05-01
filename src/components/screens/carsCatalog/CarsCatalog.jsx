import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import CarItem from './carItem/CarItem';
import Sorts from './sorts/Sorts';
import CarFilters from './carFilters/CarFilters'
import styles from '../carsCatalog/CarsCatalog.module.css'
import SearchBar from '../../UI/searchBar/SearchBar';

let searchCars = [];
let filteredCars = [];
const CarsCatalog = ({cars}) => {
    const nav = useNavigate();
    const location = useLocation();
    const nameCategory = location.pathname.split('/').at(-1);
    cars = Object.values(cars)[0]; //this str will be delete when i create json server
    const newCars = cars.filter(car => car.category === nameCategory);
    searchCars = newCars;
    filteredCars = newCars;
    const [allCars, setAllCars] = useState(newCars);
    
    const handleSearch = (e) => {
        e.preventDefault();
        filteredCars = searchCars;
        const inputValue = document.getElementById('inputSearch').value;
        const filtered = filteredCars.filter(car =>
            car.brand.toLowerCase().includes(inputValue.toLowerCase()) ||
            car.model.toLowerCase().includes(inputValue.toLowerCase())
        );
        searchCars = filtered.map(item2 => filteredCars.filter(item1 => item1.id === item2.id)).flat();
        setAllCars(searchCars);
    };
    const handleSearchReset = (e) => {
        e.preventDefault();
        document.getElementById('inputSearch').value = '';
        handleFilter(e);
    }
    const handleFilter = (e) => {
        e.preventDefault();
        const partInputs = document.querySelectorAll('#filterPartInputsContainer label input');
        // handleResetFilter(e)
        for (let i = 0; i < partInputs.length - 1; i += 2 ) {
            const nameInput = partInputs[i].name.toLowerCase();
            let maxValue = partInputs[i + 1].value === '' ? 10000000000 : Number(partInputs[i + 1].value);
            filteredCars = filteredCars.filter((car) => {
                return car[nameInput] >= Number(partInputs[i].value) && car[nameInput] <= maxValue;
            });
        }
        setAllCars([...filteredCars])
    }
    const handleResetFilter = (e) => {
        e.preventDefault();
        const input = document.getElementById("inputSearch");
        console.log(input.value)
        if (input.value === '') setAllCars(newCars);
        else handleSearch(e)
        // if (partInputs !== undefined){
        //     partInputs.forEach((input) => {
        //         if (input.value !== '') input.value = '';
        //     });
        // }
    }

    const filterInputs = (filter_attributes) => {
        return filter_attributes.reduce((acc, currentValue, index) => {
            const name = currentValue.name.toLowerCase();
            const curCars = [...searchCars];
            curCars.sort((car1, car2) => car1[name] - car2[name]);
            let newData = {
                'id': index,
                'minValue': curCars[0][name],
                'maxValue': curCars.at(-1)[name],
            };
            acc.push(Object.assign(currentValue, newData));
            return acc;
        }, [])
    }

    const buttonClass = `btn ${styles.button}`;
    return (
            <div id={'carsCatalogContainer'} className={styles.container}>
                <button className={buttonClass} onClick={() => nav('/car_salon_3kurs')}>Назад</button>
                <div className={styles.containerSortsFilters}>
                    <Sorts cars={allCars}/>
                    <CarFilters cars={allCars} setAllCars={setAllCars} filterInputs={filterInputs} handleFilter={handleFilter} handleResetFilter={handleResetFilter}/>
                </div>
                <div className={styles.containerSearchCars}>
                    <SearchBar handleSearch={handleSearch} handleReset={handleSearchReset}/>
                    <ul className={styles.catalogs}>
                        {allCars.length > 0 ? 
                            allCars.map((car) => {
                                return <li key = {car.id}><CarItem car={car}/></li>
                            }) :
                            <h2 className={styles.notFoundCars}>К сожалению, автомобили не найдены, примените другие фильтры или сбросьте значения</h2>}
                    </ul>
                </div>
            </div>
    )
}
export default CarsCatalog;