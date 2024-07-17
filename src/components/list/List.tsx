import Task from "../../models/task.model";
import { formatHour_HH_MM_ss } from "../../pipes/date.pipe";
import style from './List.module.scss';

function List() {
    const tasks: Task[] = [
        { title: "JavaScript", time: new Date(24, 6, 16, 1, 30, 0) },
        { title: "TypeScript", time: new Date(24, 6, 16, 1, 10, 0) },
        { title: "React", time: new Date(24, 6, 16, 1, 0, 0) },
        { title: "Angular", time: new Date(24, 6, 16, 3, 0, 0) },
    ]

    function loadTasks() {
        return tasks.map((task, index) => (
            <li className={style.item} key={index}>
                <h3>{task.title}</h3>
                <span>{formatHour_HH_MM_ss(task.time)}</span>
            </li>
        ))
    }

    return (
        <aside className={style.listaTarefas}>
            <h2>Daily Studies</h2>
            <ul>
                {loadTasks()}
            </ul>
        </aside>
    )


}

export default List;