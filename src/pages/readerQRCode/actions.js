import api from '../../server/api';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

export const visibleModalChange = visible => ({
    type: 'VISIBLE_MODAL_CHANGE',
    payload: visible
});

export const idOrderChange = idOrder => ({
    type: 'ID_ORDER_CHANGE',
    payload: idOrder
});

export const setDeliveryOrder = (idOrder) => {
    return (dispatch, getState) =>{
        const configApi = {
            headers:{
                authorization: getState().login.token,
            }
        }

        api.get(`/order/delivered/${idOrder}`, configApi)
        .then(result => {

            Actions.storages();
        })
        .catch(error => {
            if (error.response) {
                Alert.alert(error.response);
            }
        });
    }
}