import React, { useEffect, useState, useLayoutEffect } from "react"

export const Topbar = () => {
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
    <div className={"topbar " + (scrollPosition > 100 ? "shadow" : "")}>
      <img
        style={{ height: "5vh", margin: "auto", marginLeft: "4vh" }}
        src={require("../assets/logo-triangle.svg")}
      ></img>
    </div>
  )
}
