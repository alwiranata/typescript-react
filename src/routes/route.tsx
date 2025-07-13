import { Route, Routes } from "react-router"
import HomePage from "../pages/HomePage"
import TermPage from "../pages/TermPage"
import ProductPage from "../pages/ProductPage"
import NotFoundPage from "../pages/NotFoundPage"
import ListProductPage from "../pages/ListProductPage"
import FormPage from "../pages/FormPage"


const RoutePage = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/term" element={<TermPage />} />
                <Route path="*" element ={<NotFoundPage/>} />
                <Route path="/product/:name/:id" element={<ProductPage/>} />
                <Route path="/list-product" element={<ListProductPage/>}/>
                <Route path="/form" element={<FormPage/>}></Route>
            </Routes>
        </>
    )
}

export default RoutePage