import { type FingerRegion } from "../../data/fingerRegion";
import { DataPoint, Voronoi } from "./Voronoi";

interface AbsVoronoiProps {
  handleRegionClick: (name: FingerRegion) => void;
  data: DataPoint<FingerRegion>[];
}

export const FingerVoronoi: React.FC<AbsVoronoiProps> = ({
  handleRegionClick,
  data,
}) => {
  const width = 450;
  const height = 710;

  return (
    <div className="absolute top-0 w-full h-full flex justify-center items-center">
      <div className="w-2/3 h-5/6 cursor-pointer">
        <Voronoi
          width={width}
          height={height}
          data={data}
          onRegionClick={handleRegionClick}
        />
      </div>
    </div>
  );
};
