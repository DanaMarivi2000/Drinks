import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal"
const Layout = () => {
    return (
        <>
            <Header />
            <main className="main-principal">
                <Outlet />
            </main>
            <Modal/>
        </>
    )
}

export default Layout
