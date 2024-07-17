import style from './Button.module.scss'
function Button(props: { children?: React.ReactNode }) {
    return (
        <button className={style.button}>{props.children}</button>
    )

}

export default Button;