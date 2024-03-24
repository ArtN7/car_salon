import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../screens/main/Main";
import CarDetail from "../screens/carDetails/carDetail/CarDetail";
import PageNotFound from "../UI/pageNotFound/PageNotFound"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='car_salon_3kurs/' element={<Main/>} />
                <Route path='car_salon_3kurs/car/:id' element={<CarDetail/>} />
                <Route path='*' element={<PageNotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;