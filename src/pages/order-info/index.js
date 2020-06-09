import React, { Component } from "react"
import { StyleSheet, Image } from 'react-native';
import { Layout, Text, Divider } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux'

import { showOrderItem } from './actions'

class OrderInfo extends Component {

    componentDidMount() {
        this.props.showOrderItem(this.props._id);
    }


    render() {

        return (
            <Layout style={styles.container}>
                <Text category="label" style={styles.title}>Informações do Produto</Text>
                <Text>Descrição: TV Samsumg</Text>
                <Text>Loja: Americanas</Text>

                <Divider style={styles.divider}/>

                <Text category="label" style={styles.title}>Informações do Pagamento</Text>
                <Text>Valor: R$18,00</Text>
                <Text>Forma Pagamento: Cartão</Text>

                <Divider style={styles.divider}/>

                <Text category="label" style={styles.title}>Informações da Entrega</Text>
                <Text>Responsável Storage: José Affonso</Text>
                <Text>Endereço Storage: Rua Arthur Schreiber, 51 - Velha, Blumenau - SC</Text>
                <Text>Contato Storage: (47)99685-4567</Text>
                <Text>Entrega em sua casa: SIM</Text>
                <Text>Endereço de Entrega: Rua Antunes Pereira, 67 - Velha, Blumenau - SC</Text>
                
                <Divider style={styles.divider}/>

                <Layout style={styles.qrcodebox}>
                    <Text category="label" style={styles.title}>QRCODE para retirada do produto</Text>
                    <Image style={styles.qrcode} source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png',
                    }}/>
                </Layout>

            </Layout>
        )

    }

}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({ showOrderItem }, dispatch)

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
    }
});
