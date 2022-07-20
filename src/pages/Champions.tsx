import axios from "axios";
import "../styles/Champion.css";
import "../styles/Header.css";
import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';

// adicionar filtro
// mostrar detalhes em um overlay
// Página com detalhamento completo do campeão (skills, stats, etc)

interface Champion {
  id: string;
  name: string;
  image: {
    full: string;
  };
  title: string;
  tags: string[];
}

const SPLASH_URL = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash";

function Champions() {
  const [champions, setChampions] = useState<Champion[]>([]);

  const showDetails = (url: string) => {
    console.log(url);
    axios.get(url).then((response) => console.log(response));
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
      <div className="header">
        <img src="/src/assets/logo.png" alt="" height={50} />
      </div>
      <div className="container">
        {champions?.map((champion) => (
          <div
            key={champion.id}
            className="champion"
          >
            <img
              src={`${SPLASH_URL}/${champion.id}_0.jpg`}
              alt=""
            />
            <div className="details">
              <div>
                <strong>{champion.name}</strong>
                <span>{champion.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Champions;
