import defaultAbs from "@/assets/abdominal/default-abs.png";
import { absPains, absDesc, type AbsPain } from "./data";
import { useMemo } from "react";

type AbsPainProps = {
  regions: (AbsPain["group"] | null)[];
};

const DefaultAbs = () => (
  <img alt="default abdominal" className="img-size" src={defaultAbs} />
);

const AbsPain = ({ regions }: AbsPainProps) => (
  <div>
    {absPains.map(
      (pain) =>
        pain.group &&
        regions.some((region) => region === pain.group) && (
          <img
            key={`region-${pain.alt}`}
            alt={pain.alt}
            className="absolute top-0 img-size"
            src={pain.src}
          />
        )
    )}
  </div>
);

const AbsDesc = ({ regions }: AbsPainProps) => {
  const hasAllPain = useMemo(
    () => regions && absPains.every((pain) => regions?.includes(pain.group)),
    [regions]
  );
  return (
    !hasAllPain && (
      <div>
        {absDesc.map(
          (desc) =>
            desc.group &&
            regions.some((region) => region === desc.group) && (
              <img
                key={`region-${desc.alt}`}
                alt={desc.alt}
                className="absolute top-0 img-size"
                src={desc.src}
              />
            )
        )}
      </div>
    )
  );
};

export { DefaultAbs, AbsPain, AbsDesc };
