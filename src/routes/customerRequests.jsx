import { useNavigate } from "react-router-dom";
import ButtonBack from "../components/UI/buttonBack/ButtonBack";
import styles from "../routes/customerRequests.module.css";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import CustomerRequest from "../components/screens/main/CustomerRequest/CustomerRequest";

const CustomerRequests = ({ db }) => {

    const [customerRequest, setcustomerRequest] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getCustomerRequests(name) {
        const collectionRef = collection(db, name);
        const querySnapshot = await getDocs(collectionRef);
        const array = [];
        querySnapshot.forEach((doc) => {
            if (!doc.data.ready) {
                array.push(doc.data());
            }
        });
        return array;
    }

    useEffect(() => {
        const fetchCustomersRequests = async () => {
            const users = await getCustomerRequests("service");
            setcustomerRequest(users);
            setLoading(false);
        };
        fetchCustomersRequests();
    }, []);

    const nav = useNavigate();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className={styles.containerHeaderListOfCars}>
                <ButtonBack nav={nav} buttonClass={"btn " + styles.button} />
                <h1 className={styles.header}>Список Заявок</h1>
            </div>

            <table className={styles.table}>
                <tr>
                    <th>Имя</th>
                    <th>Автомобиль</th>
                    <th>Заявка</th>
                    <th>Почта</th>
                    <th>Телефон</th>
                </tr>
                {customerRequest.length > 0 ?
                    customerRequest.map((request) => {
                        return <CustomerRequest request={request} />
                    }) :
                    <h2>К сожалению, заявки не найдены</h2>}

            </table>
            <div>

            </div>
        </div>
    )
}

export default CustomerRequests;