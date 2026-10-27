import React from 'react';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Register from '../features/Auth/Pages/Register';
const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
            <Routes>
                <Route path='/register' element={<Register/>} />
            </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRoutes;
