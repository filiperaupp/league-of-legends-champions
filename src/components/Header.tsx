import { Button } from "react-bootstrap";
import "../styles/Header.css";

export default function Header() {
    return (
      <div className="header">
        <img className="me-5" src="/src/assets/logo.png" alt="" />
        {/* <Button>Campeões</Button>
        <Button className="ms-2">Items</Button> */}
      </div>
    )
}