import "../styles/ChampionDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ChampionHeader from "../components/ChampionHeader";
import ChamnpionSkins from "../components/ChampionSkins";
import ChampionTips from "../components/ChampionTips";
import ChampionSkills from "../components/ChampionSkills";

export function ChampionDetail() {
  const [champion, setChampion] = useState<any>();
  let params = useParams();
  const championId = params.id;

  useEffect(() => {
    if (championId)
      axios
        .get(
          `https://ddragon.leagueoflegends.com/cdn/12.13.1/data/pt_BR/champion/${championId}.json`
        )
        .then((response) => {
          const data = response.data.data[championId];
          setChampion(data);
        });
  }, []);
  if (!champion) {
    return <div></div>;
  }
  return (
    <div>
      <ChampionHeader champion={champion} />
      <ChampionTips allytips={champion.allytips} enemytips={champion.enemytips} />
      <ChampionSkills passive={champion?.passive} spells={champion?.spells} />
      <ChamnpionSkins championId={champion?.id} skins={champion?.skins} />
    </div>
  );
}
