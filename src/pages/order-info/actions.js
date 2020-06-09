import api from '../../server/api';
import { Alert } from 'react-native';

export const showOrderItem = (_id) => {
    return (dispatch, getState) =>{

        const order = getState().home.list.find(x => x._id == _id);

        console.log(_id)
        console.log(order)


        return dispatch({
            type: 'ORDER_SHOW_ITEM',
            payload: ''
        });

        // api.get('/order', configApi)
        // .then(result => {

        //     console.log(result);

        //     
        // })
    }
}