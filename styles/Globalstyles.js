import { createGlobalStyle } from 'styled-components';

export const theme = {
  setColor: {
    primaryColor1: '#C468FF',
    primaryColor2: '#6E91F6',
    BorderBottomInput: 'solid rgba(149,149,149,0.21) 1.5px',
    mainWhite: '#F8F8F8',
    mainBlack: '#000000',
    mainGrey: '#ececec',
    lightGrey: '#f7f7f7',
    imageColor: 'linear-gradient(141deg, #c468ff 4%, #6e91f6 100%)',
  },
  setBackground: {
    main: `background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);`,
    hover: `background: linear-gradient(110deg, rgba(201,60,243,0.76), rgba(71,109,226,0.78));`,
  },
  setFont: {
    main: "font-family: 'Roboto', sans-serif;",
  },
  setFontWeight: {
    normal: 'font-weight: 500',
  },

  setShadow: {
    light: 'box-shadow: 0px 10px 30px rgba(0,0,0,0.07)',
  },
  setRadius: {
    round: 'border-radius: 30px',
  },
};

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

*{
 margin:0;
 padding:0;
 box-sizing:border-box;
}
body{
 font-size:100%;
 font-family: "Helvetica",serif;
 font-family: 'Roboto', sans-serif;
 color: ${theme.setColor.mainBlack};
 background: ${theme.setColor.mainWhite};
 ${theme.setFont.main};
}
h1{
 font-size:3em;line-height:1.2;margin-bottom:0.5em
}
h2{
 font-size:2em;margin-bottom:0.75em
}
h3{
 font-size:1.5em;line-height:1;margin-bottom:1em
}
h4{
 font-size:1.2em;line-height:1.2;margin-bottom:1.25em;font-weight:bold;
}
h5{
 font-size:1em;margin-bottom:1.5em;font-weight:bold;
}
h6{
 font-size:1em;font-weight:bold;
}
p{
 line-height:1.5;margin:0 0 1.5rem 0;
}
`;

export default GlobalStyle;
