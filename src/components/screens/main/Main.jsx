import AboutCompany from "./aboutCompany/AboutCompany";
import CarPromotion from "./carPromotion/CarPromotion";
import CarsCategory from "./carsCategory/CarsCategory";
import Contacts from "./contacts/Contacts";
import Feedbacks from "./feedbacks/Feedbacks";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import styles from './Main.module.css'



const Main = () => {
    return(
        <div className={styles.mainContainer}>
            <Header/>
            <CarsCategory/>
            <CarPromotion/>
            <Feedbacks/>
            <AboutCompany/>
            <Contacts/>
            <Footer/>
        </div>
    )
}   
export default Main;