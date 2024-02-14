import CarsCatalog from "./carsCatalog/CarsCatalog";
import Header from "./header/Header";
import styles from './Main.module.css'
const Main = () => {
    return(
        <div className={styles.mainContainer}>
            <h1 className={styles.name}>Автосалон "Краснодар-авто"</h1>
            <Header/>
            <CarsCatalog/>
        </div>
    )
}   
export default Main;