import styles from './TimerFunction.module.scss';

const TimerFunction = props => {


    const allTime = time => {
        let hours = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
        let minutes = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
        let seconds = ("0" + ((time / 10) % 60)).slice(-2);
        let miliseconds = ("0" + ((time / 10) % 1000)).slice(-3);

        return hours + ':' + minutes + ':'+ seconds + '.'+ miliseconds; 
    }
    
    return ( 
          <div className={styles.numbers}>
            {allTime(props.time)} 
          </div>
      );
}

export default TimerFunction;

