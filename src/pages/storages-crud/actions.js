import api from '../../server/api';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

const listStates = [
    { title:'Alagoas', value: 'AL'},
    { title:'Amapá', value: 'AP'},
    { title:'Amazonas', value: 'AM'},
    { title:'Bahia', value: 'BA'},
    { title:'Ceará', value: 'CE'},
    { title:'Distrito Federal', value: 'DF'},
    { title:'Espírito Santo', value: 'ES'},
    { title:'Goiás', value: 'GO'},
    { title:'Maranhão', value: 'MA'},
    { title:'Mato Grosso', value: 'MT'},
    { title:'Mato Grosso do Sul', value: 'MS'},
    { title:'Minas Gerais', value: 'MG'},
    { title:'Paraná', value: 'PR'},
    { title:'Paraíba', value: 'PB'},
    { title:'Pará', value: 'PA'},
    { title:'Pernambuco', value: 'PE'},
    { title:'Piauí', value: 'PI'},
    { title:'Rio de Janeiro', value: 'RJ'},
    { title:'Rio Grande do Norte', value: 'RN'},
    { title:'Rio Grande do Sul', value: 'RS'},
    { title:'Rondônia', value: 'RO'},
    { title:'Roraima', value: 'RR'},
    { title:'Santa Catarina', value: 'SC'},
    { title:'Sergipe', value: 'SE'},
    { title:'São Paulo', value: 'SP'},
    { title:'Tocantins', value: 'TO'},
]

export const zipcodeChange = text => ({
    type: 'ZIPCODE_VALUE_CHANGE',
    payload: text
})

export const estadoChange = (item) => ({
    type: 'ESTADO_VALUE_CHANGE',
    payload: item
})

export const cidadeChange = text => ({
    type: 'CIDADE_VALUE_CHANGE',
    payload: text
})

export const neighborhoodChange = text => ({
    type: 'NEIGHBORHOOD_VALUE_CHANGE',
    payload: text
})

export const streetChange = text => ({
    type: 'STREET_VALUE_CHANGE',
    payload: text
})

export const numberChange = text => ({
    type: 'NUMBER_VALUE_CHANGE',
    payload: text
})

export const complementChange = text => ({
    type: 'COMPLEMENT_VALUE_CHANGE',
    payload: text
})

export const executeCadastrar = event => ({
    type: 'EXECUTE_CADASTRAR'
})

export const latitudeChange = value => ({
    type: 'LATITUDE_CHANGE',
    payload: value
})

export const longitudeChange = value => ({
    type: 'LONGITUDE_CHANGE',
    payload: value
})

export const showStorage = () => {
    return (dispatch, getState) =>{
        const configApi = {
            headers:{
                authorization: getState().login.token,
            }
        }

        api.get('/user/adress', configApi)
        .then(result => {

            if (result.data) {   
                return dispatch({
                    type: 'STORAGE_ITEM_LOAD',
                    payload: result.data[0]
                });   
            }
        })
        .catch(error => {
            if (error.response) {
                Alert.alert(error.response);
            }
        });
    }
}

export const changeStorage = (createStorage) => {
    return (dispatch, getState) => {
        const configApi = {
            headers:{
                authorization: getState().login.token,
            }
        }

        const _id = getState().storageCrud._id;

        const primary = true;
        const zipcode = getState().storageCrud.zipcode;
        const state = listStates[getState().storageCrud.state].title;
        const city = getState().storageCrud.city;
        const neighborhood = getState().storageCrud.neighborhood;
        const street = getState().storageCrud.street;
        const number = getState().storageCrud.number;
        const complement = getState().storageCrud.complement;
        const lng = getState().storageCrud.longitude;
        const lat = getState().storageCrud.latitude;

        if (createStorage) {
            api.post(`/user/adress`, {
                zipcode,
                state,
                city,
                neighborhood,
                street,
                number,
                complement,
                lng,
                lat   
            },configApi)
            .then(result => {
    
                Actions.storages();
                Actions.refresh({key: Math.random()})
                console.log(result.data);
                return dispatch({
                    type: 'STORAGE_ITEM_LOAD',
                    payload: result.data
                });
            })
            .catch(error => {
                Alert.alert(error);
            });
        } else {
            api.put(`/user/adress/${_id}`, {
                zipcode,
                state,
                city,
                neighborhood,
                street,
                number,
                complement,
                lng,
                lat   
            },configApi)
            .then(result => {
                
                Actions.storages();
                Actions.refresh({key: Math.random()})
                console.log(result.data);
                return dispatch({
                    type: 'STORAGE_ITEM_LOAD',
                    payload: result.data
                });
            })
            .catch(error => {
                Alert.alert(error);
            });
        }
    }
}