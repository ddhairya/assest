import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Modal } from "react-native";
import globalStyles from "../styles/global";
import Icon from "react-native-vector-icons/AntDesign";
import EditSysten from "../screens/editSystem";


const SystemList = ({sys, editSystem, delSystem}) => {
    const [editSystemModalOpen, setEditSystemModalOpen] = useState(false)
    return(
        <View>
            <TouchableOpacity >
                <View style={[globalStyles.secContainer]} >
                    <View style={[globalStyles.secLineItemContainer50]}>                        
                        <View style={globalStyles.secLineContainer}>                    
                            <Text style={globalStyles.boldText}>{sys.system_identification}  </Text>
                        </View>
                        <View style={globalStyles.secLineContainer} >
                            <Text>{sys.system_name}  </Text>
                        </View>
                        <View style={globalStyles.secLineContainer} >
                            <Text >{sys.system_ip} - </Text>
                            <Text style={globalStyles.boldText}>{sys.system_port}</Text>
                        </View>
                        <View style={globalStyles.secLineContainer}>                    
                            <Text style={globalStyles.boldText} >{sys.date_of_purchase} </Text>
                        </View>                
                    </View> 
                    <View style={globalStyles.secLineItemContainer50}>
                        <View style={globalStyles.secLineContainer} >
                            <Icon name="delete" size={30} style={globalStyles.deleteIcon} onPress={() => delSystem(sys)}/>  
                            <Icon name="edit" size={30} style={globalStyles.editIcon} onPress={() => setEditSystemModalOpen(true)}  /> 
                        </View>                           
                    </View>
                    <Modal visible={editSystemModalOpen}>
                        <EditSysten editSystem={editSystem} setEditSystemModalOpen={setEditSystemModalOpen} sys={sys} />
                    </Modal>    
                </View>
            </TouchableOpacity> 
        </View>
    )
}

export default SystemList;