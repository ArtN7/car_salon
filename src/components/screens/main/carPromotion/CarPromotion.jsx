import styles from './CarPromotion.module.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const CarPromotion = () => {
    const {register, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            name: '',
            phone: '',
            email: ''
        }
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const onSubmit = () =>  {
        setIsFormValid(true);
    }
    return (
        <div className={styles.container}>
            <div className={styles.promoContainer}>
                <h2>Акция</h2>
                <p className={styles.description}>При онлайн оформлении заявки на покупку автомобиля комплект зимней резины в подарок</p>
            </div>
            <p className={styles.personalData}>Оставляя заявку, вы соглашаетесь на обработку персональных данных</p>
            <form id={'promotionForm'} className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <span className={styles.fieldName}>Имя</span>
                    <input {...register('name', {required: 'Заполните поле'})} type='text' placeholder='Имя'/>
                    <p className={styles.errorMessage}>{errors.name?.message}</p>
                </label>
                <label>
                    <span className={styles.fieldName}>Телефон</span>
                    <input {...register('phone', {required: 'Заполните поле',  pattern: {value: /^\(?([0-9]{1})?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, message:'Введите корректный номер(содержит 11 цифр)'}})} type='text' placeholder='Телефон' />
                    <p className={styles.errorMessage}>{errors.phone?.message}</p>
                </label>
                <label>
                    <span className={styles.fieldName}>Почта</span>
                    <input {...register('email', {required: 'Заполните поле', pattern: {value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message:'Введите корректные имейл'}})} type='text' placeholder='Почта' />
                    <p className={styles.errorMessage}>{errors.email?.message}</p>
                </label>
                <button type='submit' className='btn'>Отправить</button>
                {isFormValid ? <p className={styles.confirmForm}>Отправлено</p>: ''}
            </form>
        </div>
    )
}

export default CarPromotion;