import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Modal } from "react-native";
import globalStyles from "../styles/global";
import Icon from "react-native-vector-icons/AntDesign";
import EditFirewall from "../screens/editFirewall";

 const FirewallList = ({fw, editFirewall, delFirewall}) => {
    const [editFirewallModalOpen, setEditFirewallModalOpen] = useState(false)
    return(
        <View>
            <TouchableOpacity >
                <View style={[globalStyles.secContainer]} >
                    <View style={[globalStyles.secLineItemContainer50]}>                        
                        <View style={globalStyles.secLineContainer}>                    
                            <Text style={globalStyles.boldText}>{fw.firewall_model}  </Text>
                        </View>
                        <View style={globalStyles.secLineContainer} >
                            <Text style={globalStyles.boldText}>{fw.firewall_dyn}  </Text>
                        </View>
                        <View style={globalStyles.secLineContainer} >
                            <Text style={globalStyles.boldText}>{fw.firewall_ip} - </Text>
                            <Text>{fw.firewall_port}</Text>
                        </View>
                        <View style={globalStyles.secLineContainer}>                    
                            <Text >{fw.date_of_purchase} </Text>
                        </View>                
                    </View> 
                    <View style={globalStyles.secLineItemContainer50}>
                        <View style={globalStyles.secLineContainer} >
                            <Icon name="delete" size={30} style={globalStyles.deleteIcon} onPress={() => delFirewall(fw)}/>  
                            <Icon name="edit" size={30} style={globalStyles.editIcon} onPress={() => setEditFirewallModalOpen(true)}  /> 
                        </View>                           
                    </View>   
                </View>
            </TouchableOpacity> 
            <Modal visible={editFirewallModalOpen}>
                <EditFirewall editFirewall={editFirewall} setEditFirewallModalOpen={setEditFirewallModalOpen} fw={fw} />
            </Modal>           
        </View>
    )
}


export default FirewallList;