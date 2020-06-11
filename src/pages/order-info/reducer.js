const INITIAL_STATE = {
    order : {
        
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ORDER_SHOW_ITEM':
            return {...state, order: action.payload};    
        default:
            return state
    }
}