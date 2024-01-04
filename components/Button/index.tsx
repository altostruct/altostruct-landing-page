import { PropsWithChildren } from "react"

const Button = (props: PropsWithChildren<{ label: string, onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void }>) => {
    const { label, onClick } = props
    return <a onClick={onClick} className="p-2 border-2 border-black cursor-pointer hover:border-slate-900 w-32 text-center ">{label} </a>
}
export default Button