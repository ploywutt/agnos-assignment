import dipJointPain from "@/assets/finger/dip-highlight.png";
import pipJointPain from "@/assets/finger/pip-highlight.png";
import mcpJointPain from "@/assets/finger/mcp-highlight.png";
import dipTextBox from "@/assets/finger/dip-active.png";
import pipTextBox from "@/assets/finger/pip-active.png";
import mcpTextBox from "@/assets/finger/mcp-active.png";
import noFingerPain from "@/assets/finger/others-highlight.png";

export type Finger = (typeof fingerPain)[number];

export const fingerPain = [
  { src: dipJointPain, alt: "dip joint pain", group: "dip" },
  { src: pipJointPain, alt: "pip joint pain", group: "pip" },
  { src: mcpJointPain, alt: "mcp joint pain", group: "mcp" },
  { src: noFingerPain, alt: "no finger pain", group: "no-pain" },
];

export const fingerDesc = [
  { src: dipTextBox, alt: "dip joint text", group: "dip" },
  { src: pipTextBox, alt: "pip joint text", group: "pip" },
  { src: mcpTextBox, alt: "mcp joint text", group: "mcp" },
];
