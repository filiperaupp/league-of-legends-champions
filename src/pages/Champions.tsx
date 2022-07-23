import axios from "axios";
import "../styles/Champion.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { IChampion } from "../interfaces/IChampion";
import Champion from "../components/Champion";
import Offcanvas from "react-bootstrap/Offcanvas";
import Header from "../components/Header";
import { Link } from "react-router-dom";

// adicionar filtro
// mostrar detalhes em um overlay
// Página com detalhamento completo do campeão (skills, stats, etc)

// blur, types, info

// controller fighter mage marksman slayer tank specialist

function Champions() {
  const [champions, setChampions] = useState<IChampion[]>([]);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<IChampion>();

  const handleClose = () => setShow(false);
  const handleShow = (id: string) => {
    setShow(true);
    getChampionDetail(id);
  };

  const showDetails = () => {
    console.log("ae");
  };

  const getChampionDetail = (id: string) => {
    axios
      .get(
        `http://ddragon.leagueoflegends.com/cdn/12.13.1/data/pt_BR/champion/${id}.json`
      )
      .then((response) => {
        setSelected(response.data.data[id]);
      });
  };

  useEffect(() => {
    axios
      .get(
        "https://ddragon.leagueoflegends.com/cdn/12.13.1/data/pt_BR/champion.json"
      )
      .then((response) => {
        const data = response.data.data;
        const champs = Object.entries(data).map(
          (champName) => data[champName[0]]
        );
        setChampions(champs);
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#ffffff" }}>
        Escolha seu campeão
      </h1>
      <div className="container">
        <div
          className="d-flex justify-content-center w-100"
          style={{ border: "1px solid #C28F2C", borderRadius: "8px" }}
        >
          <Button>Todos</Button>
          <Button>Assassinos</Button>
          <Button>Lutadores</Button>
          <Button>Magos</Button>
          <Button>Atiradores</Button>
          <Button>Suportes</Button>
          <Button>Tanques</Button>
        </div>
        <div className="champion-section">
          {champions?.map((champion) => (
            <Link to={champion.id} key={champion.id}>
              <Champion
                champion={champion}
                onSelect={() => handleShow(champion.id)}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Champions;
