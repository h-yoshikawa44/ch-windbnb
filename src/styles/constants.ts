// ブレイクポイント
const xs = 0;
const sm = 600;
const md = 960;
const lg = 1280;
const xl = 1920;

export const breakPoint = {
  xs,
  sm,
  md,
  lg,
  xl,
} as const;

// 奥行き
const menu = 1200;

export const zIndex = {
  menu,
} as const;

// 色
const black = '#333';
const blackLighten = '#4f4f4f';
const gray = '#828282';
const grayLighten = '#bdbdbd';
const whiteDarken = '#eaeaea';
const white2 = '#f2f2f2';
const white = '#fff';

const primary = '#eb5757';
const placeHolder = grayLighten;

export const colors = {
  black,
  blackLighten,
  gray,
  grayLighten,
  whiteDarken,
  white2,
  white,
  primary,
  placeHolder,
} as const;

// 色の変化
const buttonDarken = 0.2;
const buttonAlpha = 0.1;

export const colorRatios = {
  buttonDarken,
  buttonAlpha,
} as const;
