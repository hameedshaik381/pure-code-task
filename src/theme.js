import { createTheme } from '@mui/material/styles';

// color design tokens

export const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
    typography:{
      fontFamily:["Source Sans Pro","sans-serif"].join(","),
    fontSize:12,
    h1:{
      fontFamily:["Source Sans Pro","sans-serif"].join(","),
      fontSize:40
    },h2:{
      fontFamily:["Source Sans Pro","sans-serif"].join(","),
      fontSize:32
    },
    h3:{
      fontFamily:["Source Sans Pro","sans-serif"].join(","),
      fontSize:24
    },h4:{
      fontFamily:["Source Sans Pro","sans-serif"].join(","),
      fontSize:20
    },
    h5:{
      fontFamily:["Source Sans Pro","sans-serif"].join(","),
      fontSize:16
    },
    h6:{
      fontFamily:["Source Sans Pro","sans-serif"].join(","),
      fontSize:14
    }
  }

  });

  