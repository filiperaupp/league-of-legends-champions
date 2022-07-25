import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
    
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/champions")
  }, [])
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}