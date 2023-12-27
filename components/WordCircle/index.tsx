import { PropsWithChildren, RefObject, useCallback, useEffect, useRef, useState } from "react";
import style from "./styles.module.scss"
import useIsVisible from "hooks/useIsVisibile";


function WordCircle(props: PropsWithChildren) {
    const { children } = props;
    const path = useRef<SVGRectElement>(null)
    const element = useRef<HTMLSpanElement>(null)

    const visibilityCb = useCallback(() => {
        if (!path.current) return
        const length = path.current.getTotalLength();
        const scale = path.current.getBoundingClientRect().width / path.current.getBBox().width
        path.current.style.strokeDasharray = length * scale + ""
        path.current.style.strokeDashoffset = length * scale + ""

        path.current.animate([
            {
                strokeDashoffset: 0,
            }
        ],
            { duration: 1200, easing: "ease-out", iterations: 1, fill: "forwards" }
        )

    }, [path])

    useIsVisible(element, visibilityCb, { once: true })

    return <span ref={element} className="relative px-12 pb-[0.1em]">
        <div className="absolute w-full h-full top-0 left-0">
            <svg width="100%" preserveAspectRatio="none" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect ref={path} vectorEffect="non-scaling-stroke" x="0" y="0" width="100" height="100" strokeWidth={"10px"} stroke="black" />
            </svg>
        </div>
        {children}
    </span>
}
export default WordCircle