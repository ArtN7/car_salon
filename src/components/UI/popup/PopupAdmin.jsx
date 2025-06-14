import FormToOrderAdmin from '../formToOrder/FormToOrderAdmin';
import styles from './Popup.module.css'

const PopupAdmin = ({cars, setPopupActive, isPopupActive, textParagraph, formId, carName = "", action = "", carId = ""}) => {

    let popupStyle = styles.popup;
    if (action === "add" || action === "update") {
        popupStyle = styles.popupAdd;
    }
    console.log(cars);
    return (
        <div className={popupStyle}>
            <button className={styles.closeButton} onClick={() => setPopupActive(!isPopupActive)}>
                <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.9498 8.46447C17.3404 8.07394 17.3404 7.44078 16.9498 
                    7.05025C16.5593 6.65973 15.9261 6.65973 15.5356 7.05025L12.0001 10.5858L8.46455 7.05025C8.07402 6.65973 
                    7.44086 6.65973 7.05033 7.05025C6.65981 7.44078 6.65981 8.07394 7.05033 8.46447L10.5859 12L7.05033
                    15.5355C6.65981 15.9261 6.65981 16.5592 7.05033 16.9497C7.44086 17.3403 8.07402 17.3403 8.46455 
                    16.9497L12.0001 13.4142L15.5356 16.9497C15.9261 17.3403 16.5593 17.3403 16.9498 16.9497C17.3404 
                    16.5592 17.3404 15.9261 16.9498 15.5355L13.4143 12L16.9498 8.46447Z" fill="#000000"/>
                </svg>
            </button>
            <p className={styles.leaveDataParagraph}>{textParagraph}</p>   
            
            <FormToOrderAdmin carName = {carName} formId={formId} formStyle={styles.form} action={action} carId = {carId} cars={cars}/>
            
        </div> 
    )
        
}
export default PopupAdmin;