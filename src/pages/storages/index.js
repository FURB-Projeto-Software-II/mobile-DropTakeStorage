import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { StyleSheet } from 'react-native'
import { Layout, Button,ListItem, List, Divider } from '@ui-kitten/components'
import { Actions } from 'react-native-router-flux'

const data = new Array(15).fill({
    title: 'Item',
    description: 'Description for Item',
  });

class Storages extends Component {

    constructor(props){
        super(props)
    }

    renderItem = ({ item, index }) => (
        <ListItem
          title={`${item.title} ${index + 1}`}
          description={`${item.description} ${index + 1}`}
        />
    );

    render() {
        return (
           <Layout>
               <Layout style={styles.listAddressBox}>
                    <List
                        style={styles.container}
                        data={data}
                        ItemSeparatorComponent={Divider}
                        renderItem={this.renderItem}
                    />
               </Layout>
               <Layout style={styles.newAddressBox}>
                    <Button style={styles.button} onPress={() => Actions.storagesCrud()}>
                        NOVO ENDEREÇO
                    </Button>
               </Layout>
           </Layout> 
        )
    }

}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch)

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