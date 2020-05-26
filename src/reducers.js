import { combineReducers } from 'redux';
import loginReducer from './pages/login/reducer';
import signupReducer from './pages/sigin/reducer';
import homeReducer from './pages/home/reducer';
import orderInfoReducer from './pages/order-info/reducer';
import configsReducer from './pages/configs/reducer';
import storageCrudReducer from './pages/storages-crud';
import storages from './pages/storages';

const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    home: homeReducer,
    orderInfo: orderInfoReducer,
    configs: configsReducer,
    storageCrud: storageCrudReducer,
});

export default rootReducer;