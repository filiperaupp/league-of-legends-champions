import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChampionTags from "./ChampionTags";

interface Champion {
  id: string;
  name: string;
  title: string;
  lore: string;
  tags: string[];
}

export default function ChampionHeader({ champion }: any) {
  return (
    <div className="champion-header">
      <div className="container row m-auto">
        <div className="col-12 d-flex justify-content-end">
          <Link to="/champions">
            <Button size="sm" variant="outline-light" className="mb-2">
              Lista de Campeões
            </Button>
          </Link>
        </div>
        <div className="col-lg-auto col-md-12 d-flex align-items-start">
          {champion?.id && (
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${champion?.id}.png`}
              alt=""
              width={90}
              style={{ paddingRight: "8px" }}
            />
          )}

          <div className="mx-3">
            <h5 className="m-0">
              <strong>{champion?.name}</strong>
            </h5>
            <span className="d-block text-nowrap">{champion?.title}</span>
            {champion?.tags?.map((tag: string) => (
              <ChampionTags key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <div className="col">
          <p className="m-0 text-justify">"{champion?.lore}"</p>
        </div>
      </div>
    </div>
  );
}
