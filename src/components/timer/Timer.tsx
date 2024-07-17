import Button from "../button/Button";
import Clock from "./clock/Clock";
import style from './Timer.module.scss'

function Timer() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choose a card and start the timer</p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>

      <Button>Start!</Button>
    </div>
  );
}

export default Timer;
