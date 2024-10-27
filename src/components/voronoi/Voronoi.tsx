import { scaleLinear, Delaunay } from "d3";
import { Fragment, useMemo, useState } from "react";

export interface DataPoint<TRegion> {
  x: number;
  y: number;
  name: TRegion;
}

interface VoronoiProps<TRegion> {
  width: number;
  height: number;
  data: DataPoint<TRegion>[];
  onRegionClick?: (name: TRegion) => void;
}

export const Voronoi = <TRegion,>({
  width,
  height,
  data,
  onRegionClick,
}: VoronoiProps<TRegion>) => {
  const xScale = useMemo(
    () => scaleLinear().domain([0, 100]).range([0, width]),
    [width]
  );
  const yScale = useMemo(
    () => scaleLinear().domain([0, 100]).range([0, height]),
    [height]
  );

  const delaunay = useMemo(() => {
    const formattedData = data.map(
      (d) => [xScale(d.x), yScale(d.y)] as [number, number]
    );
    return Delaunay.from(formattedData);
  }, [data, xScale, yScale]);

  const voronoi = useMemo(
    () => delaunay.voronoi([0, 0, width, height]),
    [delaunay, width, height]
  );

  const [hoveredItem, setHoveredItem] = useState<TRegion | null>(null);

  const voronoiCells = data.map((d, i) => {
    const path = voronoi.renderCell(i);
    return (
      <path
        key={i}
        d={path}
        stroke="pink"
        fill="transparent"
        opacity={0.6}
        onMouseOver={() => setHoveredItem(d.name)}
        onClick={() => onRegionClick?.(d.name)}
      />
    );
  });

  const Points = data.map((d, i) => (
    <Fragment key={i}>
      <circle
        cx={xScale(d.x)}
        cy={yScale(d.y)}
        r={2}
        fill="blue"
        opacity={0.5}
      />
      {hoveredItem === d.name && (
        <circle
          cx={xScale(d.x)}
          cy={yScale(d.y)}
          r={15}
          fill="transparent"
          stroke="crimson"
          strokeWidth={3}
        />
      )}
    </Fragment>
  ));

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {Points}
      {voronoiCells}
    </svg>
  );
};
