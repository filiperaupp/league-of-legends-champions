import SectionDivider from "./SectionDividre";

export default function ChampionSkills(props: any) {
  return (
    <div className="container row m-auto">
      <SectionDivider title="Habilidades" />
      <div className="col-12 col-md-6 d-flex align-items-start">
        <img
          className="me-2"
          src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/passive/${props.passive.image.full}`}
          alt=""
        />
        <div>
          <strong>{props.passive.name}</strong>
          <p>{props.passive.description.replace(/(<([^>]+)>)/gi, "")}</p>
        </div>
      </div>
      {props.spells.map((spell) => (
        <div key={spell.id} className="col-12 col-md-6 d-flex align-items-start">
          <img
            className="me-2"
            src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/spell/${spell.image.full}`}
            alt=""
          />
          <div>
            <strong>{spell.name}</strong>
            <p>{spell.description.replace(/(<([^>]+)>)/gi, "")}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
