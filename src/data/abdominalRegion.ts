export type AbdominalRegion =
  | "umbilicus"
  | "epigastrium"
  | "suprapubic"
  | "luq"
  | "llq"
  | "ruq"
  | "rlq"
  | "all-pain";

export type AbPoint = {
  x: number;
  y: number;
  name: AbdominalRegion;
};

export const absPoints: AbPoint[] = [
  { x: 46, y: 29, name: "umbilicus" },
  { x: 46, y: 10, name: "epigastrium" },
  { x: 46, y: 45, name: "suprapubic" },
  { x: 70, y: 21, name: "luq" },
  { x: 70, y: 37, name: "llq" },
  { x: 22, y: 21, name: "ruq" },
  { x: 22, y: 37, name: "rlq" },
  { x: 46, y: 86, name: "all-pain" },
];
