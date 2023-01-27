import styles from './components/Button/Button.module.scss';

const App = () => {
  return (
    <div>
      <h1>00:00:00.0</h1> {/*tu będzie komponent Timer */}
      <container> {/*tu będzie komponent ze wszystkimi buttonami */}
        <button className={styles.button}>Start</button>
        <button className={styles.button}>Stop</button>
        <button className={styles.button}>Reset</button>
      </container>
    </div>
  );
}

export default App;
