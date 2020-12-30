import { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

import { ISpacing } from 'src/theme/utils/spacing';

/* eslint-disable no-shadow */
declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        spacing: ISpacing;
    }
    interface ThemeOptions {
        spacing: ISpacing;
    }
}
/* eslint-enable no-shadow */
