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

export const setDeliveryOrder = () => {
    return (dispatch, getState) =>{
        const configApi = {
            headers:{
                authorization: getState().login.token,
            }
        }

        const idOrder = getState().readerQRCode.idOrder

        if (idOrder) {   
            api.put(`/order/delivered/${idOrder}`, {}, configApi)
            .then(result => {
                Alert.alert('Pedido entregue!');
                Actions.refresh({key: Math.random()});
                Actions.home();
                Actions.refresh({key: Math.random()});
            })
            .catch(error => {
                if (error.response) {
                    Alert.alert(error.response);
                }
            });   
        } else {
            Alert.alert('Não é possível realizar a entrega!');
        }
    }
}