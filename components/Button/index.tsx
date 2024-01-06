import { PropsWithChildren } from "react"

const Button = (props: PropsWithChildren<{ label: string, onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void }>) => {
    const { label, onClick } = props
    return <a onClick={onClick} className="p-2 bg-black text-white cursor-pointer w-32 text-center ">{label} </a>
}
export default Button