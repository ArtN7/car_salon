import { useNavigate } from "react-router-dom";
import style from "../CustomerRequest/CustomerRequest.module.css"

const CustomerRequest = ({ request }) => {

    const linkmail = "mailto:" + request.mail;
    const linkPhone = "tel:" + request.phone;
    return (
        <tr>
            <td>{request.name}</td>
            <td>{request.carId}</td>
            <td>{request.ServiceType}</td>
            <td><a href={linkmail}>{request.mail}</a></td>
            <td><a href={linkPhone}>{request.phone}</a></td>
        </tr>
    )
}

export default CustomerRequest;