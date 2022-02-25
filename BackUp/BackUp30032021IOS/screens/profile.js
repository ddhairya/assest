import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

import AuthContext from "../components/context";
import { DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import globalStyles from "../styles/global";
import axios from 'axios';
import { Formik } from "formik";

import EncryptedStorage from 'react-native-encrypted-storage';

import CryptoJS from "crypto-js";

const Profile = () => {
    const { signOut } = React.useContext(AuthContext)
    const [secure, setSecure] = useState(true)
    const [secureIcon, setSecureIcon] = useState('eye-off')
    const [user, setUser] = useState({ password: '', user: '' })
    const [pwd, setPwd] = useState(false)

    const changepassword = async (user) => {
        //console.log(user.password)
        user.password = CryptoJS.AES.encrypt(user.password, '3Qt#6Q$TVp').toString();
        user.user = await EncryptedStorage.getItem('userToken')
        const URL = `https://alahliagroup.com/Inventory_App/changepass.php`
        //const URL = `http://localhost:8080/Inventory_App/changepass.php`
        axios({
            method: 'post',
            url: URL,
            headers: { 'content-type': 'application/json' },
            data: user,
        })
            .then(response => {
                //console.log(response.data)
                if (response.data !== null) {
                    //console.log(response.data)
                    signOut()
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.splashHeader}>
                <View style={[globalStyles.secDashedContainer]}>
                    <View style={[globalStyles.secContainer]}>
                        <TextInput
                            style={{ width: '80%' }}
                            placeholder='Enter the new password'
                            onChangeText={(value) => {
                                var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
                                if (strongRegex.test(value)) {
                                    //console.log(value)
                                    setPwd(true)
                                    setUser({ password: value })
                                } else {
                                    setPwd(false)
                                }
                                //console.log(value)                                
                            }}
                            secureTextEntry={secure}
                        />
                        <Icon style={globalStyles.accountIcon} onPress={() => { setSecure(!secure), setSecureIcon('eye') }} name={secureIcon} size={25} />
                    </View>
                </View>
                {!pwd &&
                    <View>
                        <Text style={globalStyles.errorText}>Must contain 9 Character, 1 Upper Case, 1 Lower Case, 1 Number, 1 Symbol</Text>
                        <Text style={globalStyles.errorText}></Text>
                    </View>}
                <View >
                    {pwd &&
                        <TouchableOpacity onPress={() => changepassword(user)} style={[globalStyles.accountButton, globalStyles.secContainer]}>

                            <View style={globalStyles.secContainer}>
                                <Icon style={globalStyles.accountIcon} name='account-lock-outline' size={40} />
                                <Text style={globalStyles.signText}> Change Password</Text>
                            </View>
                        </TouchableOpacity>
                    }
                </View>
            </View>
            <View style={globalStyles.splashFooter}>
                <TouchableOpacity style={[globalStyles.signButton, globalStyles.secDashedContainer]} onPress={() => signOut()}>
                    <View style={globalStyles.secContainer}>
                        <Text style={globalStyles.signText} >Sign Out</Text>
                        <Icon name='logout' color='red' size={50} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile;



const Style = StyleSheet.create({
    con: {
        //backgroundColor:'red',
        // alignItems:'center',
        // padding: 10,
        // borderRadius:30,

        // backgroundColor:'#e5ba83',
        width: '80%'

    }
})