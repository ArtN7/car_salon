import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from './FormToOrder.module.css'
const FormToOrder = ({usePesronalData, formId, formStyle}) => {
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
        <form id={formId} className={formStyle} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.containerLables}>
                <label>
                    <span className={styles.fieldName}>Имя</span>
                    <input {...register('name', {required: 'Заполните поле'})} type='text' placeholder='Имя'/>
                    <p className={styles.errorMessage}>{errors.name?.message}</p>
                </label>
                <label>
                    <span className={styles.fieldName}>Телефон</span>
                    <input {...register('phone', {required: 'Заполните поле',  pattern: {value: /^\(?([8]{1})?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, message:'Введите номер(начинать с 8)'}})} type='text' placeholder='Телефон' />
                    <p className={styles.errorMessage}>{errors.phone?.message}</p>
                </label>
                <label>
                    <span className={styles.fieldName}>Почта</span>
                    <input {...register('email', {required: 'Заполните поле', pattern: {value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message:'Введите корректные имейл'}})} type='text' placeholder='Почта' />
                    <p className={styles.errorMessage}>{errors.email?.message}</p>
                </label>
            </div>
            <div className={styles.containerSendButton}>
                <button type='submit' className='btn'>Отправить</button>
                {isFormValid ? <p className={styles.confirmForm}>Отправлено</p>: ''}
            </div>
            {usePesronalData?<p>Оставляя заявку, вы соглашаетесь на обработку персональных данных</p>:''}
        </form>
    )
}
export default FormToOrder;