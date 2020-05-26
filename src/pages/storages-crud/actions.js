export const zipcodeChange = event => ({
    type: 'ZIPCODE_VALUE_CHANGE',
    payload: event.target.value
})

export const estadoChange = event => ({
    type: 'ESTADO_VALUE_CHANGE',
    payload: event.target.value
})

export const cidadeChange = event => ({
    type: 'CIDADE_VALUE_CHANGE',
    payload: event.target.value
})

export const neighborhoodChange = event => ({
    type: 'NEIGHBORHOOD_VALUE_CHANGE',
    payload: event.target.value
})

export const streetChange = event => ({
    type: 'STREET_VALUE_CHANGE',
    payload: event.target.value
})

export const numberChange = event => ({
    type: 'NUMBER_VALUE_CHANGE',
    payload: event.target.value
})

export const complementChange = event => ({
    type: 'COMPLEMENT_VALUE_CHANGE',
    payload: event.target.value
})

export const executeCadastrar = event => ({
    type: 'EXECUTE_CADASTRAR'
})