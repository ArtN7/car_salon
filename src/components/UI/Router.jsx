import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../screens/main/Main";
import CarDetail from "../screens/carDetails/carDetail/CarDetail";
import PageNotFound from "../UI/pageNotFound/PageNotFound"
import CarsCatalog from '../../components/screens/carsCatalog/CarsCatalog'
import cars from '../../carsBD.json' //this str will be delete when i create json-server

//next strs i created for json-server
// let carsJson = await fetch('http://localhost:3001/cars');
// let cars = [];
// if (carsJson.ok) {
//     cars = await carsJson.json();
// } else {
//     alert("Ошибка HTTP: " + carsJson.status);
// }


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<PageNotFound/>} />
                <Route path='car_salon_3kurs/' element={<Main/>} />
                <Route path='car_salon_3kurs/catalog/sedan' element={<CarsCatalog cars={cars} categories={window.categories}/>}/>
                <Route path='car_salon_3kurs/catalog/sedan/car/:id' element={<CarDetail category={'sedan'}/>}/>
                <Route path='car_salon_3kurs/catalog/crossover' element={<CarsCatalog cars={cars} categories={window.categories}/>}/>
                <Route path='car_salon_3kurs/catalog/coupe' element={<CarsCatalog cars={cars} categories={window.categories}/>}/>
                <Route path='car_salon_3kurs/catalog/cabriolet' element={<CarsCatalog cars={cars} categories={window.categories}/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;