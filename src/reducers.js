import { combineReducers } from 'redux';
import loginReducer from './pages/login/reducer';
import signupReducer from './pages/sigin/reducer';
import homeReducer from './pages/home/reducer';
import orderInfoReducer from './pages/order-info/reducer';
import configsReducer from './pages/configs/reducer';
import storageCrudReducer from './pages/storages-crud/reducer';
import storages from './pages/storages/reducer';
import readerQRCode from './pages/readerQRCode/reducer';

const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    home: homeReducer,
    orderInfo: orderInfoReducer,
    configs: configsReducer,
    storageCrud: storageCrudReducer,
    storages: storages,
    readerQRCode: readerQRCode,
});

export default rootReducer;