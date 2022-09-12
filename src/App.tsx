import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store/configureStore';

import { Form } from './containers/Form';

import useTheme from './theme/global';
import useStyles from './App.styles';


function App() {
  useTheme();
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className="App">
        <Form className={classes.form} />
      </div>
    </Provider>
  );
}

export default App;
