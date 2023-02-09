import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/configureStore';
import { toastContainerProps } from './components/Toastify/Toastify.helpers';
import { Routes } from './containers/Routes';

import useTheme from './theme/global';

const queryClient = new QueryClient();

function App() {
  useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes />
            <ToastContainer {...toastContainerProps} />
          </BrowserRouter>
        </PersistGate>
      </ReduxProvider>
    </QueryClientProvider>
  );
}

export default App;
