import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../screens/main/Main";
import CarDetail from "../screens/carDetails/carDetail/CarDetail";
import PageNotFound from "../UI/pageNotFound/PageNotFound"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/carsalon' element={<Main />} />
                <Route path='/carsalon/car/:id' element={<CarDetail/>} />
                <Route path='*' element={<PageNotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;