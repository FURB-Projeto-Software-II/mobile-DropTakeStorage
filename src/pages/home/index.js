import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, List, Divider, ListItem } from '@ui-kitten/components';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadOrders } from './actions'

const data = new Array(8).fill({
    title: 'Item',
    description: 'Description for Item',
  });

class Home extends Component {

    componentDidMount() {
        this.props.loadOrders()
    }

    renderItem = ({ item, index }) => (
        <ListItem
          title={`${item.description}`}
          description=''
          onPress={() => Actions.orderInfo({_id: item._id})}
        />
    );

    render() {

        const { list } = this.props;

        return(
            <Layout>
                <List
                    style={styles.container}
                    data={list}
                    ItemSeparatorComponent={Divider}
                    renderItem={this.renderItem}
                />
            </Layout>
            
        );
    }
}

const mapStateToProps = state => ({
    list: state.home.list
})

const mapDispatchToProps = dispatch => bindActionCreators({ loadOrders }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
    container: {
      maxHeight: '100%',
    },
});