"use client"

import { useEffect, useState } from "react"

function ModalProvider() {
    const [isMounted, setIsMounted] = useState(false)
    // Prevenir errores de hydration por el SSR, debemos asegurar que el modal se encuentre en el lado del cliente
    useEffect(() => {

    }, [])

  return (
    <div>ModalProvider</div>
  )
}

export default ModalProvider