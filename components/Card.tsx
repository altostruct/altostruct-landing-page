import { ReactNode } from "react";


interface CardProps {
    title?: string;
    children?: ReactNode
}

function Card(props: CardProps) {
    const { title, children } = props

    return <>
        <div className="p-4 border  md:p-8">
            <div>
                {title && <div className="w-full flex">
                    <div className="w-full flex border-b border-gray-700 justify-between">
                        <h2 className="mb-3 text-3xl py-4">
                            {title}
                        </h2>
                    </div>
                </div>}
                {children}
            </div>
        </div >
    </>
}

export default Card