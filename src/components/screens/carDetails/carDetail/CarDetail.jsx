import {useNavigate, useParams } from "react-router-dom";
import cars from "../../../../carsBD.json"
import styles from "./CarDetail.module.css"

const CarDetail = () => {
    const nav = useNavigate();
    const { id } = useParams();
    let arrCars = Object.values(cars)[0];
    for (let i = 0; i < arrCars.length; i += 1){
        if (Number(id) === arrCars[i].id) {
            const price = new Intl.NumberFormat("ru-RU", {
                style: 'currency', currency: 'RUB',
            }).format(arrCars[i].price);
            // const mileage = new Intl.NumberFormat("ru-RU").format(arrCars[i].mileage) + ' км';
            // const hp = new Intl.NumberFormat("ru-RU").format(arrCars[i].hp);
            return (
                <div className={styles.container}>
                    <div className={styles.mainImage} alt={arrCars[i].name} style={{
                        backgroundImage:`url("${arrCars[i].url}")`,
                        }}>
                        <button className='btn' onClick={()=> nav(`/car_salon_3kurs/catalog/${arrCars[i].category}`, {replace: false})}>Назад</button>
                    </div>
                    <div className={styles.miniInfo}>
                        <h2>{arrCars[i].name}</h2>    
                        <p>{price}</p>
                        <p>{arrCars[i].description}</p>
                        <div className={styles.moreInfo}>
                            <div className={styles.item}>
                                <div className ={styles.itemImg} style={{ backgroundImage:`url()` }}/>
                                <p>{arrCars[i].descriptionEngine}</p>
                            </div>
                            <div className={styles.item}>
                                <div className ={styles.itemImg} style={{ backgroundImage:`url()` }}/>
                                <p>{arrCars[i].descriptionInterior}</p>
                            </div>
                            <div className={styles.item}>
                                <div className ={styles.itemImg} style={{ backgroundImage:`url()` }}/>
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