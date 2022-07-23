import { Outlet, Route, Routes } from "react-router-dom";
import { ChampionDetail } from "./pages/ChampionDetail";
import Champions from "./pages/Champions";
import Layout from "./pages/Layout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/champions" element={<Outlet />}>
                    <Route index element={<Champions />}></Route>
                    <Route path=":id" element={<ChampionDetail />}></Route>
                </Route>
            </Route>
        </Routes>
    )
}