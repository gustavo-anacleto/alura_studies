import style from "../List.module.scss";

function Task({ title, time }: { title: string; time: string }) {
    return (
    <li className={style.item}>
      <h3>{title}</h3>
      <span>{time}</span>
    </li>
  );
}

export default Task;
