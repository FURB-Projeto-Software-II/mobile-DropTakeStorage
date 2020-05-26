const INITIAL_STATE = {
    zipcode: '',
    estado: '',
    cidade: '',
    neighborhood: '',
    street: '',
    number: '',
    complement: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}