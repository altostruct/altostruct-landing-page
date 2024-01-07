import { PropsWithChildren } from "react"

const Button = (props: PropsWithChildren<{ label: string, onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void }>) => {
    const { label, onClick } = props
    return <a onClick={onClick} className="py-2 bg-black text-white cursor-pointer text-center flex px-8">
        <span className="m-auto">{label}</span>
    </a>
}
export default Button