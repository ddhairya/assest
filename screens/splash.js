import React from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../styles/global";
import Icon from "react-native-vector-icons/Entypo";

const SplashScreen = ({navigation}) => {
    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.splashHeader}>
                <Image style={globalStyles.splashImage} source={require('../assets/images/comlogo.png')} />
            </View>
            <View style={globalStyles.splashFooter}>
                <TouchableOpacity style={[globalStyles.signButton, globalStyles.secDashedContainer]} onPress={() => navigation.navigate('Signin')}>
                    <View style={globalStyles.secContainer}>
                        <Text style={globalStyles.signText}>SignIn</Text>
                        <Icon style={globalStyles.signIcon} name='login' size={40}/>
                    </View>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default SplashScreen;