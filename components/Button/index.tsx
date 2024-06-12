import classNames from "classnames"
import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react"
import { FaSpinner } from "react-icons/fa"

interface ButtonProps extends PropsWithChildren {
    variant?: "primary" | "secondary";
    className?: string
    loading?: boolean, icon?: ReactNode, link?: string, label: string, onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

const Button = (props: ButtonProps) => {
    const { variant = "primary", className, label, onClick, link, loading = false, icon } = props

    if (loading) {
        return <span onClick={onClick} className="py-2 bg-black text-white cursor-pointer text-center flex px-8">
            <span className="m-auto">{label} <FaSpinner className="animate-spin inline-block ml-2"></FaSpinner> </span>
        </span>
    }

    return <Link href={link} onClick={onClick} className={classNames("py-1 whitespace-nowrap text-md md:text-lg gap-4 border-4 border-black cursor-pointer text-center flex px-4 md:px-8", className, {
        "bg-black text-white": variant == "primary",
        "border-dashed": variant == "secondary"
    })}>
        <span className="m-auto">{label}</span>
        {icon && <span className="m-auto">{icon}</span>}
    </Link>
}
export default Button