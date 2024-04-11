import {useNavigate, useParams } from "react-router-dom";
import cars from "../../../../carsBD.json"
import styles from "./CarDetail.module.css"
import CarDetailDescription from "../carDetailDescription/CarDetailDescription.jsx";

const CarDetail = ({category}) => {
    const nav = useNavigate();
    const { id } = useParams();
    let arrCars = [];
    switch (category) {
        case 'sedan':
            arrCars = cars?.cars?.sedan;
            break;
        case 'crossover':
            arrCars = cars?.cars?.crossover;
            break;
        case 'cabriolet':
            arrCars = cars?.cars?.cabriolet;
            break;
        case 'coupe':
            arrCars = cars?.cars?.coupe;
            break;
        default:
            break;
    }

    for (let i = 0; i < arrCars.length; i += 1){
        if (Number(id) === arrCars[i].id) {
            return (
                <div className={styles.carDetail}>
                    <div className={styles.image} alt={arrCars[i].name} style={{
                        backgroundImage:`url(${arrCars[i].url})`,
                        }}>
                        <button className='btn btnBack' onClick={()=> nav(`/car_salon_3kurs/catalog/${category}`, {replace: false})}>Back</button>
                    </div>
                    <div className={styles.miniInfo}>
                        <h2>{arrCars[i].name}</h2>    
                        <p>{new Intl.NumberFormat('en-US', {
                            style: 'currency', currency: 'USD',
                        }).format(arrCars[i].price)}</p>
                        <p>{arrCars[i].description}</p>
                        <div>
                            <CarDetailDescription car={arrCars[i]}/>
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