import FormToOrder from '../../../UI/formToOrder/FormToOrder';
import styles from './CarPromotion.module.css'

const CarPromotion = () => {

    return (
        <div className={styles.container}>
            <div className={styles.promoContainer}>
                <h2>Акция</h2>
                <p className={styles.description}>При онлайн оформлении заявки на покупку автомобиля комплект зимней резины в подарок</p>
            </div>
            <p className={styles.personalData}>Оставляя заявку, вы соглашаетесь на обработку персональных данных</p>
            <FormToOrder pesronalData={false} formId={'promotion'} formStyle={styles.form}/>
        </div>
    )
}

export default CarPromotion;