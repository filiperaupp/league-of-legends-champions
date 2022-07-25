import SectionDivider from "./SectionDividre";

export default function ChampionTips(props: any) {
  return (
    <div className="container row m-auto">
      <SectionDivider title="Dicas" />
      <div className="col-12 col-md-6">
        <h4>
          Jogando <strong>com</strong> o campeão
        </h4>
        <ul>
          {props?.allytips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      <div className="col-12 col-md-6">
        <h4>
          Jogando <strong>contra</strong> o campeão
        </h4>
        <ul>
          {props?.enemytips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
