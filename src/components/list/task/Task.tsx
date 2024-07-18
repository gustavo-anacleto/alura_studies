import ITaskModel from "../../../models/task.model";
import style from "../List.module.scss";

function Task({
  task,
  selectTask,
}: {
  task: ITaskModel;
  selectTask: Function;
}) {
  return (
    <li
      onClick={() => selectTask(task)}
      className={`${style.item} ${task.selected ? style.itemSelecionado : ""}`}
    >
      <h3>{task.title}</h3>
      <span>{task.time}</span>
    </li>
  );
}

export default Task;
