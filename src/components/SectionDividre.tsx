import "../styles/SectionDivider.css";

interface SectionDividerProps {
  title: string;
}

export default function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="section-divider d-flex align-items-center">
      <h2 className="me-4">{title}</h2>
      <div className="ms-auto w-75">
        <hr />
      </div>
    </div>
  );
}
