import React from 'react'
import {createStackNavigator } from '@react-navigation/stack';

import Profile from "../screens/profile";
import HeaderIcon from "../components/HeaderIcon";
import  HeaderTitle from "../components/HeaderTitle";
import globalStyles from "../styles/global";
import { ImageBackground } from "react-native";

const Stack = createStackNavigator();

const ProfileStack = () => {
    return(
        <Stack.Navigator 
            screenOptions={{
                headerStyle: {backgroundColor: '#e5ba83'}, 
                //headerTitleAlign: 'center',
                //headerBackground:() => (<ImageBackground style={globalStyles.headerImage} source={require('../assests/images/background.png')}/>),
                headerTintColor: '#444',
                headerTitleStyle:{
                    fontFamily: 'CitrusGothicInline-Regular',
                    fontSize:40,
        }}}>
            <Stack.Screen 
                name="ProfileScreen" 
                component={Profile} 
                options= {
                    ({navigation}) => ({
                        headerLeft: () => <HeaderIcon  navigation={navigation} />,
                        headerTitle: () => <HeaderTitle title ='Profile' />
                    })}  
            />
        </Stack.Navigator>
    )
    
}
export default ProfileStack;