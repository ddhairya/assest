import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import SplashScreen from "../screens/splash.js";
import SigninScreen from "../screens/signIn";


const Stack = createStackNavigator();

const RootStack = () => {
    return(
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Splash' component={SplashScreen}></Stack.Screen>
            <Stack.Screen name='Signin' component={SigninScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default RootStack;