import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { store } from './store/configureStore';

import useTheme from './theme/global';
import useStyles from './App.styles';

import { toastContainerProps } from './components/Toastify/Toastify.helpers';
import { Form } from './containers/Form';

const queryClient = new QueryClient();

function App() {
  useTheme();
  const classes = useStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <div className="App">
          <Form className={classes.form} />
        </div>
        <ToastContainer {...toastContainerProps} />
      </ReduxProvider>
    </QueryClientProvider>
  );
}

export default App;
