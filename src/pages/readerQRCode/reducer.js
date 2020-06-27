const INITIAL_STATE = {
    visibleConfirm : false,
    idOrder: undefined
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'VISIBLE_MODAL_CHANGE':
            return {...state, visibleConfirm: action.payload};
        case 'ID_ORDER_CHANGE':
            return {...state, idOrder: action.payload};    
        default:
            return state
    }
}

