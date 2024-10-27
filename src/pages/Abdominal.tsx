import { useState, useCallback } from "react";
import { DefaultAbs, AbsPain, AbsDesc } from "../components/abdominal";
import { AbsVoronoi } from "../components/voronoi/AbsVoronoi";
import { absPoints, type AbdominalRegion } from "../data/abdominalRegion";

const Abdominal = () => {
  const [selectedRegion, setSelectedRegion] = useState<AbdominalRegion[]>([]);

  const handleRegionClick = useCallback((name: AbdominalRegion) => {
    if (name === "all-pain") {
      setSelectedRegion(() => absPoints.map((pain) => pain.name));
    } else {
      setSelectedRegion((prevRegions) =>
        prevRegions.includes(name)
          ? prevRegions.filter(
              (region) => region !== name && region !== "all-pain"
            )
          : [...prevRegions, name]
      );
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h3>ปวดบริเวณช่องท้อง</h3>
      <div className="relative w-fit max-h-svh">
        <DefaultAbs />
        <AbsPain regions={selectedRegion} />
        <AbsDesc regions={selectedRegion} />
        <AbsVoronoi data={absPoints} handleRegionClick={handleRegionClick} />
      </div>
    </div>
  );
};

export default Abdominal;
