import React from "react"

interface IProps {
  style: React.CSSProperties
  className?: string
}
const AltostructAngleLogo = (props: IProps) => {
  return (
    <svg
      {...props}
      viewBox="0 0 190 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M81.9981 133.975C88.2607 122.881 104.507 123.72 109.594 135.4C114.034 145.596 106.562 157 95.4407 157C83.6239 157 76.189 144.265 81.9981 133.975Z"
          fill="#FFE600"
        />
        <path
          d="M122.187 34.1344L100.682 84.0929C99.6072 86.5894 99.595 89.4158 100.648 91.9214L125.426 150.875C126.985 154.586 130.619 157 134.644 157H176.972C184.115 157 188.955 149.727 186.196 143.138L140.596 34.2263C137.188 26.0865 125.676 26.029 122.187 34.1344Z"
          fill="#FF6C6C"
        />
        <path
          d="M51.4143 157H10.7006C3.64469 157 -1.1921 149.89 1.39953 143.327L55.5014 6.32699C57.0093 2.50883 60.6974 0 64.8025 0H110.316C117.5 0 122.34 7.3498 119.502 13.9498L60.6012 150.95C59.0228 154.621 55.4104 157 51.4143 157Z"
          fill="#5057FF"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="190" height="180" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const AltostructAngleCololessLogo = (props: IProps) => {
  return (
    <svg
      {...props}
      viewBox="0 0 190 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M81.9981 133.975C88.2607 122.881 104.507 123.72 109.594 135.4C114.034 145.596 106.562 157 95.4407 157C83.6239 157 76.189 144.265 81.9981 133.975Z"
          fill="transparent"
          stroke="black"
        />
        <path
          d="M122.187 34.1344L100.682 84.0929C99.6072 86.5894 99.595 89.4158 100.648 91.9214L125.426 150.875C126.985 154.586 130.619 157 134.644 157H176.972C184.115 157 188.955 149.727 186.196 143.138L140.596 34.2263C137.188 26.0865 125.676 26.029 122.187 34.1344Z"
          fill="#FF6C6C"
          stroke="black"
        />
        <path
          d="M51.4143 157H10.7006C3.64469 157 -1.1921 149.89 1.39953 143.327L55.5014 6.32699C57.0093 2.50883 60.6974 0 64.8025 0H110.316C117.5 0 122.34 7.3498 119.502 13.9498L60.6012 150.95C59.0228 154.621 55.4104 157 51.4143 157Z"
          fill="transparent"
          stroke="black"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="190" height="180" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default AltostructAngleLogo
