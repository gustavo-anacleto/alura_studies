import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/time_helper";
import ITaskModel from "../../models/task.model";
import Button from "../button/Button";
import Clock from "./clock/Clock";
import style from "./Timer.module.scss";

interface IProps {
  selectedTask: ITaskModel | undefined;
  finishTask: () => void;
}

function Timer({ selectedTask, finishTask }: IProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selectedTask?.time) setTime(timeToSeconds(selectedTask.time));
  }, [selectedTask]);

  function regressiveTime(timeToRegressive: number = 0) {
    if (timeToRegressive > 0) {
      setTimeout(() => {
        setTime(timeToRegressive - 1);
        regressiveTime(timeToRegressive - 1);
      }, 1000);
    } else {
      finishTask();
    }
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choose a card and start the timer</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressiveTime(time)}>Start!</Button>
    </div>
  );
}

export default Timer;
