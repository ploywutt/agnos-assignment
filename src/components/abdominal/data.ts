import umbilicusPain from "@/assets/abdominal/umbilicus-highlight.png";
import umbilicusTextBox from "@/assets/abdominal/umbilicus-active.png";
import epigastriumPain from "@/assets/abdominal/epigastrium-highlight.png";
import epigastriumTextBox from "@/assets/abdominal/epigastrium-active.png";
import llqPain from "@/assets/abdominal/llq-highlight.png";
import llqTextBox from "@/assets/abdominal/llq-active.png";
import luqPain from "@/assets/abdominal/luq-highlight.png";
import luqTextBox from "@/assets/abdominal/luq-active.png";
import rlqPain from "@/assets/abdominal/rlq-highlight.png";
import rlqTextBox from "@/assets/abdominal/rlq-active.png";
import ruqPain from "@/assets/abdominal/ruq-highlight.png";
import ruqTextBox from "@/assets/abdominal/ruq-active.png";
import suprapubicPain from "@/assets/abdominal/suprapubic-highlight.png";
import suprapubicTextBox from "@/assets/abdominal/suprapubic-active.png";
import allAbsPain from "@/assets/abdominal/all-over-highlight.png";

export type AbsPain = (typeof absPains)[number];

export const absPains = [
  { src: umbilicusPain, alt: "umbilicus pain", group: "umbilicus" },
  { src: epigastriumPain, alt: "epigastrium pain", group: "epigastrium" },
  { src: llqPain, alt: "llq pain", group: "llq" },
  { src: luqPain, alt: "luq pain", group: "luq" },
  { src: rlqPain, alt: "rlq pain", group: "rlq" },
  { src: ruqPain, alt: "ruq pain", group: "ruq" },
  { src: suprapubicPain, alt: "suprapubic pain", group: "suprapubic" },
  { src: allAbsPain, alt: "all abs pain", group: "all-pain" },
];

export const absDesc = [
  { src: umbilicusTextBox, alt: "umbilicus text box", group: "umbilicus" },
  {
    src: epigastriumTextBox,
    alt: "epigastrium text box",
    group: "epigastrium",
  },
  { src: llqTextBox, alt: "llq text box", group: "llq" },
  { src: luqTextBox, alt: "luq text box", group: "luq" },
  { src: rlqTextBox, alt: "rlq text box", group: "rlq" },
  { src: ruqTextBox, alt: "ruq text box", group: "ruq" },
  { src: suprapubicTextBox, alt: "suprapubic text box", group: "suprapubic" },
];
