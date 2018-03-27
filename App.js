import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Toast } from 'react-native-redux-toast';

import rootReducer from './reducers/rootReducer';
import Main from './components/Main';

type Props = {}; // what is this?

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={ store }>
        <View style={{ flex: 1 }}>
          <Main />
          <Toast messageStyle={{ color: 'white' }} />
        </View>
      </Provider>
    );
  }
}

