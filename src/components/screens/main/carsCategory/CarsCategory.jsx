import styles from './CarsCategory.module.css'
import Category from './category/Category';
window.categories = ["sedan", "crossover", "coupe", "cabriolet"]
const CarsCategory = () => {
    return(
        <div className={styles.container}>
            <ul className={styles.catalogs}>
                {window.categories.map((category) => {
                    return (
                    <li key = {category.id}>
                        <Category category={category}/>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default CarsCategory;