import { PropsWithChildren } from "react"

const Button = (props: PropsWithChildren<{ link?: string, label: string, onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void }>) => {
    const { label, onClick, link } = props
    return <a href={link} onClick={onClick} className="py-2 bg-black text-white cursor-pointer text-center flex px-8">
        <span className="m-auto">{label}</span>
    </a>
}
export default Button