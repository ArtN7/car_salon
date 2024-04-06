import { useNavigate } from 'react-router-dom';
import styles from './Category.module.css'
const Category = ({category}) => {
    const nav = useNavigate();
    let categoryInRussian = category;
    switch (categoryInRussian) {
        case 'sedan':
            categoryInRussian = 'седан';
            break;
        case 'crossover':
            categoryInRussian = 'кроссовер';
            break;
        case 'coupe':
            categoryInRussian = 'купе';
            break;
        case 'cabriolet':
            categoryInRussian = 'кабриолет';
            break;
        default:
            break;
    }
    const buttonClass = `btn ${styles.button}`
    if (typeof category === 'object') {
        return (
            <div className={styles.container}>
                <span>{category.name}</span>
                <span>{category.hp}</span>
                <button className = {buttonClass} onClick={() => nav(`/car_salon_3kurs/catalog/${category.category}/car/${category.id}`)}>Перейти &#x2192;</button>
    
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <span>{categoryInRussian}</span>
                <button className = {buttonClass} onClick={() => nav(`/car_salon_3kurs/catalog/${category}`)}>Перейти &#x2192;</button>
    
            </div>
        )
    }


}

export default Category;