import api from '../../server/api';
import { Alert } from 'react-native';

export const loadStorages = () => {
    return (dispatch, getState) =>{
        const configApi = {
            headers:{
                authorization: getState().login.token,
            }
        }

        api.get('/user/adress', configApi)
        .then(result => {

            return dispatch({
                type: 'STORAGES_LIST_LOAD',
                payload: result.data
            });
        })
        .catch(error => {
            Alert.alert(error.response);
        });
    }

}