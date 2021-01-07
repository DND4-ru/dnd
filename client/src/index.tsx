import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

import { Layout } from 'src/components';
import { theme } from 'src/theme';

import { route } from './routes';
import { TitlePage } from './TitlePage';


const App: React.FC = () => (
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Layout.Root>
                    <Switch>
                        <Route path={route.title} exact component={TitlePage} />
                    </Switch>
                </Layout.Root>
            </BrowserRouter>
        </MuiThemeProvider>
    </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('dnd4'));
