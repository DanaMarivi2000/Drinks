import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal"
import { useEffect } from "react"
import { useAppStore } from "../stores/useApStore"
import Notification from "../components/Notification"

const Layout = () => {
    const {loadFromStorage}=useAppStore()
    
    useEffect(()=>{
        loadFromStorage()
    },[])

    return (
        <>
            <Header />
            <main className="main-principal">
                <Outlet />
            </main>
            <Modal/>
            <Notification/>
        </>
    )
}

export default Layout
