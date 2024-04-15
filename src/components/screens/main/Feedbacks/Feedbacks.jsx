import styles from './Feedbacks.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Feedbacks = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return(
        <div id={'feedbacks'} className={styles.container}>
            <h2>Отзывы</h2>
            <Slider {...settings} className={styles.slider}>
                <div className={styles.feedbackContainer}>
                    <div className={styles.feedback}>
                        <span className={styles.containerImage}>
                            <img src={require("../../../UI/images/RobertDowneyJr.jpeg")} alt=""/>
                        </span>
                        <h3 className={styles.userName}>1Роберт Дауни младший</h3>
                        <p>
                            Отличный автосалон. Купил здесь 10 Lamborghini, 5 McLaren и 1 Bugatti. 
                            Вежливый персонал. Покупка автомобиля заняла в среднем 5 мин.
                        </p>
                    </div>
                </div>
                <div className={styles.feedbackContainer}>
                    <div className={styles.feedback}>
                        <span className={styles.containerImage}>
                            <img src={require("../../../UI/images/RobertDowneyJr.jpeg")} alt=""/>
                        </span>
                        <h3 className={styles.userName}>2Роберт Дауни младший</h3>
                        <p>
                            Отличный автосалон. Купил здесь 10 Lamborghini, 5 McLaren и 1 Bugatti. 
                            Вежливый персонал. Покупка автомобиля заняла в среднем 5 мин.
                        </p>
                    </div>
                </div>
                <div className={styles.feedbackContainer}>
                    <div className={styles.feedback}>
                        <span className={styles.containerImage}>
                            <img src={require("../../../UI/images/RobertDowneyJr.jpeg")} alt=""/>
                        </span>
                        <h3 className={styles.userName}>3Роберт Дауни младший</h3>
                        <p>
                            Отличный автосалон. Купил здесь 10 Lamborghini, 5 McLaren и 1 Bugatti. 
                            Вежливый персонал. Покупка автомобиля заняла в среднем 5 мин.
                        </p>
                    </div>
                </div>
                <div className={styles.feedbackContainer}>
                    <div className={styles.feedback}>
                        <span className={styles.containerImage}>
                            <img src={require("../../../UI/images/RobertDowneyJr.jpeg")} alt=""/>
                        </span>
                        <h3 className={styles.userName}>4Роберт Дауни младший</h3>
                        <p>
                            Отличный автосалон. Купил здесь 10 Lamborghini, 5 McLaren и 1 Bugatti. 
                            Вежливый персонал. Покупка автомобиля заняла в среднем 5 мин.
                        </p>
                    </div>
                </div>
                <div className={styles.feedbackContainer}>
                    <div className={styles.feedback}>
                        <span className={styles.containerImage}>
                            <img src={require("../../../UI/images/RobertDowneyJr.jpeg")} alt=""/>
                        </span>
                        <h3 className={styles.userName}>5Роберт Дауни младший</h3>
                        <p>
                            Отличный автосалон. Купил здесь 10 Lamborghini, 5 McLaren и 1 Bugatti. 
                            Вежливый персонал. Покупка автомобиля заняла в среднем 5 мин.
                        </p>
                    </div>
                </div>   
                <div className={styles.feedbackContainer}>
                    <div className={styles.feedback}>
                        <span className={styles.containerImage}>
                            <img src={require("../../../UI/images/RobertDowneyJr.jpeg")} alt=""/>
                        </span>
                        <h3 className={styles.userName}>6Роберт Дауни младший</h3>
                        <p>
                            Отличный автосалон. Купил здесь 10 Lamborghini, 5 McLaren и 1 Bugatti. 
                            Вежливый персонал. Покупка автомобиля заняла в среднем 5 мин.
                        </p>
                    </div>
                </div>  
            </Slider>
        </div>
    )
}
export default Feedbacks;