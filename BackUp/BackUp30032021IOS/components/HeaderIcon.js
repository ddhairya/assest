import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import globalStyles from "../styles/global";
import Icon from 'react-native-vector-icons/Ionicons'
  
const HeaderIcon = ({ navigation}) => {
  return(
    
      <View style={[globalStyles.secContainer, globalStyles.menuContainer]}>
        <View style={globalStyles.menuIcon}>
          <Icon  name='ios-menu'onPress={()=> navigation.openDrawer()} size={40}/>
        </View>
        
        
      </View>                       
  )
}



export default HeaderIcon;