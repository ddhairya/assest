import React from 'react'
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native'
import globalStyles from '../styles/global'
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Modal } from 'react-native'
// import { useState } from 'react'
// import Icon2 from 'react-native-vector-icons/Entypo';
// import EditSite from "../screens/editSite";

const TransferSitesListItem = ({item, navigation,  userToken }) => {
    //console.log(userToken)
    //const [editSiteModalOpen, setEditSiteModalOpen] = useState(false)
    return(       
        <View style={globalStyles.container}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('TransferSitesDetailsScreen', {item:item, userToken:userToken})} 
                //key={item.key} 
                style={[ globalStyles.secDashedContainer]}>
                <View style={[globalStyles.secContainer]} >
                    <View style={styles.red}>
                        <View style={globalStyles.secLineContainer} >
                            <Text style={globalStyles.secChildListInfText1} > {item.emirate} </Text>
                            <Text style={globalStyles.secChildListInfText2} > {item.company} </Text>
                        </View>
                        <View style={globalStyles.secLineContainer}>                    
                            <Text style={globalStyles.secChildListDetailText2} > {item.outlet} </Text>
                            <Text style={globalStyles.secChildListDetailText1} > {item.phone} </Text>        
                        </View>  
                    </View>
                    <View style={styles.blue}>
                            <Icon  name='share' size={30} style={globalStyles.editIcon} />  
                    </View>   
                </View> 
            </TouchableOpacity>            
        </View>        
    )
}

const styles = StyleSheet.create({
    red:{        
        width:'80%',       
    },
    blue:{
        justifyContent:'center',        
        //backgroundColor: 'blue'
    }  
});

export default TransferSitesListItem;