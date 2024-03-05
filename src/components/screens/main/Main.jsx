import AboutCompany from "./AboutCompany/AboutCompany";
import CarPromotion from "./carPromotion/CarPromotion";
import CarsCatalog from "./carsCatalog/CarsCatalog";
import Feedbacks from "./Feedbacks/Feedbacks";
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
        </div>
    )
}   
export default Main;