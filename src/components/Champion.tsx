import { IChampion } from "../interfaces/IChampion";

interface ChampionProps {
  champion: IChampion;
  onSelect?: () => any
}

export default function Champion({ champion, onSelect }: ChampionProps) {
  const SPLASH_URL =
    "http://ddragon.leagueoflegends.com/cdn/img/champion/splash";
  return (
    <div onClick={onSelect} key={champion.id} className="champion">
      <img src={`${SPLASH_URL}/${champion.id}_0.jpg`} alt="" />
      <div className="details">
        <div>
          <strong>{champion.name}</strong>
          <span>{champion.title}</span>
        </div>
      </div>
    </div>
  );
}
