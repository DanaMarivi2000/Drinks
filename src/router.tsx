import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./pages/IndexPage"
// import FavoritesPage from 
import Layout from "./layouts/Layout"
import {lazy, Suspense} from 'react'
import Spinner from "./components/Spinner"

const FavoritesPage=lazy(()=>import('./pages/FavoritesPage'))


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/' element={<IndexPage />} index/>
                    <Route path="/favorites" element={
                        <Suspense fallback={<Spinner/>}>
                        <FavoritesPage/>
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
