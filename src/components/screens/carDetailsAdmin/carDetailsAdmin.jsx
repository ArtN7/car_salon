import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import styles from './carDetailsAdmin.module.css'
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../UI/Router';

const CarDetailsAdmin = ({ carStructure = "", docId = "", cars = [] }) => {

    let structure = carStructure;

    if (carStructure === "") {
        structure = {
            id: '',
            category: 'sedan',
            name: '',
            brand: '',
            model: '',
            price: '',
            promo: false,
            mileage: '',
            year: '',
            hp: '',
            url: '',
            description: '',
            descriptionEngine: '',
            descriptionExterior: '',
            descriptionInterior: '',
            urlEngine: '',
            urlExterior: '',
            urlInterior: '',
        }
    }

    const [id, setId] = useState(structure.id);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(structure.category);
    const [name, setName] = useState(structure.name);
    const [brand, setBrand] = useState(structure.brand);
    const [model, setModel] = useState(structure.model);
    const [price, setPrice] = useState(structure.price);
    let [promo, setPromo] = useState(structure.promo);
    const [mileage, setMileage] = useState(structure.mileage);
    const [year, setYear] = useState(structure.year);
    const [hp, setHP] = useState(structure.hp);
    const [url, setURL] = useState(structure.url);
    const [description, setDescription] = useState(structure.description);
    const [descriptionEngine, setDescriptionEngine] = useState(structure.descriptionEngine);
    const [descriptionExterior, setDescriptionExterior] = useState(structure.descriptionExterior);
    const [descriptionInterior, setDescriptionInterior] = useState(structure.descriptionInterior);
    const [urlEngine, setURLEngine] = useState(structure.urlEngine);
    const [urlExterior, setURLExterior] = useState(structure.urlExterior);
    const [urlInterior, setURLInterior] = useState(structure.urlInterior);


    async function getAllDocuments(name) {
        const collectionRef = collection(db, name);
        const querySnapshot = await getDocs(collectionRef);
        return querySnapshot.size;
    }

    useEffect(() => {
        const fetchCars = async () => {
            if (carStructure === "") {
                const cars = await getAllDocuments("cars");
                setId(cars + 1);
            }
            setLoading(false);
        };
        fetchCars();
    }, []);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: ''
        }
    });

    const alt = "carImage";

    const [isFormValid, setIsFormValid] = useState(false);

    const onSubmit = async (e) => {

        if (carStructure === "") {

            await addDoc(collection(db, 'cars'), {
                category,
                name,
                brand,
                model,
                price,
                promo,
                mileage,
                year,
                hp,
                url,
                description,
                descriptionEngine,
                descriptionExterior,
                descriptionInterior,
                urlEngine,
                urlExterior,
                urlInterior,
                alt,
                id,
            });
        } else {
            const docRef = doc(db, "cars", docId);
            if (promo === "on") {
                promo = true;
            }
            await updateDoc(docRef, {
                category,
                name,
                brand,
                model,
                price,
                promo,
                mileage,
                year,
                hp,
                url,
                description,
                descriptionEngine,
                descriptionExterior,
                descriptionInterior,
                urlEngine,
                urlExterior,
                urlInterior,
                alt,
                id,
            });
        }
        setIsFormValid(true);

    }

    const buttonSubmitClass = `btn ${styles.buttonSubmit}`;

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.containerLables}>
                <div className={styles.containerBlocks}>
                    <label>
                        <span className={styles.fieldNameMini}>Название</span>
                        <input className={styles.longInput} placeholder={structure.name}  {...register('name', { required: 'Заполните поле' })} onChange={(e) => setName(e.target.value)} type='text' />
                        <p className={styles.errorMessage}>{errors.name?.message}</p>
                    </label>
                </div>
                <div className={styles.containerBlocks}>
                    <label>
                        <span className={styles.fieldNameMini}>Бренд</span>
                        <input className={styles.middleInput} placeholder={structure.brand} onChange={(e) => setBrand(e.target.value)} type='text' />
                    </label>
                    <label>
                        <span className={styles.fieldNameMini}>Модель</span>
                        <input className={styles.middleInput} placeholder={structure.model} onChange={(e) => setModel(e.target.value)} type='text' p />
                    </label>
                </div>
                <div className={styles.containerBlocks}>
                    <label>
                        <span className={styles.fieldNameMini}>Категория</span>
                        <select className={styles.middleInput + " " + styles.select} onChange={(e) => setCategory(e.target.value)}>
                            <option selected={structure.category === "sedan"} value="sedan">Седан</option>
                            <option selected={structure.category === "crossover"} value="crossover">Кроссовер</option>
                            <option selected={structure.category === "coupe"} value="coupe">Купе</option>
                            <option selected={structure.category === "cabriolet"} value="cabriolet">Кабриолет</option>
                        </select>
                    </label>
                    <label>
                        <span className={styles.fieldNameMini}>Промо</span>
                        <input onChange={(e) => setPromo(e.target.value)} type='checkbox' />
                    </label>
                    <label>
                        <span className={styles.fieldNameMini}>Цена</span>
                        <input onChange={(e) => setPrice(e.target.value)} placeholder={structure.price} type='number' />
                    </label>
                </div>
                <div className={styles.containerBlocks}>
                    <label>
                        <span className={styles.fieldNameMini}>Год выпуска</span>
                        <input onChange={(e) => setYear(e.target.value)} placeholder={structure.year} type='number' />
                    </label>
                    <label>
                        <span className={styles.fieldNameMini}>Пробег</span>
                        <input onChange={(e) => setMileage(e.target.value)} placeholder={structure.mileage} type='number' />
                    </label>
                    <label>
                        <span className={styles.fieldNameMini}>Л/С</span>
                        <input onChange={(e) => setHP(e.target.value)} placeholder={structure.hp} type='number' />
                    </label>
                </div>
                <div className={styles.containerBlocks}>
                    <label>
                        <span className={styles.fieldName}>Описание авто</span>
                        <textarea className={styles.bigInput} onChange={(e) => setDescription(e.target.value)} placeholder={structure.description} type='text' />
                    </label>
                    <label>
                        <span className={styles.fieldName}>Описание двигателя</span>
                        <textarea className={styles.bigInput} onChange={(e) => setDescriptionEngine(e.target.value)} placeholder={structure.descriptionEngine} type='text' />
                    </label>
                    <label>
                        <span className={styles.fieldName}>Описание интерьера</span>
                        <textarea className={styles.bigInput} onChange={(e) => setDescriptionInterior(e.target.value)} placeholder={structure.descriptionInterior} type='text' />
                    </label>
                    <label>
                        <span className={styles.fieldName}>Описание экстерьера</span>
                        <textarea className={styles.bigInput} onChange={(e) => setDescriptionExterior(e.target.value)} placeholder={structure.descriptionExterior} type='text' />
                    </label>
                </div>
                <div className={styles.containerBlocks}>
                    <label>
                        <span className={styles.fieldName}>URL авто</span>
                        <input className={styles.longInput} onChange={(e) => setURL(e.target.value)} placeholder={structure.url} type='text' />
                    </label>
                    <label>
                        <span className={styles.fieldName}>URL двигателя</span>
                        <input className={styles.longInput} onChange={(e) => setURLEngine(e.target.value)} placeholder={structure.urlEngine} type='text' />
                    </label>
                    <label>
                        <span className={styles.fieldName}>URL интерьера</span>
                        <input className={styles.longInput} onChange={(e) => setURLInterior(e.target.value)} placeholder={structure.urlInterior} type='text' />
                    </label>
                    <label>
                        <span className={styles.fieldName}>URL экстерьера</span>
                        <input className={styles.longInput} onChange={(e) => setURLExterior(e.target.value)} placeholder={structure.urlExterior} type='text' />
                    </label>
                </div>
            </div>
            <div className={styles.containerSendButton}>
                <button type='submit' className={buttonSubmitClass}>Отправить</button>
                {isFormValid ? <p className={styles.confirmForm}>Отправлено</p> : ''}
            </div>
        </form>
    )
}
export default CarDetailsAdmin;