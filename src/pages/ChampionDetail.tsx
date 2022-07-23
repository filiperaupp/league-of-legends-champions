import "../styles/ChampionDetail.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import SectionDivider from "../components/SectionDividre";
import ChampionTags from "../components/ChampionTags";
import ChampionHeader from "../components/ChampionHeader";

export function ChampionDetail() {
  const [champion, setChampion] = useState<any>();
  let params = useParams();
  const championId = params.id;

  useEffect(() => {
    if (championId)
      axios
        .get(
          `http://ddragon.leagueoflegends.com/cdn/12.13.1/data/pt_BR/champion/${championId}.json`
        )
        .then((response) => {
          setChampion(response.data.data[championId]);
          console.log(response.data.data[championId]);
        });
  }, []);
  if (!champion) {
    return <div></div>;
  }
  return (
    <div>
      <ChampionHeader champion={champion} />
      {/* <div className="champion-header">
        <div className="container row m-auto">
          <div className="col-12 d-flex justify-content-end">
            <Link to="/champions">
              <Button size="sm" variant="outline-light" className="mb-2">
                Lista de Campeões
              </Button>
            </Link>
          </div>
          <div className="col-lg-auto col-md-12 d-flex align-items-start">
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${championId}.png`}
              alt=""
              width={90}
              style={{ paddingRight: "8px" }}
            />
            <div className="mx-3">
              <h5 className="m-0">
                <strong>{champion?.name}</strong>
              </h5>
              <span className="d-block text-nowrap">{champion?.title}</span>
              {champion?.tags.map((tag) => (
                <ChampionTags key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="col">
            <p className="m-0 text-justify">"{champion?.lore}"</p>
          </div>
        </div>
      </div> */}
      <div className="container row m-auto">
        <SectionDivider title="Dicas" />
        <div className="col-12 col-md-6">
          <h4>
            Jogando <strong>com</strong> o campeão
          </h4>
          <ul>
            {champion?.allytips.map((tip) => (
              <li>{tip}</li>
            ))}
          </ul>
        </div>

        <div className="col-12 col-md-6">
          <h4>
            Jogando <strong>contra</strong> o campeão
          </h4>
          <ul>
            {champion?.enemytips.map((tip) => (
              <li>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container row m-auto">
        <SectionDivider title="Habilidades" />
        <div className="col-12 col-md-6 d-flex align-items-start">
          <img
            className="me-2"
            src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/passive/${champion?.passive.image.full}`}
            alt=""
          />
          <div>
            <strong>{champion?.passive.name}</strong>
            <p>{champion?.passive.description.replace(/(<([^>]+)>)/gi, "")}</p>
          </div>
        </div>
        {champion?.spells.map((spell) => (
          <div className="col-12 col-md-6 d-flex align-items-start">
            <img
              className="me-2"
              src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/spell/${spell.image.full}`}
              alt=""
            />
            <div>
              <strong>{spell.name}</strong>
              <p>{spell.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pb-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <SectionDivider title="Skins" />
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion?.id}_0.jpg`}
            width="100%"
            height={"auto"}
            alt=""
          />
          <div
            className="d-flex w-100"
            style={{ overflowX: "scroll", backgroundColor: "#111" }}
          >
            {champion?.skins.map((skin) => (
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion?.id}_${skin.num}.jpg`}
                alt=""
                height={"100px"}
                width={"auto"}
                style={{ opacity: "0.5" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
