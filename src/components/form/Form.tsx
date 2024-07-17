import Button from "../button/Button";
import style from './Form.module.scss'

function Form() {
  return (
    <form className={style.novaTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Add a new study</label>
        <input
          id="task"
          name="task"
          type="text"
          placeholder="What do you want studie?"
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="time">Time to conclude</label>
        <input
          type="time"
          name="time"
          step="1"
          id="time"
          min="00:00:00"
          max="01:30:00"
        />
      </div>
      <Button>Add new Task </Button>
    </form>
  );
}

export default Form;
