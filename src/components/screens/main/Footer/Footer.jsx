import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.css'

const Footer = () => {
    const nav = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.socialContainer}>
                <div className={styles.social}>
                    <a href='https://t.me/username'>
                        <svg
                            viewBox="0 0 25 25"
                            fill="currentColor"
                            height="30px"
                            width="30px"
                            >
                            <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
                        </svg>
                    </a>
                </div>
                <div className={styles.social}>
                    <a href='https://vk.me/username'>
                        <svg
                            viewBox="0 0 22 23"
                            fill="currentColor"
                            height="30px"
                            width="30px"
                            >
                            <path d="M21.579 6.855c.14-.465 0-.806-.662-.806h-2.193c-.558 0-.813.295-.953.619 0 0-1.115 2.719-2.695 4.482-.51.513-.743.675-1.021.675-.139 0-.341-.162-.341-.627V6.855c0-.558-.161-.806-.626-.806H9.642c-.348 0-.558.258-.558.504 0 .528.79.65.871 2.138v3.228c0 .707-.127.836-.407.836-.743 0-2.551-2.729-3.624-5.853-.209-.607-.42-.852-.98-.852H2.752c-.627 0-.752.295-.752.619 0 .582.743 3.462 3.461 7.271 1.812 2.601 4.363 4.011 6.687 4.011 1.393 0 1.565-.313 1.565-.853v-1.966c0-.626.133-.752.574-.752.324 0 .882.164 2.183 1.417 1.486 1.486 1.732 2.153 2.567 2.153h2.192c.626 0 .939-.313.759-.931-.197-.615-.907-1.51-1.849-2.569-.512-.604-1.277-1.254-1.51-1.579-.325-.419-.231-.604 0-.976.001.001 2.672-3.761 2.95-5.04z" />
                        </svg>
                    </a>
                </div>
                <div className={styles.social}>
                    <a href='https://www.messenger.com/t/username'>
                        <svg
                            viewBox="0 0 25 25"
                            fill="currentColor"
                            height="30px"
                            width="30px"
                            >
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                        </svg>
                    </a>
                </div>
                <div className={styles.social}>
                    <a href='https://wa.me/phone?text=Здравствуйте!'>
                        <svg
                            fill="currentColor"
                            viewBox="0 0 15 18"
                            height="30px"
                            width="30px"
                            >
                            <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 00-.427.03l-1.588.702a.64.64 0 01-.898-.566l-.044-1.423a.639.639 0 00-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459l-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 01.578-.002l1.869 1.402a1.2 1.2 0 001.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 01-.578.002L7.281 5.98a1.2 1.2 0 00-1.735.32z" />
                        </svg>
                    </a>
                </div>
            </div>
            <nav className={styles.navigation}>
                <ul className={styles.navList}>
                    <li>
                        <button className={styles.navButton} onClick={() => nav('aboutcompany', {replace: false})}>О компании</button>
                    </li>
                    <li>
                        <button className={styles.navButton} onClick={() => nav('reviews', {replace: false})}>Отзывы</button>
                    </li>
                    <li>
                        <button className={styles.navButton} onClick={() => nav('contacts', {replace: false})}>Контакты</button>
                    </li>
                    <li>
                        <div className={styles.navLink}>
                            <a href='#head'>Вверх</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Footer;