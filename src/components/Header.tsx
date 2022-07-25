import { Button } from "react-bootstrap";
import logo from "../assets/logo.png"
import "../styles/Header.css";

export default function Header() {
    return (
      <div className="header">
        <img className="me-5" src={logo} alt="" />
        {/* <Button>Campeões</Button>
        <Button className="ms-2">Items</Button> */}
      </div>
    )
}