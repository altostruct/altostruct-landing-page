import style from "./Fullpage.module.scss"

interface IProps {
  children: any
}

function Fullpage(props: IProps) {
  return <div className={style["fullpage-container"]}>{props.children}</div>
}

function FullpagePage(props: IProps) {
  return <div className={style.fullpage}>{props.children}</div>
}

export default Object.assign(Fullpage, { Page: FullpagePage })
