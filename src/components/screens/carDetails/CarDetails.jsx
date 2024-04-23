import { useNavigate, useParams } from "react-router-dom";
import styles from "./CarDetail.module.css"
import Popup from "../../UI/popup/Popup";
import { useState } from "react";

const CarDetail = ({cars}) => {
    const nav = useNavigate();
    const { id } = useParams();
    const arrCars = Object.values(cars)[0];
    const buttonClass = `btn ${styles.button}`
    const [isPopupActive, setPopupActive] = useState(false);

    for (let i = 0; i < arrCars.length; i += 1){
        if (Number(id) === arrCars[i].id) {
            let categoryName = '';
            switch (arrCars[i].category) {
                case 'sedan':
                    categoryName = 'седан';
                    break;
                case 'crossover':
                    categoryName = 'кроссовер';
                    break;
                case 'coupe':
                    categoryName = 'купе';
                    break;
                case 'cabriolet':
                    categoryName = 'кабриолет';
                    break;
                default:
                    break;
            }
            const price = new Intl.NumberFormat("ru-RU", {
                style: 'currency', currency: 'RUB',
            }).format(arrCars[i].price);
            const mileage = new Intl.NumberFormat("ru-RU").format(arrCars[i].mileage) + ' км';
            const hp = new Intl.NumberFormat("ru-RU").format(arrCars[i].hp) + ' л.с.';

            const root = document.getElementById('root');
            isPopupActive ? root.classList.add('popupIsActive') : root.classList.remove('popupIsActive');
            const TEXT_PARAGRAPH = 'Введите данные для покупки автомобиля, и мы с вами свяжемся';
            const classOrderButton = `btn ${styles.orderButton}`
            return (
                <div>
                    <button className={buttonClass} onClick={()=> nav(-1)}>Назад</button>
                    <div className={styles.container}>
                        <div className={styles.imageInfo}>
                            <div className={styles.mainImage} style={{
                                backgroundImage:`url("${arrCars[i].url}")`,
                                }}>
                            </div>
                            <div className={styles.miniInfo}>
                                <h2>{arrCars[i].name}</h2>    
                                <p className={styles.miniCharacters}><span>Цена: </span>{price}</p>
                                <p className={styles.miniCharacters}><span>Пробег: </span>{mileage}</p>
                                <p className={styles.miniCharacters}><span>Мощность: </span>{hp}</p>
                                <p className={styles.miniCharacters}><span>Кузов: </span>{categoryName}</p>
                                <button className={classOrderButton} onClick={() => {
                                        setPopupActive(!isPopupActive);
                                        isPopupActive ? root.classList.add('popupIsActive') : root.classList.remove('popupIsActive');
                                    }}>Оформить
                                </button>
                                {isPopupActive ?  
                                    <Popup setPopupActive={setPopupActive} isPopupActive={isPopupActive} textParagraph={TEXT_PARAGRAPH} formId={'formHeader'} usePesronalData={true}/>
                                    : ''
                                }
                            </div>
                        </div>
                        <div className={styles.moreInfo}>
                            <div className={styles.itemMoreInfo}>
                                <div className ={styles.itemMoreImg} style={{ backgroundImage:`url(${arrCars[i].urlEngine})` }}/>
                                <p>{arrCars[i].descriptionEngine}</p>
                            </div>
                            <div className={styles.itemMoreInfo}>
                                <div className ={styles.itemMoreImg} style={{ backgroundImage:`url(${arrCars[i].urlInterior})` }}/>
                                <p>{arrCars[i].descriptionInterior}</p>
                            </div>
                            <div className={styles.itemMoreInfo}>
                                <div className ={styles.itemMoreImg} style={{ backgroundImage:`url(${arrCars[i].urlExterior})` }}/>
                                <p>{arrCars[i].descriptionExterior}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className = {styles.error}>"Not found or insufficient data"</div>               
    )
}
export default CarDetail;