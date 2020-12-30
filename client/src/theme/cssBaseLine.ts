import { Overrides } from '@material-ui/core/styles/overrides.d';

import { bellotaFonts } from './fonts';


export const cssBaseLine = (): Overrides['MuiCssBaseline'] => ({
    '@global': {
        '@font-face': bellotaFonts,
        body: {
            margin: 0,
            fontFamily: 'Bellota',
        },
        '#dnd4': {
            height: '100vh',
        },
    },
});
