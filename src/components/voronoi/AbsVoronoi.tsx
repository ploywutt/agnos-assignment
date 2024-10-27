import { type AbdominalRegion } from "../../data/abdominalRegion";
import { DataPoint, Voronoi } from "./Voronoi";

interface AbsVoronoiProps {
  handleRegionClick: (name: AbdominalRegion) => void;
  data: DataPoint<AbdominalRegion>[];
}

export const AbsVoronoi: React.FC<AbsVoronoiProps> = ({
  handleRegionClick,
  data,
}) => {
  const width = 200;
  const height = 400;

  return (
    <div className="absolute top-0 w-full h-full flex items-center justify-center">
      <div className="w-2/5 h-1/3 cursor-pointer">
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
