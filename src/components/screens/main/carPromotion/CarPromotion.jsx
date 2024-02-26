import { number, object, string } from 'yup'
import styles from './CarPromotion.module.css'
import { useState } from 'react'

let userSchema = object({
    userName: string().required(),
    phone: number().required(),
    email: string().email().required()
});

const CarPromotion = () => {
    const [isError, setError] = useState(true);
    const [form, setForm] = useState({
        userName: '',
        phone: '',
        email: ''
    })
    const handleChange = (e) => {
        const {name, value} = e.target; 
        setForm({
            ...form,
            [name]: value,
        })
    }
    const handleButtonClick = (e) => {
        e.preventDefault()
        setError(userSchema.isValidSync(form));
        const inputs = document.getElementById('promotionForm')?.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
        setForm({
            userName: '',
            phone: '',
            email: ''
        });
        // const resultOfForm = JSON.stringify(form);
    }
    return (
        <div className={styles.container}>
            <div>
                <h2>Акция</h2>
                <p className={styles.description}>При онлайн оформлении заявки на покупку автомобиля комплект зимней резины в подарок</p>
            </div>
            <p>Оставляя заявку, вы соглашаетесь на обработку персональных данных</p>
            <form id={'promotionForm'} className={styles.form} onSubmit={(e) => handleButtonClick(e)}>
                <input name={'userName'} placeholder='Имя' onChange={handleChange}/>
                <input name={'phone'} placeholder='Телефон' onChange={handleChange}/>
                <input name={'email'} placeholder='Почта' onChange={handleChange}/>
                {isError ? null : <p>Введите корректные значения. Поля не должны быть пустыми</p>}
                <button type='submit'>Отправить</button>
            </form>
        </div>
    )
}

export default CarPromotion;