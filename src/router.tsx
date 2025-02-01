import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./pages/IndexPage"
import FavoritesPage from './pages/FavoritesPage'
import Layout from "./layouts/Layout"
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/' element={<IndexPage />} index/>
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
