import React, { FormEvent } from "react";
import { useState } from "react";
import Button from "../button/Button";
import style from "./Form.module.scss";
import ITaskModel from "../../models/task.model";

function Form({ setTasks }: { setTasks: Function }) {
  const initialState: ITaskModel = { title: "", time: "00:00" };

  const [formState, setFormState] = useState<ITaskModel>(initialState);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }

  function saveTask(e: FormEvent) {
    e.preventDefault();
    setTasks((tasks: ITaskModel[]) => [...tasks, formState]);
  }

  return (
    <form className={style.novaTarefa} onSubmit={saveTask}>
      <div className={style.inputContainer}>
        <label htmlFor="title">Add a new study</label>
        <input
          value={formState.title}
          onChange={handleChange}
          id="title"
          name="title"
          type="text"
          placeholder="What do you want studie?"
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="time">Time to conclude</label>
        <input
          value={formState.time}
          onChange={handleChange}
          type="time"
          name="time"
          step="1"
          id="time"
        />
      </div>
      <Button>Add new Task </Button>
    </form>
  );
}

export default Form;
