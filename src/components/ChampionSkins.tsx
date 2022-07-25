import { useEffect, useState } from "react";
import SectionDivider from "./SectionDividre";
import "../styles/ChampionSkins.css";

export default function ChamnpionSkins({ championId, skins }: any) {
  const [selectedImage, setSelectedImage] = useState<Record<string, any>>({});

  useEffect(() => {
    if (skins.length) setSelectedImage(skins[0]);
  }, []);

  const selectImage = (imageId: number) => {
    const image = skins.find((skin: Record<string, any>) => skin.id === imageId);
    if (image) setSelectedImage(image);
  };
  return (
    <div className="skins pb-4">
      <div className="container">
        <SectionDivider title="Skins" />
        {selectedImage && (
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${selectedImage.num}.jpg`}
            alt=""
          />
        )}
        <div className="thumbnails w-100">
          {skins &&
            skins.map((skin: Record<string, any>) => (
              <img
                className={`${(skin.id === selectedImage?.id) ? "active" : ""}`}
                key={skin.id}
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skin.num}.jpg`}
                alt=""
                onClick={() => selectImage(skin.id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
