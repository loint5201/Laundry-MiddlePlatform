import { Route, Routes } from "react-router-dom";
import { routes } from ".";
import Login from "../admin-page/Login";
import Dashboard from "../admin-page/Dashboard";
import StoreDashboard from "../store-page/StoreDashboard";


function AppRoutes() {
    return (
        <Routes>
            <Route path={routes.login} element={<Login />} />
            <Route path={routes.admin} element={<Dashboard />} />
            <Route path={routes.store} element={<StoreDashboard />} />
            
        </Routes>
    )
}
export default AppRoutes;