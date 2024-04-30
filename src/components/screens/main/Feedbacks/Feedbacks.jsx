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
                            <img src={require("../../../UI/images/lazarev.jpeg")} alt="lazarev"/>
                        </span>
                        <h3 className={styles.userName}>Сергей Лазарев</h3>
                        <p>
                            Приобрел Mercedes-Benz у вас, и не могу быть счастливее! 
                            Очень внимательный персонал, огромный выбор моделей и качество обслуживания на высшем уровне! 
                        </p>
                    </div>
                </div>
                <div className={styles.feedbackContainer}>
                    <div className={styles.feedback}>
                        <span className={styles.containerImage}>
                            <img src={require("../../../UI/images/chebotina.jpeg")} alt="chebotina"/>
                        </span>
                        <h3 className={styles.userName}>Люся Чеботина</h3>
                        <p>
                            BMW M5 — это автомобиль, который просто завораживает своей мощью и комфортом. 
                            Он действительно делает впечатление и приносит непередаваемое удовольствие от вождения!
                        </p>
                    </div>
                </div>
                <div className={styles.feedbackContainer}>
                    <div className={styles.feedback}>
                        <span className={styles.containerImage}>
                            <img src={require("../../../UI/images/leps.jpeg")} alt="leps"/>
                        </span>
                        <h3 className={styles.userName}>Григорий Лепс</h3>
                        <p>
                            Покупка Mercedes-Benz GLS 600 стала для меня настоящим открытием! 
                            Этот автомобиль просто сказочный — комфорт, роскошь и производительность в одном флаконе!
                        </p>
                    </div>
                </div>
                <div className={styles.feedbackContainer}>
                    <div className={styles.feedback}>
                        <span className={styles.containerImage}>
                            <img src={require("../../../UI/images/instasamka.jpeg")} alt="instasamka"/>
                        </span>
                        <h3 className={styles.userName}>Instasamka</h3>
                        <p>
                            BMW 8 серии — это не просто автомобиль, это произведение искусства. 
                            Я влюблен в каждую его деталь, в его элегантность и динамизм. Просто восхитительно! 
                        </p>
                    </div>
                </div>
                <div className={styles.feedbackContainer}>
                    <div className={styles.feedback}>
                        <span className={styles.containerImage}>
                            <img src={require("../../../UI/images/miyagi_endshpil.jpeg")} alt="miyagi_endshpil"/>
                        </span>
                        <h3 className={styles.userName}>Miyagi & Эндшпиль</h3>
                        <p>
                            Mercedes-Benz CLA — это идеальный автомобиль для современного городского жителя. 
                            Его современный дизайн и передовые технологии делают его просто непревзойденным в своем классе! 
                        </p>
                    </div>
                </div>   
                <div className={styles.feedbackContainer}>
                    <div className={styles.feedback}>
                        <span className={styles.containerImage}>
                            <img src={require("../../../UI/images/buzova.jpeg")} alt="buzova"/>
                        </span>
                        <h3 className={styles.userName}>Ольга Бузова</h3>
                        <p>
                            BMW M5 Competition — это автомобиль, который просто оставляет вас без слов. 
                            Его мощь, производительность и спортивный характер создают неповторимые ощущения от вождения!
                        </p>
                    </div>
                </div>  
            </Slider>
        </div>
    )
}
export default Feedbacks;