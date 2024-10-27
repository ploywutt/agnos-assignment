import { useCallback, useState } from "react";
import { DefaultFinger, FingerPain, FingerDesc } from "../components/finger";
import { FingerVoronoi } from "../components/voronoi/FingerVoronoi";
import { fingerPoints, FingerRegion } from "../data/fingerRegion";

const Finger = () => {
  const [selectedRegion, setSelectedRegion] = useState<FingerRegion[]>([
    "no-pain",
  ]);

  const handleRegionClick = useCallback((name: FingerRegion) => {
    if (name === "no-pain") {
      setSelectedRegion(["no-pain"]);
    } else {
      setSelectedRegion((prevRegions) => {
        return prevRegions.includes(name)
          ? prevRegions.filter((region) => region !== name)
          : [...prevRegions.filter((region) => region !== "no-pain"), name];
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h3>ปวดบริเวณข้อนิ้ว</h3>
      <div className="relative w-fit">
        <DefaultFinger />
        <FingerPain regions={selectedRegion} />
        <FingerDesc regions={selectedRegion} />
        <FingerVoronoi
          data={fingerPoints}
          handleRegionClick={handleRegionClick}
        />
      </div>
    </div>
  );
};

export default Finger;
