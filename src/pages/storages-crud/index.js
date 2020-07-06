import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, Input, Divider, Select, Button, SelectItem, Text, CheckBox, IndexPath } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

import { zipcodeChange, estadoChange,  cidadeChange, neighborhoodChange, streetChange, numberChange, complementChange, executeCadastrar, showStorage, changeStorage, longitudeChange, latitudeChange } from './actions'
import { Item } from 'native-base';


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

class StorageCrud extends Component {

    async componentDidMount() {
        this.props.showStorage();

        await this.loadCurrentLocation();

    }

    async loadCurrentLocation() {
        const { granted } = await requestPermissionsAsync();
    
        if (granted) {
            
            const { coords } = await getCurrentPositionAsync({
                enableHighAccuracy: true,
            });
    
            const { latitude, longitude } = coords;
            
            this.props.longitudeChange(longitude.toString());
            this.props.latitudeChange(latitude.toString());
        }
    }

    render() {

        const index = listStates.findIndex(x => x.title == this.props.state)
        const selectIndex = new IndexPath(index);

        return (
            <Layout>
                <Layout style={[styles.layout, styles.marginTop]}>
                    <Input
                        label="CEP"
                        placeholder='CEP'
                        value={this.props.zipcode}
                        onChangeText={text => this.props.zipcodeChange(text)}
                    />
                </Layout>

                <Layout style={styles.layout}>
                    {this.props.state
                        ? (
                            <>            
                                <Select selectedIndex={selectIndex} onSelect={item => this.props.estadoChange(item.row)} label="Estado">
                                    <SelectItem title='Alagoas'/>
                                    <SelectItem title='Amapá'/>
                                    <SelectItem title='Amazonas' />
                                    <SelectItem title='Bahia' />
                                    <SelectItem title='Ceará' />
                                    <SelectItem title='Distrito Federal' />
                                    <SelectItem title='Espírito Santo' />
                                    <SelectItem title='Goiás' />
                                    <SelectItem title='Maranhão' />
                                    <SelectItem title='Mato Grosso' />
                                    <SelectItem title='Mato Grosso do Sul' />
                                    <SelectItem title='Minas Gerais' />
                                    <SelectItem title='Paraná' />
                                    <SelectItem title='Paraíba' />
                                    <SelectItem title='Pará' />
                                    <SelectItem title='Pernambuco' />
                                    <SelectItem title='Piauí' />
                                    <SelectItem title='Rio de Janeiro' />
                                    <SelectItem title='Rio Grande do Norte' />
                                    <SelectItem title='Rio Grande do Sul' />
                                    <SelectItem title='Rondônia' />
                                    <SelectItem title='Roraima' />
                                    <SelectItem title='Santa Catarina' />
                                    <SelectItem title='Sergipe' />
                                    <SelectItem title='São Paulo' />
                                    <SelectItem title='Tocantins' />
                                </Select>
                            </>
                        )
                        : <></>

                    }
                </Layout>

                <Layout style={styles.layout}>
                    <Input
                        label="Cidade"
                        placeholder='Cidade'
                        value={this.props.city}
                        onChangeText={text => this.props.cidadeChange(text)}
                    />
                </Layout>

                <Layout style={styles.layout}>
                    <Input
                        label="Bairro"
                        placeholder='Bairro'
                        value={this.props.neighborhood}
                        onChangeText={text => this.props.neighborhoodChange(text)}
                    />
                </Layout>

                <Layout style={styles.layout}>
                    <Input
                        label="Rua"
                        placeholder='Rua'
                        value={this.props.street}
                        onChangeText={text => this.props.streetChange(text)}
                    />
                </Layout>

                <Layout style={styles.layout}>
                    <Input
                        label="Número"
                        placeholder='Número'
                        value={this.props.number}
                        onChangeText={text => this.props.numberChange(text)}
                    />
                </Layout>

                <Layout style={styles.layout}>
                    <Input
                        label="Complemento"
                        placeholder='Complemento'
                        value={this.props.complement}
                        onChangeText={text => this.props.complementChange(text)}
                    />
                </Layout>

                <Layout level='1' style={styles.containerDoisElementos}>
                    <Input
                        label="Latitude"
                        style={styles.input}
                        placeholder='Latitude'
                        value={this.props.latitude}
                        keyboardType={'numeric'}
                        onChangeText={text => this.props.latitudeChange(text)}
                    />
                    <Input
                        label="Longitude"
                        style={styles.input}
                        placeholder='Longitude'
                        value={this.props.longitude}
                        keyboardType={'numeric'}
                        onChangeText={text => this.props.longitudeChange(text)}
                    />
                </Layout>

                { this.props.street && this.props.city 
                    ? (
                        <>
                            <Button onPress={() => this.props.changeStorage(false)} style={styles.button} >
                                Salvar
                            </Button>
                        </>
                    )
                    : (
                        <>
                            <Button onPress={() => this.props.changeStorage(true)} style={styles.button} >
                                Cadastrar
                            </Button>
                        </>
                    )

                }
                
            </Layout>
        )
    }

}


const mapStateToProps = state => ({
    zipcode: state.storageCrud.zipcode,
    state: state.storageCrud.state,
    city: state.storageCrud.city,
    neighborhood: state.storageCrud.neighborhood,
    street: state.storageCrud.street,
    number: state.storageCrud.number,
    complement: state.storageCrud.complement,
    latitude: state.storageCrud.latitude,
    longitude: state.storageCrud.longitude,
    _id: state.storageCrud._id
})

const mapDispatchToProps = dispatch => bindActionCreators({ 
    zipcodeChange,
    estadoChange,
    cidadeChange,
    neighborhoodChange,
    streetChange,
    numberChange,
    complementChange,
    executeCadastrar,
    showStorage,
    changeStorage,
    longitudeChange,
    latitudeChange
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(StorageCrud)

const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: '#501380',
        borderColor: 'transparent'
    },
    layout: {
        alignItems: 'stretch',
        backgroundColor: 'transparent',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
    },
    largura: {
        width:'40%',
        marginLeft: 15,
    },
    marginTop: {
        marginTop: 15
    },
    input: {
        flex: 1,
        margin: 2,
    },
    containerDoisElementos: {
        alignItems: 'stretch',
        backgroundColor: 'transparent',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        flexDirection: 'row',
    },
})