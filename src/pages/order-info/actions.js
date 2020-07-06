import api from '../../server/api';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

export const showOrderItem = (_id) => {
    return async (dispatch, getState) =>{

        const order = getState().home.list.find(x => x._id == _id);

        await api.get(`user/adress/${order.id_adress_delivery}`, {
            headers:{
                authorization: getState().login.token,
            },
            params: {
                'user_id': order.id_client,
            }
        })
        .then(result => {
            if (result.data) {
                order.adressInfo = result   .data;
            }
        })
        .catch(error => {
            Alert.alert(error.response.data)
        });

        return dispatch({
            type: 'ORDER_SHOW_ITEM',
            payload: order
        });

        // api.get('/order', configApi)
        // .then(result => {

        //     console.log(result);

        //     
        // })
    }
}

export const confirmReceived = () => {
    return (dispatch, getState) =>{
        const configApi = {
            headers:{
                authorization: getState().login.token,
            }
        }

        const orderID = getState().orderInfo.order._id;
        if (orderID) {
            api.put(`/order/received/${orderID}`, {}, configApi)
            .then(result => {
                if (result.data) {
                    Alert.alert('Recebimento do pedido confirmado.');
                    Actions.orderInfo();
                    Actions.refresh({key: Math.random()});
                }
            })
            .catch(error => {
                Alert.alert('Não foi possível confirmar o recebimento do pedido.')
            });
        }
    }
} 