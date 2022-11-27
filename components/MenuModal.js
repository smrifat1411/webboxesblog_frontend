import React from "react"
import values from "../utils/values"

export default function MenuModal({ children }) {
  return (
    <div
      style={{
        position: `fixed`,
        zIndex: `90`,
        backgroundColor: values.COLORS.darkBackgroundColor,
        color: values.COLORS.lightTextColor,
        width: `100%`,
        height: `100%`,
        maxWidth: `100vw`,
        top: `0`,
      }}
      id="ModalWindow"
    >
      {children}
    </div>
  )
}
