import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./core/Home.js"
import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import PrivateRouters from './auth/helper/PrivateRouters'


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home />}>
                {/*<PrivateRoutes path="/user/user/dashboard" exact component={} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
