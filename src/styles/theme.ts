export default {
  spacings: {
    small: '0.4rem',
    medium: '0.8rem',
    large: '1.2rem',
    xlarge: '1.6rem',
    xxlarge: '2.4rem',
    xxxlarge: '3.2rem',
  },
  font: {
    fontFamily: 'Roboto, sans-serif',
    light: 300,
    regular: 400,
    medium: 700,
    bold: 900,

    size: {
      small: '1.2rem',
      medium: '1.4rem',
      large: '1.6rem',
      xlarge: '2.4rem',
      xxlarge: '4.8rem',
    },
  },
  colors: {
    primary: '#FF9B18',
    secondary: '#FF1D09',
    ternary: '#8D0000',
    darkBlue: '#0D7487',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#363636',
    success: '#16D918',
    warning: '#F3A60D',
    error: '#D93116',
    empty: '#C6C6C6',
    transparent: 'transparent',
  },
  typeColors: {
    movie: '#F30D79',
    anime: '#8473F6',
  },
  nth: {
    one: '2n+1',
  },
} as const;
