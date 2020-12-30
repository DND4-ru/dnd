import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

import { Layout } from 'src/components';
import { theme } from 'src/theme';

import { Header } from './Header';
import { Main } from './Main';


const App: React.FC = () => (
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Layout.HeaderAndBody
                    header={<Header />}
                    body={<Main />}
                />
            </BrowserRouter>
        </MuiThemeProvider>
    </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('dnd4'));
