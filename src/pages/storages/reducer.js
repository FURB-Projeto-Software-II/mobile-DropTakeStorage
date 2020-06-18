// const INITIAL_STATE = {
//     zipcode: '',
//     estado: '',
//     cidade: '',
//     neighborhood: '',
//     street: '',
//     number: '',
//     complement: ''
// }

const INITIAL_STATE = {
    list: [
        {},
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'STORAGES_LIST_LOAD':
            return { ...state, list: action.payload }
        default:
            return state
    }
}