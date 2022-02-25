import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home'
import SitesListScreen from '../screens/sitesList'
import SiteDetailScreen from '../screens/siteDetail'

import HeaderIcon from "../components/HeaderIcon";
import HeaderTitle from "../components/HeaderTitle";
import { Image, ImageBackground, StyleSheet, Text } from 'react-native';
import globalStyles from '../styles/global';



const Stack = createStackNavigator();

const HomeStack = () =>{
    return(
        <Stack.Navigator 
            screenOptions={{
            headerStyle: {backgroundColor: '#e5ba83'},
            //headerBackground:() => (<ImageBackground style={globalStyles.headerImage} source={require('../assests/images/background.png')}/>),
            headerTintColor: '#444',
            headerTitleStyle:{
                fontFamily: 'CitrusGothicInline-Regular',
                fontSize:40, 
                
            }}}>
            <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options= {
                    ({navigation}) => ({
                        headerLeft: () => <HeaderIcon  navigation={navigation} />,
                        headerTitle: () => <HeaderTitle title ='Home' />
                    })} 
            />
            <Stack.Screen 
                name="SitesListScreen" 
                component={SitesListScreen} 
                options={{title: ' Site List', headerTitleAlign:'center'}} />
            <Stack.Screen 
                name="SitesDetailsScreen" 
                component={SiteDetailScreen} 
                options={{title: ' Site Detail', headerTitleAlign:'center'}} />
        </Stack.Navigator>
    ) 
}



export default HomeStack;