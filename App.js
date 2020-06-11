import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import { Router, Scene, Stack} from 'react-native-router-flux';

import Login from './src/pages/login';
import SignUp from './src/pages/sigin';
import Home from './src/pages/home'
import OrderInfo from './src/pages/order-info'
import Configs  from './src/pages/configs'
import Storages from './src/pages/storages'
import StoragesCrud from './src/pages/storages-crud'
import reducers from './src/reducers';

import Icon from 'react-native-vector-icons/FontAwesome'

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)

const iconConfig = () => (
  <Icon color='#6B26A0' name='cog' size={25} />
)

const iconProfile = () => (
  <Icon color='#6B26A0' name='user' size={25} />
)

const iconHome = () => (
  <Icon color='#6B26A0' name='truck' size={25} />
)

const iconStorage = () => (
  <Icon color='#6B26A0' name='cloud' size={25} />
)

const sceneConfig = {
  cardStyle: { backgroundColor: 'white' },
  navigationBarStyle: { backgroundColor: '#6B26A0' }, 
  titleStyle: { color: 'white', },
  sceneStyle: { backgroundColor: 'white' },
  rightButtonTextStyle: { color: 'white' },
};

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        
        
        
       <Router>
        <Stack key="root">
          <Scene key="tabBar" tabs={true} hideNavBar>
            <Scene 
              key="home"
              component={Home}
              title="Home"
              renderBackButton={()=>(null)} 
              renderLeftButton={()=>(null)}
              icon={iconHome}
              {...sceneConfig}
            />


            <Scene 
              key="storages"
              component={Storages}
              title="Storages"
              icon={iconStorage}
              {...sceneConfig}
            />

            <Scene 
              key="configs"
              component={Configs}
              title="Configurações"
              icon={iconConfig}
              size={25}
              {...sceneConfig}
            />
            
          </Scene>
          <Scene
              key="login"
              component={Login}
              title="Login"
              icon={iconProfile}
              hideNavBar
              hideTabBar
              initial
              tabs={false}
          />
          <Scene 
            key="storagesCrud"
            component={StoragesCrud}
            title="Cadastros storages"
          />  

          <Scene 
            key="signup"
            component={SignUp}
            title="Sign up"
            hideTabBar={true}
          />

          <Scene 
            key="orderInfo"
            component={OrderInfo}
            title="Informções do pedido"
            hideTabBar={true}
            {...sceneConfig}
            showLabel={false}
          />
        </Stack>
        </Router>
      </ApplicationProvider>
    </Provider>
  );
}