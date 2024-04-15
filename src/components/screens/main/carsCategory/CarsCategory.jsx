import styles from './CarsCategory.module.css'
import Category from './category/Category';

window.categories = ["sedan", "crossover", "coupe", "cabriolet"]
const PROMOTION_CARS = [
    {
        'id': 1,
        'name': 'BMW M5',
        'hp': 1000,
        'category': 'sedan',
        'url': '../images/promoCarImages/bmw-m5.png'
    },
    {
        'id': 2,
        'name': 'Mercedes-Benz CLA',
        'hp': 757,
        'category': 'sedan',
        'url': '../images/promoCarImages/mercedes-benz-cla.png'
    }
]
const CarsCategory = () => {
    return(
        <div id={'carsCategory'} className={styles.container}>
            <ul className={styles.catalogs}>
                {PROMOTION_CARS.concat(window.categories).map((category, index) => {
                    return (
                        <li key = {index}>
                            <Category category={category}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default CarsCategory;