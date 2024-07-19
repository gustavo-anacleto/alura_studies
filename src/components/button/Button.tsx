import { ReactNode } from "react";
import style from "./Button.module.scss";
interface IProps {
  children: ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: IProps) {
  return (
    <button onClick={onClick} className={style.button}>
      {children}
    </button>
  );
}

export default Button;
