"use client"
import { useEffect, useState } from "react"

import AuthModal from "@/components/AuthModal"
import UploadModal from "@/components/UploadModal"

function ModalProvider() {
    const [isMounted, setIsMounted] = useState(false)
    // Prevenir errores de hydration por el SSR, debemos asegurar que el modal se encuentre en el lado del cliente
    // Si este useEffect carga, quiere decir que estamos en el cliente
    useEffect(() => {
      setIsMounted(true)
    }, [])

    if(!isMounted) {
      return null
    }


  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  )
}

export default ModalProvider