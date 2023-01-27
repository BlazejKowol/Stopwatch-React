import styles from './Button.module.scss';

const Button = () => {
    return (
        <div>
            <button className={styles.button}>Start</button>
            <button className={styles.button}>Stop</button>
            <button className={styles.button}>Reset</button>
        </div>
    );
};

export default Button;