import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import { Router, Scene } from 'react-native-router-flux';

import Login from './src/pages/login';
import Signin from './src/pages/sigin';
import Home from './src/pages/home'
import OrderInfo from './src/pages/order-info'
import Configs  from './src/pages/configs'
import Storages from './src/pages/storages'
import StoragesCrud from './src/pages/storages-crud'
import reducers from './src/reducers';

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
       <Router>
          <Scene key="root">
            <Scene
              key="login"
              component={Login}
              title="Login"
              hideNavBar="true"
              initial
            />
            <Scene 
              key="signin"
              component={Signin}
              title="Sign in"
            />
            <Scene 
              key="home"
              component={Home}
              title="Home"
              hideNavBar="true"
              
            />

            <Scene 
              key="orderInfo"
              component={OrderInfo}
              title="Order Info"
            />

            <Scene 
              key="configs"
              component={Configs}
              title="Configurações"
            />

            <Scene 
              key="storages"
              component={Storages}
              title="Storages"
            />

            <Scene 
              key="storagesCrud"
              component={StoragesCrud}
              title="Cadastros storages"
            />
          </Scene>
        </Router>
      </ApplicationProvider>
    </Provider>
  );
}