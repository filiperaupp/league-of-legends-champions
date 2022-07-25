import axios from "axios";
import "../styles/Champion.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { IChampion } from "../interfaces/IChampion";
import Champion from "../components/Champion";
import { Link } from "react-router-dom";

function Champions() {
  const [champions, setChampions] = useState<IChampion[]>([]);
  const [filter, setFilter] = useState("");
  const [filteredChampions, setFilteredChampions] = useState<IChampion[]>([]);

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
        setFilteredChampions(champs);
      });
  }, []);

  useEffect(() => {
    if (!filter) setFilteredChampions(champions);
    else {
      const filtered = champions.filter((champion) =>
        champion.tags.includes(filter)
      );
      setFilteredChampions(filtered);
    }
  }, [filter]);

  const defineFilter = (filter: string) => {
    setFilter(filter);
  };

  return (
    <div>
      <style type="text/css">
        {`
    .btn-flat:hover {
      background-color: #CC9F46;
      color: white;
      border: #C28F2C
    }

    .btn-flat.active {
      background-color: #C28F2C;
      color: white;
      border: red
    }
    `}
      </style>
      <h1 style={{ textAlign: "center", color: "#111" }}>
        Escolha seu campeão
      </h1>
      <div className="container">
        <div
          className="d-flex justify-content-center w-100 p-2 mb-2"
          style={{ border: "1px solid #C28F2C", borderRadius: "8px" }}
        >
          <Button
            className="me-1"
            active={filter === ""}
            variant="flat"
            size="sm"
            onClick={() => defineFilter("")}
          >
            Todos
          </Button>
          <Button
            className="me-1"
            active={filter === "Assassin"}
            variant="flat"
            size="sm"
            onClick={() => defineFilter("Assassin")}
          >
            Assassinos
          </Button>
          <Button
            className="me-1"
            active={filter === "Fighter"}
            variant="flat"
            size="sm"
            onClick={() => defineFilter("Fighter")}
          >
            Lutadores
          </Button>
          <Button
            className="me-1"
            active={filter === "Mage"}
            variant="flat"
            size="sm"
            onClick={() => defineFilter("Mage")}
          >
            Magos
          </Button>
          <Button
            className="me-1"
            active={filter === "Marksman"}
            variant="flat"
            size="sm"
            onClick={() => defineFilter("Marksman")}
          >
            Atiradores
          </Button>
          <Button
            className="me-1"
            active={filter === "Support"}
            variant="flat"
            size="sm"
            onClick={() => defineFilter("Support")}
          >
            Suportes
          </Button>
          <Button
            className="me-1"
            active={filter === "Tank"}
            variant="flat"
            size="sm"
            onClick={() => defineFilter("Tank")}
          >
            Tanques
          </Button>
        </div>
        <div className="champion-section">
          {filteredChampions?.map((champion) => (
            <Link to={champion.id} key={champion.id}>
              <Champion champion={champion} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Champions;
