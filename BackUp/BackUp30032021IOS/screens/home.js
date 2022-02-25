import React from 'react'
import SectionListItems from '../components/SectionListItems'
import {View, TouchableOpacity} from 'react-native'
import globalStyles from '../styles/global'

const Home = ({navigation}) => {
    return(
        <TouchableOpacity 
            style={globalStyles.container}
        >
            <View >            
                <SectionListItems item='Sites' navigation={navigation} screen='SitesListScreen' />
                <SectionListItems item='Transfers' navigation={navigation}  screen= 'HomeScreen'/>
            </View>
        </TouchableOpacity>
    )
}

export default Home;