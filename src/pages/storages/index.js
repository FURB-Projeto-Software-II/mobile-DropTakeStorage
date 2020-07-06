import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet } from 'react-native';
import { Layout, Button, ListItem, List, Divider } from '@ui-kitten/components';
import { Actions } from 'react-native-router-flux';

import { loadStorages } from './actions'

const data = new Array(15).fill({
    title: 'Item',
    description: 'Description for Item',
  });

class Storages extends Component {

    componentDidMount(){
        this.props.loadStorages();
    }

    renderItem = ({ item, index }) => (
        <ListItem
          title={`${item.street}, N ${item.number}`}
          description={`${item.state}, ${item.city}`}
          onPress={() => Actions.storagesCrud()}
        />
    );

    render() {

        const { list } = this.props;

        return (
           <Layout style={styles.container}>
               <Layout >
                    <List
                        style={styles.listAddressBox}
                        data={list}
                        ItemSeparatorComponent={Divider}
                        renderItem={this.renderItem}
                    />
               </Layout>
               { list[0] || list.length == 0
                    ? (
                        <>
                            <Layout style={styles.newAddressBox}>
                                <Button style={styles.button} onPress={() => Actions.storagesCrud()}>
                                    NOVO ENDEREÇO
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
    list : state.storages.list
})

const mapDispatchToProps = dispatch => bindActionCreators({ loadStorages }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Storages)

const styles = StyleSheet.create({
    listAddressBox: {
        height: '90%'
    },
    newAddressBox: {
        height: '10%'
    },
    button: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: '#501380',
        borderColor: 'transparent'
    },
    container: {
        maxHeight: '100%',
    },
})