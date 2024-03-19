import AboutCompany from "./AboutCompany/AboutCompany";
import CarPromotion from "./carPromotion/CarPromotion";
import CarsCatalog from "./carsCatalog/CarsCatalog";
import Contacts from "./Contacts/Contacts";
import Feedbacks from "./Feedbacks/Feedbacks";
import Footer from "./Footer/Footer";
import Header from "./header/Header";
import styles from './Main.module.css'
const Main = () => {
    return(
        <div className={styles.mainContainer}>
            <Header/>
            <CarsCatalog/>
            <CarPromotion/>
            <Feedbacks/>
            <AboutCompany/>
            <Contacts/>
            <Footer/>
        </div>
    )
}   
export default Main;