import React, { useState } from "react";
import { Button, Text, View, TextInput, TouchableOpacity } from "react-native";
import globalStyles from "../styles/global";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AuthContext from "../components/context";
import * as yup from 'yup'

const SigninScreen = ({navigation}) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const {signIn} = React.useContext(AuthContext)


    return(  
        <View style={globalStyles.container}>
            <View style={globalStyles.container}>
                <View style={globalStyles.secDashedContainer}>
                    <TextInput
                        placeholder='Enter the username'
                        onChangeText = {(value) => setUsername(value.toLowerCase())}
                    />
                </View>
                <Text style={globalStyles.errorText}>User name is case insensative</Text>
                <View style={globalStyles.secDashedContainer}>
                    <TextInput
                        placeholder='Enter the password'
                        
                        secureTextEntry = {true}                        
                        onChangeText = {(value) => setPassword(value)}
                    />
                </View>
                <Text style={globalStyles.errorText}></Text>
                <TouchableOpacity style={[globalStyles.accountButton]} onPress={() => signIn(username,password)}>
                    <View style={globalStyles.secContainer}>
                        <Icon style={globalStyles.accountIcon} name='account' size={40}/>
                        <Text style={globalStyles.signText}> Sign In</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>  
    )
}

export default SigninScreen;