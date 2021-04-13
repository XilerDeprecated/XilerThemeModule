export interface Theme {
  dark: Color;
  accent: Color;
  primary: Color;
  secondary: Color;
  secondaryDark: Color;
}

type Color = {
  [key in 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900]: string;
};
