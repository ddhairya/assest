import React from "react";
import { Keyboard, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import globalStyles from "../styles/global";


const closeModalButton = ({closeModal}) => {
    return(
        <View>
            <Icon
                name='closesquare'
                size={35}
                onPress={() => closeModal(false)}
                style={globalStyles.closeModalIcon}/>                    
            <Text style={globalStyles.closeModalText}> Close</Text>
        </View>
    )
}


export default closeModalButton;