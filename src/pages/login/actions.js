import api from '../../server/api'
import { Actions } from 'react-native-router-flux'

export const emailChange = text => ({
    type: 'EMAIL_VALUE_CHANGE',
    payload: text
})

export const passwordChange = text => ({
    type: 'PASSWORD_VALUE_CHANGE',
    payload: text
})

export const executeLogin = ({email, password}) => {
    return async (dispatch) => {
        dispatch({type: 'EXECUTE_LOGIN'});
        await api.post('auth/login',{
            email: email,
            password: password
        })
        .then(function (response) {
            if (response.data.auth) {
                Actions.home();
            }
        })
        .catch(function (error) {
            return error
        });
    }
}