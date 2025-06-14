import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import CarItem from './carItem/CarItem';
import Sorts from './sorts/Sorts';
import CarFilters from './carFilters/CarFilters'
import styles from '../carsCatalog/CarsCatalog.module.css'
import SearchBar from '../../UI/searchBar/SearchBar';
import ButtonBack from '../../UI/buttonBack/ButtonBack';

const CarsCatalog = ({cars}) => {
    const nav = useNavigate();
    const location = useLocation();
    const nameCategory = location.pathname.split('/').at(-1);

    const buttonClass = `btn ${styles.button}`;

    const newCars = cars.filter(car => car.category === nameCategory);
    const [allCars, setAllCars] = useState(newCars);
    let searchCars = newCars;

    if (newCars.length === 0) {
        return (
        <div id={'carsCatalogContainer'} className={styles.container}>
            <ButtonBack nav={nav} buttonClass={buttonClass}/>
            <div className={styles.containerSearchCars}>
                <h2 className={styles.notFoundCars}>К сожалению, автомобили не найдены</h2>
            </div>
        </div>
        )
    };

    const handleSearchLogic = (e) => {
        e.preventDefault();
        const inputValue = document.getElementById('inputSearch').value;
        const filtered = newCars.filter(car =>
            car.brand.toLowerCase().includes(inputValue.toLowerCase()) ||
            car.model.toLowerCase().includes(inputValue.toLowerCase())
        );
        searchCars = filtered;
        return filtered;
    };
    const handleFilterLogic = (e) => {
        e.preventDefault();
        const partInputs = document.querySelectorAll('#filterPartInputsContainer label input');
        let filtered = searchCars;
        for (let i = 0; i < partInputs.length - 1; i += 2 ) {
            const nameInput = partInputs[i].name.toLowerCase();
            let maxValue = partInputs[i + 1].value === '' ? 10000000000 : Number(partInputs[i + 1].value);
            filtered = filtered.filter((car) => {
                return car[nameInput] >= Number(partInputs[i].value) && car[nameInput] <= maxValue;
            });
        }
        return filtered;
    }
    const handleFiltersAll = (e) => {
        e.preventDefault();
        setAllCars([...handleFilterLogic(e).map(item2 => handleSearchLogic(e).filter(item1 => item1.id === item2.id)).flat()]);
    }
    const handleSearchReset = (e) => {
        e.preventDefault();
        setAllCars([...handleFilterLogic(e)]);
        searchCars = allCars;
        const input = document.getElementById("inputSearch");
        input.value = '';
    }

    const handleResetFilter = (e) => {
        e.preventDefault();
        setAllCars([...handleSearchLogic(e)]);
        const partInputs = document.querySelectorAll('#filterPartInputsContainer label input');
        if (partInputs !== undefined){
            partInputs.forEach((input) => {
                if (input.value !== '') input.value = '';
            });
        }
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
    
    return (
            <div id={'carsCatalogContainer'} className={styles.container}>
                <ButtonBack nav={nav} buttonClass={buttonClass}/>
                <div className={styles.containerSortsFilters}>
                    <Sorts cars={allCars} setAllCars={setAllCars}/>
                    <CarFilters cars={allCars} filterInputs={filterInputs} handleFilter={handleFiltersAll} handleResetFilter={handleResetFilter}/>
                </div>
                <div className={styles.containerSearchCars}>
                    <SearchBar handleSearch={handleFiltersAll} handleReset={handleSearchReset}/>
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