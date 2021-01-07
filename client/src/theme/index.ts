import { createMuiTheme } from '@material-ui/core';

import { cssBaseLine } from './cssBaseLine';
import { typography } from './typography';
import { createSpacing } from './utils/spacing';


const spacingBase = 8;
const spacing = createSpacing(spacingBase);


export const theme = createMuiTheme({
    spacing,
    typography,
    overrides: {
        MuiCssBaseline: cssBaseLine(),
    },
});
