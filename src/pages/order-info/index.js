import React, { Component } from "react"
import { StyleSheet, Image, View } from 'react-native';
import { Layout, Text, Button, Divider } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux'
import { BarCodeScanner } from 'expo-barcode-scanner';

import { showOrderItem, confirmReceived } from './actions'

class OrderInfo extends Component {

    componentDidMount() {
        this.props.showOrderItem(this.props._id);
    }


    render() {

        const { order } = this.props;

        return (
            <Layout style={styles.container}>
                <Text category="label" style={styles.title}>Informações do Produto</Text>
                <Text>Descrição: {order.description}</Text>
                {/* <Text>Loja: Americanas</Text> */}

                <Divider style={styles.divider}/>

                <Text category="label" style={styles.title}>Informações do Pagamento</Text>
                <Text>Valor: R$ {order.price}</Text>
                <Text>Forma Pagamento: Cartão</Text>

                <Divider style={styles.divider}/>

                

                <Text category="label" style={styles.title}>Informações da Entrega</Text>
                
                { order.adressInfo == undefined
                    ? <Text>Entrega em sua casa: NÃO</Text> 
                    : (
                        <>
                            <Text>Entrega em sua casa: SIM</Text>
                            <Text>Cidade: {order.adressInfo.city}</Text>
                            <Text>Bairro: {order.adressInfo.neighborhood}</Text>
                            <Text>Endereço de Entrega: {order.adressInfo.street}</Text>
                            <Text>Número: {order.adressInfo.number}</Text>
                            <Text>CEP: {order.adressInfo.zipcode}</Text>
                        </>
                    )
                }
                
                <Divider style={styles.divider}/>

                {/* <Layout style={styles.qrcodebox}>
                    <Text category="label" style={styles.title}>QRCODE para retirada do produto</Text>
                    <Image style={styles.qrcode} source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png',
                    }}/>
                </Layout> */}

                <Text style={[styles.orderCardStatus, order.status == 0 ? styles.status0 : order.status == 1 ? styles.status1 : styles.status2]}>
                    Status: {`${order.status == 0 ? `Pedido em entrega` : order.status == 1 ? `Pedido pronto para retirada` : `Pedido retirado` }`}
                </Text>

                <Divider style={styles.divider}/>

                { order.status == 0
                    ? (  
                        <>
                            <Layout style={styles.container}>
                                <Button style={styles.button} onPress={() => this.props.confirmReceived()}>
                                    Confirmar recebimento
                                </Button>
                            </Layout>
                        </>
                    )
                    : <></>                   
                }
                { order.status == 1
                    ? (
                        <>
                            <Layout style={styles.container}>
                                <Button style={styles.button} onPress={() => Actions.readerQRCode()}>
                                    Confirmar entrega
                                </Button>
                            </Layout>
                        </> 
                    )
                    : <></>
                }
                
            </Layout>
        )

    }

}

const mapStateToProps = state => ({
    order: state.orderInfo.order
})

const mapDispatchToProps = dispatch => bindActionCreators({ showOrderItem, confirmReceived }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo)

const styles = StyleSheet.create({
    container: {
        padding: 15,
        maxHeight: '100%',
    },
    divider: {
        margin: 15
    },
    title: {
        marginBottom: 5
    },
    qrcode: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    qrcodebox: {
        alignItems: 'center',
    },
    button: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: '#501380',
        borderColor: 'transparent'
    },
    orderCardStatus: {
        marginTop: 3,
        fontWeight: 'bold',
    },
    status0: {
        color: '#d6b41c'
    },
    status1: {
        color: '#0091bd',
    },
    status2: {
        color: '#36c900'
    },
});
