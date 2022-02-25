import React, { useState } from 'react'
import {View, Text,TouchableOpacity, StyleSheet, Modal} from 'react-native'
import globalStyles from '../styles/global'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import EditSite from "../screens/editSite";

const SitesListItem = ({item, navigation, editSite, delsite, userToken }) => {
    //console.log(userToken)
    const [editSiteModalOpen, setEditSiteModalOpen] = useState(false)
    return(       
        <View style={globalStyles.container}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('SitesDetailsScreen', {item:item, userToken:userToken})} 
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
                    <View >
                        <View style={globalStyles.secLineContainer} >
                            <Icon name="delete" size={30} style={globalStyles.deleteIcon} onPress={() => delsite(item)}/>  
                            <Icon name="edit" size={30} style={globalStyles.editIcon} onPress={() => setEditSiteModalOpen(true)} /> 
                        </View> 
                        <View style={globalStyles.secLineContainer} >
                            <Icon2 name="add-to-list" size={30} style={globalStyles.addIcon} onPress={() => navigation.navigate('SitesDetailsScreen', {item:item, userToken:userToken})} />          
                        </View >  
                    </View>   
                </View> 
            </TouchableOpacity>
            <Modal visible={editSiteModalOpen}>
                <EditSite editSite={editSite} setEditSiteModalOpen={setEditSiteModalOpen} item={item}/>
            </Modal>
        </View>        
    )
}

const styles = StyleSheet.create({
    red:{
        
        width:'65%'
    },
  
});

export default SitesListItem;