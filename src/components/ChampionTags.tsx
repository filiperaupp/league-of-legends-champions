import { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import "../styles/ChampionTags.css"

export default function ChampionTags({ tag }: { tag?: string }) {
  const [badgeType, setBadgeType] = useState<string>();

  useEffect(() => {
    switch (tag) {
      case "Fighter":
        setBadgeType("lutador");
        break;
      case "Mage":
        setBadgeType("mago");
        break;
      case "Marksman":
        setBadgeType("atirador");
        break;
      case "Assassin":
        setBadgeType("assassino");
        break;
      case "Tank":
        setBadgeType("tanque");
        break;
      case "Support":
        setBadgeType("suporte");
        break;
      default:
        setBadgeType("default");
        break;
    }
  }, [tag]);

  return <Badge bg={badgeType} className="me-1">{badgeType?.toUpperCase()}</Badge>;
}
