import React from 'react'
import {createStackNavigator } from '@react-navigation/stack';

import Profile from "../screens/profile";
import Header from "../components/Header";
import globalStyles from "../styles/global";
import { ImageBackground } from "react-native";

const Stack = createStackNavigator();

const ProfileStack = () => {
    return(
        <Stack.Navigator 
            screenOptions={{
                //headerStyle: {backgroundColor: '#e5ba83'}, 
                headerStyle: {backgroundColor: '#B2D4BF'},
                //headerTitleAlign: 'center',
                //headerBackground:() => (<ImageBackground style={globalStyles.headerImage} source={require('../assets/images/background.png')}/>),
                headerTintColor: '#444',
                headerTitleStyle:{
                    fontFamily: 'CitrusGothicInline-Regular',
                    fontSize:40,
        }}}>
            <Stack.Screen 
                name="ProfileScreen" 
                component={Profile} 
                options= {({navigation}) => ({headerTitle: () => <Header title='Profile' navigation={navigation} />})}  />
        </Stack.Navigator>
    )
    
}
export default ProfileStack;