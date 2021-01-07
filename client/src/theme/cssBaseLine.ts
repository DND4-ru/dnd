import { Overrides } from '@material-ui/core/styles/overrides.d';

import { garamondFonts } from './fonts';


export const cssBaseLine = (): Overrides['MuiCssBaseline'] => ({
    '@global': {
        '@font-face': garamondFonts,
        body: {
            margin: 0,
            fontFamily: 'EB Garamond',
        },
        '#dnd4': {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
});
