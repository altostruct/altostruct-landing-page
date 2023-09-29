import { ReactNode } from "react";
import Image from "next-image-export-optimizer";


interface CardProps {
    title?: string;
    children?: ReactNode
}

function Card(props: CardProps) {
    const {title, children} = props

    return <>
        <div className="p-4 md:p-8 bg-[#1f1f1f]">
            <div>
                {title && <div className="w-full flex">
                    <div className="w-full flex border-b border-gray-700 text-gray-400 justify-between">
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