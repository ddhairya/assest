import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import globalStyles from "../styles/global";
import Icon from 'react-native-vector-icons/Ionicons'
  
const HeaderTitle = ({title}) => {
  return(
    
      <View style={[globalStyles.secContainer, globalStyles.menuContainer]}>
        
        
        <View>
          <Text style={globalStyles.headerText}> {title}</Text>
        </View>
      </View>                       
  )
}



export default HeaderTitle;