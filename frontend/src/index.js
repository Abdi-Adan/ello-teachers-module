import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloWrapper } from './graphql/apolloClient.js';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App.js';
import theme from './theme.js';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <ApolloWrapper>
      <CssBaseline />
      <App />
    </ApolloWrapper>
  </ThemeProvider>,
);

