import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import styles from './FormToOrder.module.css'
import { collection, addDoc, query, where, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../Router';
import CarDetailsAdmin from '../../screens/carDetailsAdmin/carDetailsAdmin';

const FormToOrderAdmin = ({ carId, action, cars = [] }) => {

    const [car, setCars] = useState();
    const [loading, setLoading] = useState(true);
    const [docId, setDocId] = useState('');
    const [docRef, setRef] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    async function getCar() {
        const q = query(collection(db, 'cars'), where('id', '==', carId));
        const querySnapshot = await getDocs(q);
        const array = [];
        querySnapshot.forEach((doc) => {
            array.push(doc.data());
            array.push(doc.id);
            array.push(doc.ref);
        });
        return array;
    }
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: ''
        }
    });
    useEffect(() => {
        const fetchCars = async () => {
            const cars = await getCar();
            if (cars.length > 2) {
                setCars(cars[0]);
                setDocId(cars[1]);
                setRef(cars[2]);
            }
            setLoading(false);
        };
        fetchCars();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const onSubmit = async (e) => {

        await deleteDoc(docRef);
        setIsFormValid(true);
    }

    const buttonSubmitClass = `btn ${styles.buttonSubmit}`;

    if (action === "delete") {
        return (
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.containerSendButton}>
                    <button type='submit' className={buttonSubmitClass}>Удалить</button>
                    <button className={buttonSubmitClass}>Отменить</button>
                    {isFormValid ? <p className={styles.confirmForm}>Удалено</p> : ''}
                </div>
            </form>

        )
    } else if (action === "update") {
        const structure = car;
        return (
            <CarDetailsAdmin carStructure={structure} docId={docId} cars={cars} />
        )
    } else {
        return (
            <CarDetailsAdmin cars={cars} />
        )
    }
}
export default FormToOrderAdmin;