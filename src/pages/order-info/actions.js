import api from '../../server/api';
import { Alert } from 'react-native';

export const showOrderItem = (_id) => {
    return async (dispatch, getState) =>{

        const order = getState().home.list.find(x => x._id == _id);

        console.log(_id);
        console.log(order);

        await api.get(`user/adress/${order.id_adress_delivery}`, {
            headers:{
                authorization: getState().login.token,
            },
            params: {
                'user_id': order.id_client,
            }
        })
        .then(result => {

            console.log(result);

            order.adressInfo = result.data;
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