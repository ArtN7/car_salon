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
                <span className={styles.promo}>Скидка</span>
                <img src={require(`../images/promoCarImages/${category.name.toLowerCase().split(' ').join('-')}.png`)} alt = 'promoCar'/>
                <div className={styles.info}>
                    <div className={styles.characters}>
                        <span>{category.name}</span>
                        <span>{category.hp} л.с.</span>
                    </div>
                    <button className = {buttonClass} onClick={() => nav(`/car_salon_3kurs/catalog/${category.category}/car/${category.id}`)}>Перейти &#x2192;</button>
                </div>
                
    
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <img src={require(`../images/category/${category}.png`)} alt = 'promoCar'/>
                <div className={styles.info}>
                    <span className={styles.name}>{categoryInRussian}</span>
                    <button className = {buttonClass} onClick={() => nav(`/car_salon_3kurs/catalog/${category}`)}>Перейти &#x2192;</button>
                </div>
            </div>
        )
    }


}

export default Category;