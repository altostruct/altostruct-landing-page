import React from "react"

interface IProps {
  style: React.CSSProperties
  className?: string
}
const AltostructAngleLogo = (props: IProps) => {
  return <img {...props} src={require("../assets/logo-light.svg")}></img>
}

export const AltostructAngleCololessLogo = (props: IProps) => {
  return <img {...props} src={require("../assets/logo-triangle.svg")}></img>
}

export default AltostructAngleLogo
