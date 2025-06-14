import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../../routes/login";
import Register from "../../routes/register";
import User from "../../routes/user";
import Main from "../screens/main/Main";
import CarDetails from "../screens/carDetails/CarDetails";
import PageNotFound from "../UI/pageNotFound/PageNotFound"
import CarsCatalog from '../../components/screens/carsCatalog/CarsCatalog'
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import Admin from "../../routes/admin";
import ListOfCars from "../../routes/listOfCars";
import CustomerRequests from "../../routes/customerRequests";

const db = getFirestore();

const Router = () => {

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getAllDocuments(name) {
        const collectionRef = collection(db, name);
        const querySnapshot = await getDocs(collectionRef);
        const array = [];
        querySnapshot.forEach((doc) => {
            array.push(doc.data());
        });
        return array;
    }

    useEffect(() => {
        const fetchCars = async () => {
            const cars = await getAllDocuments("cars");
            setCars(cars);
            setLoading(false);
        };
        fetchCars();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<PageNotFound />} />
                <Route path='/' element={<Navigate to="login" />} />
                <Route path='Login' element={<Login />} />
                <Route path='Register' element={<Register />} />
                <Route path='User' element={<User />} />
                <Route path='Admin' element={<Admin />} />
                <Route path='admin/listOfCars' element={<ListOfCars cars={cars} />} />
                <Route path='admin/customerRequests' element={<CustomerRequests db={db}/>} />
                <Route path='car_salon/' element={<Main cars={cars} />} />
                <Route path='car_salon/catalog/sedan' element={<CarsCatalog cars={cars} />} />
                <Route path='car_salon/catalog/crossover' element={<CarsCatalog cars={cars} />} />
                <Route path='car_salon/catalog/coupe' element={<CarsCatalog cars={cars} />} />
                <Route path='car_salon/catalog/cabriolet' element={<CarsCatalog cars={cars} />} />
                <Route path='car_salon/catalog/sedan/car/:id' element={<CarDetails cars={cars} />} />
                <Route path='car_salon/catalog/crossover/car/:id' element={<CarDetails cars={cars} />} />
                <Route path='car_salon/catalog/coupe/car/:id' element={<CarDetails cars={cars} />} />
                <Route path='car_salon/catalog/cabriolet/car/:id' element={<CarDetails cars={cars} />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
export { db };