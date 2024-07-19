import ITaskModel from "../../../models/task.model";
import style from "../List.module.scss";

interface IProps {
  task: ITaskModel;
  selectTask: Function;
}

function Task({ task, selectTask }: IProps) {
  const mountClassItem = (): string => {
    return `${style.item} ${task.selected ? style.itemSelecionado : ""} ${task.completed ? style.itemCompletado : ""}`;
  };

  return (
    <li onClick={() => !task.completed && selectTask(task)} className={mountClassItem()}>
      <h3>{task.title}</h3>
      <span>{task.time}</span>
      {task.completed && <span className={style.concluido}></span>} 
    </li>
  );
}

export default Task;
