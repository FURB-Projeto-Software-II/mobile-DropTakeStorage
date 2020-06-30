import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, Input, Divider, Select, Button, SelectItem, Text, CheckBox } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

import { zipcodeChange, estadoChange,  cidadeChange, neighborhoodChange, streetChange, numberChange, complementChange, executeCadastrar, showStorage, changeStorage, longitudeChange, latitudeChange } from './actions'

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
            
            this.props.longitudeChange(longitude);
            this.props.latitudeChange(latitude);
        }
    }

    render() {

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
                    <Select selectedIndex={this.props.state} onSelect={title => this.props.estadoChange(title)} label="Estado">
                    <SelectItem title='Acre' value="AC"/>
                        <SelectItem title='Alagoas' value="AL"/>
                        <SelectItem title='Amapá' value="AP"/>
                        <SelectItem title='Amazonas' value="AM"/>
                        <SelectItem title='Bahia' value="BA"/>
                        <SelectItem title='Ceará' value="CE"/>
                        <SelectItem title='Distrito Federal' value="DF"/>
                        <SelectItem title='Espírito Santo' value="ES"/>
                        <SelectItem title='Goiás' value="GO"/>
                        <SelectItem title='Maranhão' value="MA"/>
                        <SelectItem title='Mato Grosso' value="MT"/>
                        <SelectItem title='Mato Grosso do Sul' value="MS"/>
                        <SelectItem title='Minas Gerais' value="MG"/>
                        <SelectItem title='Paraná' value="PR"/>
                        <SelectItem title='Paraíba' value="PB"/>
                        <SelectItem title='Pará' value="PA"/>
                        <SelectItem title='Pernambuco' value="PE"/>
                        <SelectItem title='Piauí' value="PI"/>
                        <SelectItem title='Rio de Janeiro' value="RJ"/>
                        <SelectItem title='Rio Grande do Norte' value="RN"/>
                        <SelectItem title='Rio Grande do Sul' value="RS"/>
                        <SelectItem title='Rondônia' value="RO"/>
                        <SelectItem title='Roraima' value="RR"/>
                        <SelectItem title='Santa Catarina' value="SC"/>
                        <SelectItem title='Sergipe' value="SE"/>
                        <SelectItem title='São Paulo' value="SP"/>
                        <SelectItem title='Tocantins' value="TO"/>
                    </Select>
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
                        onChangeText={text => this.props.latitudeChange(text)}
                    />
                    <Input
                        label="Longitude"
                        style={styles.input}
                        placeholder='Longitude'
                        value={this.props.longitude}
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