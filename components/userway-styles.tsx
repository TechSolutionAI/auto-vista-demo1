"use client"

import { useEffect } from "react"

export function UserwayStyles() {
  useEffect(() => {
    // Add a style tag to ensure the UserWay widget stays in the bottom left corner
    const style = document.createElement("style")
    style.id = "userway-position-styles"
    style.innerHTML = `
      /* Force UserWay widget to bottom left */
      div[data-userway-position="2"] {
        left: 20px !important;
        right: auto !important;
        bottom: 20px !important;
        top: auto !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      // Clean up when component unmounts
      const styleToRemove = document.getElementById("userway-position-styles")
      if (styleToRemove) {
        styleToRemove.remove()
      }
    }
  }, [])

  return null
}
