"use client"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify"

export default function ToastNotification() {
  // render return
  return (
    <>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        theme="light"      />
    </>
  )
}
