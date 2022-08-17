import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from './pages/Home/index';
import { Dashboard } from './pages/Dashboard/index';


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
                {/*<Route exact path="/" element={}/>*/}
            </Routes>
        </BrowserRouter>
    );
};