import styles from './CarDetailDescription.module.css';
const CarDetailDescription = ({car}) => {
    return (
        <div>
            <div className={styles.engine}>
                <div className ={styles.engineImg} style={{ backgroundImage:`url(${car.imageEngine})` }}/>
                <p>{car.descriptionEngine}</p>
            </div>
            <div className={styles.interior}>
                <div className ={styles.interiorImg} style={{ backgroundImage:`url(${car.imageInterior})` }}/>
                <p>{car.descriptionInterior}</p>
            </div>
            <div className={styles.exterior}>
                <div className ={styles.exteriorImg} style={{ backgroundImage:`url(${car.imageExterior})` }}/>
                <p>{car.descriptionExterior}</p>
            </div>
        </div>
    )
}
export default CarDetailDescription;