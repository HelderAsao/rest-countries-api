import { BrowserRouter, Route, Routes } from "react-router-dom";
import Country from "./Country";
import Home from "./Home";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/country/:name" element={<Country/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;