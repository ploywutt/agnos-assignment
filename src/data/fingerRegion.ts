export type FingerRegion = "pip" | "dip" | "mcp" | "no-pain";

interface FingerPoint {
  x: number;
  y: number;
  name: FingerRegion;
}

export const fingerPoints: FingerPoint[] = [
  { x: 22, y: 38, name: "mcp" },
  { x: 35, y: 34, name: "mcp" },
  { x: 48, y: 32, name: "mcp" },
  { x: 62, y: 32, name: "mcp" },
  { x: 83, y: 51, name: "mcp" },

  { x: 16, y: 28, name: "pip" },
  { x: 30, y: 19, name: "pip" },
  { x: 46, y: 15, name: "pip" },
  { x: 63, y: 17, name: "pip" },
  { x: 94, y: 38, name: "pip" },

  { x: 10, y: 19, name: "dip" },
  { x: 29, y: 8, name: "dip" },
  { x: 45, y: 3, name: "dip" },
  { x: 63, y: 5, name: "dip" },

  { x: 50, y: 95, name: "no-pain" },
];
