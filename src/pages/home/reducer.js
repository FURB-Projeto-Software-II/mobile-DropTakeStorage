
// const INITIAL_STATE = {
//     nome: '',
//     dataNascimento: '',
//     email: '',
//     confirmaEmail: '',
//     senha: '',
//     confirmarSenha: ''
// }

const INITIAL_STATE = {
    list: [
        {
            description: '',
        },
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ORDER_LIST_LOAD':
            return {...state, list: action.payload};
        default:
            return state
    }
}