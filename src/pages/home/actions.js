import api from '../../server/api';
import { Alert } from 'react-native';

export const loadOrders = () => {
    return (dispatch, getState) =>{

        const configApi = {
            headers:{
                authorization: getState().login.token
            }
        }

        api.get('/order', configApi)
        .then(result => {

            return dispatch({
                type: 'ORDER_LIST_LOAD',
                payload: result.data
            });
        })
        .catch(error => {
            Alert.alert(error.response.data)
        });
    }
}