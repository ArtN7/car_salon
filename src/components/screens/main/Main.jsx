import AboutCompany from "./AboutCompany/AboutCompany";
import CarPromotion from "./carPromotion/CarPromotion";
import CarsCatalog from "./carsCatalog/CarsCatalog";
import Header from "./header/Header";
import styles from './Main.module.css'
const Main = () => {
    return(
        <div className={styles.mainContainer}>
            <Header/>
            <CarsCatalog/>
            <CarPromotion/>
            <AboutCompany/>
        </div>
    )
}   
export default Main;