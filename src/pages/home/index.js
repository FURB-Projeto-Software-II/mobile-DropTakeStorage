import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Layout, List, Divider, ListItem, BottomNavigation, BottomNavigationTab, Text } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const { Navigator, Screen } = createBottomTabNavigator();

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

    renderItem = ({ item, index }) => (
        <ListItem
          title={`${item.title} ${index + 1}`}
          description={`${item.description} ${index + 1}`}
          onPress={() => Actions.orderInfo()}
        />
    );

    render() {
        return(
            <Layout style={styles.containerGeral}>
                <List
                    style={styles.container}
                    data={data}
                    ItemSeparatorComponent={Divider}
                    renderItem={this.renderItem}
                />
                <NavigationContainer>
                    <TabNavigator/>
                </NavigationContainer>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
    container: {
      maxHeight: '100%',
    },
    containerGeral:{
        paddingTop: 25,
    },
});