import defaultFinger from "@/assets/finger/default-finger.png";
import { fingerPain, fingerDesc, type Finger } from "./data";
import { useMemo } from "react";

type FingerPainProps = {
  regions: (Finger["group"] | null)[];
};

const DefaultFinger = () => {
  return <img alt="default finger" className="img-size" src={defaultFinger} />;
};

const FingerPain = ({ regions }: FingerPainProps) => (
  <div>
    {fingerPain.map(
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

const FingerDesc = ({ regions }: FingerPainProps) => {
  const hasAllPain = useMemo(
    () =>
      regions &&
      fingerPain
        .filter((pain) => pain.group !== "no-pain")
        .every((pain) => regions.includes(pain.group)),
    [regions]
  );
  return (
    !hasAllPain && (
      <div>
        {fingerDesc.map(
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

export { DefaultFinger, FingerPain, FingerDesc };
