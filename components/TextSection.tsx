import { ReactNode } from "react";
import Button from "./Button/Button";
import TransitionSquares from "./TransistionSquares";
import Image from "next-image-export-optimizer";

interface TextSectionProps {
    text?: ReactNode;
    title?: ReactNode;
    image?: string;
    cta?: {
        label: string;
    }
    transitionSquares?: boolean
}

function TextSection(props: TextSectionProps) {
    const { transitionSquares, title, text, image, cta } = props

    return <>
        <div className="absolute z-0 right-32 top-8 md:hidden">
            {transitionSquares && <TransitionSquares></TransitionSquares>}
        </div>

        <div className="w-full relative text-gray-200 flex-col gap-6 md:flex-row flex ">
            <div className="md:w-3/5 flex-grow">
                <h2 className="mb-3 text-3xl md:text-4xl">
                    <span>
                        {title}
                    </span>
                </h2>
                {typeof text === "string" && <p className="text-xl md:text-2xl text-gray-200">{text}</p>}
                {typeof text !== "string" && <span className="text-xl md:text-2xl text-gray-200">{text}</span>}
                {cta && <div className="w-fit">
                    <Button type="primary" className="mt-6">{cta.label}</Button>
                </div>}
            </div>
            {image && <div className="md:w-2/5 flex-grow-0 relative">
                <div className="absolute inset-0 flex items-center">
                    <Image alt="" className="w-full h-full object-contain" src={image} width={1024} height={1024} />
                </div>
            </div>}
        </div>
    </>
}

export default TextSection