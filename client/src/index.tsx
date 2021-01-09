import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

import { ErrorPage, Layout, LoginGuard } from 'src/components';
import { theme } from 'src/theme';

import { apolloClient } from './apollo';
import { Login } from './Login';
import { publicPaths, route } from './routes';


const App: React.FC = () => (
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <ApolloProvider client={apolloClient}>
                <BrowserRouter>
                    <LoginGuard loginPagePath={route.login} sharedUrls={publicPaths} />
                    <Layout.Root>
                        <Switch>
                            <Route path={route.login} exact component={Login} />
                            <Route component={ErrorPage.NotFound} />
                        </Switch>
                    </Layout.Root>
                </BrowserRouter>
            </ApolloProvider>
        </MuiThemeProvider>
    </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('dnd4'));
