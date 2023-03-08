import "images.d.ts";
import "audio.d.ts";

declare module "*.png";

export interface State {
  console: string;
  number: string;
  decimals: string;
  operator: string;
  operations: string;
  history: History[];
  idx: number;
  dark: boolean;
  sound: boolean;
  color: string;
  heart: string;
  message: string;
  cursor: number;
  startMsg: string;
  endMsg: string;
  animate: boolean;
}

export interface History {
  operations: string;
  number: string;
}

export interface moveCursorRet {
  startMsg: string;
  endMsg: string;
}

export type CursorCmd = "<" | ">";
