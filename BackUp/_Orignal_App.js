import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet,  View,  Text,} from 'react-native';
//import Header from './components/Header';
//import SectionListSite from './components/SectionListItems'
//import { NavigationContainer } from '@react-navigation/native';
//import Datetime from './components/Datetime';
import Home from './screens/home'
import Sites from './screens/sites'
import SiteDetail from './screens/siteDetail'
import globalStyles from './styles/global'
import Navigator from './routes/homeStack'

const App = () => {

  // const alertItem = ({item}) => {
  //   alert(item);
  // }
  
  return (

    <navigator />
    // <View style={globalStyles.container}>
    //   <Home />
    //   <Sites/>
    //   <SiteDetail/>
    //   <Text style={{ fontFamily:'Omnes Bold Regular', fontSize:30, color: 'black'}}>Hello from Main Screen</Text>
    //   {/* <Header style={styles.header}/>
      
    //   <Text>Hello from MainScreen</Text>
    //   <SectionListSite item='Hello from SectionListItems' alt = {alertItem}  />
    //   <SectionListSite item='Sites'  alt = {alertItem} />
    //    */}
      
    // </View>
  );
};


export default App;
