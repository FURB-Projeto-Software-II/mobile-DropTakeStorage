import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, Menu, MenuItem } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

const data = new Array(8).fill({
    title: 'Item',
    description: 'Description for Item',
  });

class Configs extends Component {

    render() {
        return(
            <Layout style={styles.container}>
                <Menu>
                    <MenuItem title='Endereços' onPress={() => Actions.storages()}/>
                    <MenuItem title='Pagamentos' />
                </Menu>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Configs)

const styles = StyleSheet.create({
    container: {
      maxHeight: '100%',
    },
});