import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop, ClipPath, G, Pattern, Image, Use, Circle, Rect } from "react-native-svg"

export function Arrow(props) {
    return (
      <Svg
        width={16}
        height={15}
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M15 7H3.14l3.63-4.36a1.001 1.001 0 10-1.54-1.28l-5 6a1.19 1.19 0 00-.09.15c0 .05 0 .08-.07.13A1 1 0 000 8a1 1 0 00.07.36c0 .05 0 .08.07.13.026.052.056.102.09.15l5 6A1 1 0 006 15a1 1 0 00.77-1.64L3.14 9H15a1 1 0 100-2z"
          fill="#000"
        />
      </Svg>
    )
  }
  export function QuoteMIcon(props) {
    return (
      <Svg
        width={11}
        height={1}
        viewBox="0 0 11 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path d="M4.813 0H0v1h11V0H4.812z" fill="#30BDEB" />
      </Svg>
    )
  }
  
  export function QuotePIcon(props) {
    return (
      <Svg
        width={9}
        height={9}
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M5.063 3.938V0H3.938v3.938H0v1.124h3.938V9h1.124V5.062H9V3.938H5.062z"
          fill="#30BDEB"
        />
      </Svg>
    )
  }
  export function BackArrow(props) {
    return (
      <Svg
        width={35}
        height={35}
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Circle opacity={0.09} cx={17.6621} cy={17.6011} r={17} fill="#FCFCFC" />
        <Path
          d="M19.118 11.601l-6 6 6 6"
          stroke="black"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
  }
  export function EyeIcon(props) {
    return (
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M12 9.005a4 4 0 110 8 4 4 0 010-8zM12 5.5c4.613 0 8.596 3.15 9.701 7.564a.75.75 0 01-1.455.365 8.503 8.503 0 00-16.493.004.75.75 0 01-1.455-.363A10.003 10.003 0 0112 5.5z"
          fill="#323232"
        />
      </Svg>
    )
  }