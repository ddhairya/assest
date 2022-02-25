import React, { useState } from 'react'
import {View, Text,TouchableOpacity, StyleSheet, Modal} from 'react-native'
import globalStyles from '../styles/global'
import Icon from "react-native-vector-icons/AntDesign";
import TransferDevice from "../screens/transferDevice";
//import Icon from 'react-native-vector-icons/FontAwesome';
// import { Modal } from 'react-native'
// import { useState } from 'react'
// import Icon2 from 'react-native-vector-icons/Entypo';
// import EditSite from "../screens/editSite";


const TransferEntierSitesListItem = ({item, transferDevice, navigation,  userToken }) => {
    //console.log(userToken)
    //const [editSiteModalOpen, setEditSiteModalOpen] = useState(false)
    
    const [transferDeviceModalOpen, setTransferDeviceModalOpen] = useState(false)
    return(       
        <View style={globalStyles.container}>
            
            <TouchableOpacity 
                 
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
                            <Icon name="export" size={35} style={globalStyles.transferIcon} onPress={() => setTransferDeviceModalOpen(true)} /> 
                    </View>   
                </View> 
            </TouchableOpacity>  
            <Modal visible={transferDeviceModalOpen}>
                <TransferDevice transferDevice={transferDevice}  setTransferDeviceModalOpen={setTransferDeviceModalOpen} device={item} />
            </Modal>          
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

export default TransferEntierSitesListItem;