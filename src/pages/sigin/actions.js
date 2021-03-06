import api from '../../server/api'
import { Actions } from 'react-native-router-flux';

export const nomeChange = text => ({
    type: 'NOME_VALUE_CHANGE',
    payload: text
})

export const cpfChange = text => ({
    type: 'CPF_VALUE_CHANGE',
    payload: text
})

export const emailChange = text => ({
    type: 'EMAIL_VALUE_CHANGE',
    payload: text
})

export const confirmaEmailChange = text => ({
    type: 'CONFIRMA_EMAIL_VALUE_CHANGE',
    payload: text
})

export const senhaChange = text => ({
    type: 'SENHA_VALUE_CHANGE',
    payload: text
})

export const confirmarSenhaChange = text => ({
    type: 'CONFIRMA_SENHA_VALUE_CHANGE',
    payload: text
})

export const validateSignup = () => {

    var valid = true;
    return (dispatch, getState) => {
        if (getState().signup.senha !== getState().signup.confirmarSenha) {
            valid = false;
            dispatch({
                type: 'DIFFERENT_PASSWORLD',
                paylod: ''
            })
        }
    
        if (getState().signup.confirmaEmail !== getState().signup.confirmarSenha) {
            valid = false
            dispatch({
                type: 'DIFFERENT_EMAIL',
                paylod: ''
            })
        }
    
        if (valid) {
            dispatch(executeSignup())
        }
    }
}

export const executeSignup = () => {
    return (dispatch, getState) => {
        api.post('/auth/storage/register', {
            name: getState().signup.nome,
            cpf: getState().signup.cpf,
            email: getState().signup.email,
            password: getState().signup.senha
        })
        .then(resp => {
            Actions.login();

            return dispatch({
                type: 'SIGN_UP_EXECUTED',
                payload: resp.data
            });
        })
        .catch(function (error) {
            Alert.alert(error.response.data)
        });
    }
}