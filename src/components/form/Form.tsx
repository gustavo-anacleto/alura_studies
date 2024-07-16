import React from "react";
import Button from "../button/Button";

class Form extends React.Component {
  render(): React.ReactNode {
    return (
      <form action="">
        <div>
          <label htmlFor="task"></label>
          <input
            id="task"
            name="task"
            type="text"
            placeholder="What do you want studie?"
          />
        </div>

        <div>
          <label htmlFor="time"></label>
          <input
            type="time"
            name="time"
            step="1"
            id="time"
            min="00:00:00"
            max="01:30:00"
          />
        </div>
        <Button />
      </form>
    );
  }
}

export default Form;
