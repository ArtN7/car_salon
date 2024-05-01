import styles from './SearchBar.module.css';

const SearchBar = ({handleSearch, handleReset}) => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input
                    id="inputSearch"
                    className={styles.input}
                    type="text"
                    placeholder="Введите марку или модель"
                />
                <div className={styles.containerButtons}>
                    <button type="submit" className='btn' onClick={(e) => handleSearch(e)}>Найти</button>
                    <button className='btn' onClick={(e) => handleReset(e)}>Сбросить</button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
