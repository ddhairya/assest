import React from "react";
import { Button } from "react-native";
import AuthContext from "../components/context";
import { DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SignOut = () => {
    
    const {signOut} = React.useContext(AuthContext)

    return(
        <DrawerItem icon={() => <Icon name='logout' size = {20}/>} label='Signout' onPress={ () => signOut()} />
    )
}

export default SignOut;