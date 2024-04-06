import { useNavigate } from 'react-router-dom';
import styles from './CarsCategory.module.css'
import Category from './category/Category';

window.categories = ["sedan", "crossover", "coupe", "cabriolet"]
const PROMOTION_CARS = [
    {
        'id': 1,
        'name': 'lambo',
        'hp': 1000,
        'category': 'sedan',
    },
    {
        'id': 2,
        'name': 'porsche',
        'hp': 757,
        'category': 'sedan',
    }
]
const CarsCategory = () => {
    return(
        <div className={styles.container}>
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