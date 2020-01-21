import {colors} from '../colors'

export interface BorderWidths {
    thin: string;
    extraLight: string;
  	light: string;
  	normal: string;
  	medium: string;
  	semiBold: string;
  	bold: string;
  	extraBold: string;
}

export const borderWidths: BorderWidths = {
  thin: ".25px",
  extraLight: ".5px",
  light: "1px",
  normal: "2px",
  medium: "3px",
  semiBold: "5px",
  bold: "8px",
  extraBold: "13px",
}


export interface Borders {
  primary: string
}

const primaryBorderColor: string = colors.black;

export const borders: Borders = {
  primary: `${borderWidths.normal} solid ${primaryBorderColor}`,
}
