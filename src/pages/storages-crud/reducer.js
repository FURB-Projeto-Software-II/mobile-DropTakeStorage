const INITIAL_STATE = {
    zipcode: undefined,
    state: undefined,
    city: undefined,
    neighborhood: undefined,
    street: undefined,
    number: undefined,
    complement: undefined,
    longitude: undefined,
    latitude: undefined,
    _id: undefined
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ZIPCODE_VALUE_CHANGE':
            return {...state, zipcode: action.payload}
        case 'ESTADO_VALUE_CHANGE':
            return {...state, state: action.payload}
        case 'CIDADE_VALUE_CHANGE':
            return {...state, city: action.payload}
        case 'NEIGHBORHOOD_VALUE_CHANGE':
            return {...state, neighborhood: action.payload}
        case 'STREET_VALUE_CHANGE':
            return {...state, street: action.payload}
        case 'NUMBER_VALUE_CHANGE':
            return {...state, number: action.payload}
        case 'COMPLEMENT_VALUE_CHANGE':
            return {...state, complement: action.payload}
        case 'STORAGE_ITEM_LOAD':
            return {
                zipcode: action.payload.zipcode,
                state: action.payload.state,
                city: action.payload.city,
                neighborhood: action.payload.neighborhood,
                street: action.payload.street,
                number: action.payload.number,
                complement: action.payload.complement,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
                _id: action.payload._id
            }
        case 'LONGITUDE_CHANGE':
            return {...state, longitude: action.payload}
        case 'LATITUDE_CHANGE':
            return {...state, latitude: action.payload}
        default:
            return state
    }
}