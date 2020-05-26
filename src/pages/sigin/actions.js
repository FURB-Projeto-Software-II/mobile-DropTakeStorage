import api from '../../server/api'

export const nomeChange = event => ({
    type: 'NOME_VALUE_CHANGE',
    payload: event.target.value
})

export const dataNascimentoChange = event => ({
    type: 'DATA_NASCIMENTO_VALUE_CHANGE',
    payload: event.target.value
})

export const emailChange = event => ({
    type: 'EMAIL_VALUE_CHANGE',
    payload: event.target.value
})

export const confirmaEmailChange = event => ({
    type: 'CONFIRMA_EMAIL_VALUE_CHANGE',
    payload: event.target.value
})

export const senhaChange = event => ({
    type: 'SENHA_VALUE_CHANGE',
    payload: event.target.value
})

export const confirmarSenhaChange = event => ({
    type: 'CONFIRMA_SENHA_VALUE_CHANGE',
    payload: event.target.value
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
        api.post('/auth/register', {
            nome: getState().signup.nome,
            email: getState().signup.email,
            password: getState().signup.senha
        })
        .then(resp => dispatch({
            type: 'SIGN_UP_EXECUTED',
            payload: resp.data
        }))
    }
}