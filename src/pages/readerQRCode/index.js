import React, { Component } from "react"
import { StyleSheet, Image, View } from 'react-native';
import { Layout, Text, Button, Card, Modal } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux'
import { BarCodeScanner } from 'expo-barcode-scanner';

import { visibleModalChange, idOrderChange } from './actions'

class ReaderQRCode extends Component{

    render() {

        const { visibleConfirm, visibleModalChange } = this.props;

        const handleBarCodeScanned = ({ type, data }) => {
            visibleModalChange(true);
            idOrderChange(data);
        };

        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
        })();

        return(
            <Layout style={styles.container}>
                <BarCodeScanner
                    onBarCodeScanned={handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                <Modal
                    visible={visibleConfirm}
                    backdropStyle={styles.backdrop}
                    onBackdropPress={() => visibleModalChange(false)}>
                    <Card disabled={true}>
                        <Text>Deseja realmente entregar o pedido ?</Text>
                        <Button style={styles.button}>
                            Entregar
                        </Button>
                    </Card>
                </Modal>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    visibleConfirm: state.readerQRCode.visibleConfirm,
    idOrder: state.readerQRCode.idOrder
});

const mapDispatchToProps = dispatch => bindActionCreators({ visibleModalChange, idOrderChange }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReaderQRCode);

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        padding: 15,
        maxHeight: '100%',
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    button: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: '#501380',
        borderColor: 'transparent'
    },
});
