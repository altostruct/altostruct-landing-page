import { useState, useEffect } from "react"
//
interface IProps {
  onTop: () => void
}

export const usePageY = (props: IProps) => {
  const [pageOffset, setPageOffset] = useState()

  const onChange = () => {
    const pos = window.pageYOffset

    if (pos === 0) props.onTop()
  }

  useEffect(() => {
    window.addEventListener("scroll", onChange)
    return () => window.removeEventListener("scroll", onChange)
  }, [window])
}
