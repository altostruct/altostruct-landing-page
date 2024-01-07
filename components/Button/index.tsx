import { PropsWithChildren } from "react"
import { FaSpinner } from "react-icons/fa"

const Button = (props: PropsWithChildren<{ loading?: boolean, link?: string, label: string, onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void }>) => {
    const { label, onClick, link, loading = false } = props

    if (loading) {
        return <span onClick={onClick} className="py-2 bg-black text-white cursor-pointer text-center flex px-8">
            <span className="m-auto">{label} <FaSpinner className="animate-spin inline-block ml-2"></FaSpinner> </span>
        </span>
    }

    return <a href={link} onClick={onClick} className="py-2 bg-black text-white cursor-pointer text-center flex px-8">
        <span className="m-auto">{label}</span>
    </a>
}
export default Button