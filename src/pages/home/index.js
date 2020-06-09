import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, List, Divider, ListItem, BottomNavigation, BottomNavigationTab, Text } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const { Navigator, Screen } = createBottomTabNavigator();
import { loadOrders } from './actions'

const data = new Array(8).fill({
    title: 'Item',
    description: 'Description for Item',
  });

const UsersScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>USERS</Text>
    </Layout>
);
  
const OrdersScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>ORDERS</Text>
    </Layout>
);

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='USERS'/>
      <BottomNavigationTab title='ORDERS'/>
    </BottomNavigation>
  );

const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Users' component={UsersScreen}/>
        <Screen name='Orders' component={OrdersScreen}/>
    </Navigator>
);

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
            <Layout style={styles.containerGeral}>
                <List
                    style={styles.container}
                    data={list}
                    ItemSeparatorComponent={Divider}
                    renderItem={this.renderItem}
                />

                <Layout>
                    <NavigationContainer>
                        <TabNavigator/>
                    </NavigationContainer>
                </Layout>
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
    containerGeral:{
        paddingTop: 25,
    },
});