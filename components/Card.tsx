import { ReactNode } from "react";
import Image from "next-image-export-optimizer";


interface CardProps {
    title?: string;
    children?: ReactNode
    img?: boolean
}

function Card(props: CardProps) {
    const { title, children, img } = props

    return <>
        <div className="p-4 md:p-8 bg-[#1f1f1f]">
            <div>
                {title && <div className="w-full flex">
                    <div className="w-full">
                        <h2 className="mb-3 border-b text-3xl py-4 border-gray-700 text-gray-400">
                            {title}
                        </h2>
                    </div>
                    {img && <Image
                        width={50}
                        height={50}
                        alt=""
                        src="/images/awsbadge.png"
                    ></Image>}
                </div>}
                {children}
            </div>
        </div >
    </>
}

export default Card