import AboutCompany from "./aboutCompany/AboutCompany";
import CarPromotion from "./carPromotion/CarPromotion";
import CarsInfo from "./carsInfo/CarsInfo";
import Contacts from "./contacts/Contacts";
import Feedbacks from "./feedbacks/Feedbacks";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import styles from './Main.module.css'



const Main = ({cars}) => {
    return(
        <div className={styles.mainContainer}>
            <Header/>
            <CarsInfo cars={cars}/>
            <CarPromotion/>
            <Feedbacks/>
            <AboutCompany/>
            <Contacts/>
            <Footer/>
        </div>
    )
}   
export default Main;