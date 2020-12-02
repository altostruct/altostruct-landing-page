import React, { useLayoutEffect, useState } from "react"
import DoubleRightOutlined from "@ant-design/icons/DoubleRightOutlined"

export const ScrollDown = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <DoubleRightOutlined
      rotate={90}
      className={"scroll-down-icon " + (scrollPosition > 100 ? "hide" : "")}
    />
  )
}
