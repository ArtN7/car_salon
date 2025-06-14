import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from './FormToOrder.module.css'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../Router';
const FormToOrder = ({ carName = "", usePesronalData, formId, formStyle, textParagraph }) => {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            phone: '',
            email: ''
        }
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const onSubmit = async (e) => {

        const q = query(collection(db, 'Customer'), where('name', '==', name), where('phone', '==', phone),
            where('mail', '==', mail));
        const querySnapshot = await getDocs(q);

        const q2 = query(collection(db, 'cars'), where('name', '==', carName));
        const querySnapshot1 = await getDocs(q2);

        if (querySnapshot.empty) {
            await addDoc(collection(db, 'users'), {
                name,
                phone,
                mail
            });
        }

        let serviceType = "";
        if (textParagraph === "Запишитесь на тест-драйв прямо сейчас!") {
            serviceType = "Тест-драйв"
        } else {
            serviceType = "Заинтересован покупкой";
        }

        let car = carName;
        if (car === "") {
            car = "Не определился";
        }

        await addDoc(collection(db, 'service'), {
            ServiceType: serviceType,
            carId: car,
            name: name,
            phone: phone,
            mail: mail

        });

        setIsFormValid(true);

    }
    const buttonSubmitClass = `btn ${styles.buttonSubmit}`
    return (
        <form id={formId} className={formStyle} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.containerLables}>
                <label>
                    <span className={styles.fieldName}>Имя</span>
                    <input {...register('name', { required: 'Заполните поле' })} onChange={(e) => setName(e.target.value)} type='text' placeholder='Имя' />
                    <p className={styles.errorMessage}>{errors.name?.message}</p>
                </label>
                <label>
                    <span className={styles.fieldName}>Телефон</span>
                    <input {...register('phone', { required: 'Заполните поле', pattern: { value: /^\(?([8]{1})?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, message: 'Введите номер(начинать с 8)' } })} onChange={(e) => setPhone(e.target.value)} type='text' placeholder='Телефон' />
                    <p className={styles.errorMessage}>{errors.phone?.message}</p>
                </label>
                <label>
                    <span className={styles.fieldName}>Почта</span>
                    <input {...register('email', { required: 'Заполните поле', pattern: { value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: 'Введите корректные имейл' } })} onChange={(e) => setMail(e.target.value)} type='text' placeholder='Почта' />
                    <p className={styles.errorMessage}>{errors.email?.message}</p>
                </label>
            </div>
            <div className={styles.containerSendButton}>
                <button type='submit' className={buttonSubmitClass}>Отправить</button>
                {isFormValid ? <p className={styles.confirmForm}>Отправлено</p> : ''}
            </div>
            {usePesronalData ? <p>Оставляя заявку, вы соглашаетесь на обработку персональных данных</p> : ''}
        </form>
    )
}
export default FormToOrder;