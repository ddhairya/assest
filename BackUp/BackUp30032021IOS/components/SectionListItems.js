import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import globalStyles from '../styles/global'

const SectionListItems = ({item, navigation, screen}) => {
    return(
        <TouchableOpacity 
            style={[ globalStyles.secDashedContainer]} 
            onPress={() => navigation.navigate(screen)} >
            <View>
                <Text  style={[globalStyles.secText, globalStyles.oswaldRegText]}>{item}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SectionListItems;
