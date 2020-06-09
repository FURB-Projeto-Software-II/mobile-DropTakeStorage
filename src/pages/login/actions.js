import api from '../../server/api'
import { Actions } from 'react-native-router-flux'
import { Alert } from 'react-native'

export const emailChange = text => ({
    type: 'EMAIL_VALUE_CHANGE',
    payload: text
})

export const passwordChange = text => ({
    type: 'PASSWORD_VALUE_CHANGE',
    payload: text
})

export const executeLogin = () => {
    return (dispatch, getState) => {

        const email = getState().login.email;
        const password = getState().login.password;

        
        api.post('auth/login',{
            email: email,
            password: password
        })
        .then(async result => {
            if (result.data.auth) {
                
                console.log('------------------------------------------------- TOKEN')
                console.log(result.data.token)
                
                dispatch({
                    type: 'EXECUTE_LOGIN',
                    payload: result.data.token
                });
                
                return Actions.home();
            }
        })
        .catch(function (error) {
            Alert.alert(error.response.data)
        });
    }
}