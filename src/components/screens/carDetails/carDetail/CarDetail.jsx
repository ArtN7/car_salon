import {useNavigate, useParams } from "react-router-dom";
import cars from "../../../../carsBD.js"
import styles from "./CarDetail.module.css"
import CarDetailDescription from "../carDetailDescription/CarDetailDescription.jsx";

const CarDetail = () => {
    const nav = useNavigate();
    const { id } = useParams();
    for (let i = 0; i < cars.length; i += 1){
        if (Number(id) === cars[i].id) {
            return (
                <div className={styles.carDetail}>
                    <div className={styles.image} alt={cars[i].name} style={{
                        backgroundImage:`url(${cars[i].url})`,
                        }}>
                        <button onClick={()=> nav('/car_salon_3kurs')} className='btn btnBack'>Back</button>
                    </div>
                    <div className={styles.miniInfo}>
                        <h2>{cars[i].name}</h2>    
                        <p>{new Intl.NumberFormat('en-US', {
                            style: 'currency', currency: 'USD',
                        }).format(cars[i].price)}</p>
                        <p>{cars[i].description}</p>
                        <div>
                            <CarDetailDescription car={cars[i]}/>
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