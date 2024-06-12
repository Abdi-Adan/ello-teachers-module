import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#5ACCCC',
        },
        secondary: {
            main: '#335C6E',
        },
        white: {
            main: '#FFFFFF'
        },
        grey: {
            main: '#333333'
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;