import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Modal } from "react-native";
import globalStyles from "../styles/global";
import Icon from "react-native-vector-icons/AntDesign";
import EditLicense from "../screens/editLicense";

 const LicenseList = ({lic, editLicense, delLicense}) => {
    const [editLicenseModalOpen, setEditLicenseModalOpen] = useState(false)
    return(
        <View>
            <TouchableOpacity >
                <View style={[globalStyles.secContainer]} >
                    <View style={[globalStyles.secLineItemContainer50]}>                        
                        <View style={globalStyles.secLineContainer}>                    
                            <Text style={globalStyles.boldText}>{lic.license_product}  </Text>
                        </View>
                        <View style={globalStyles.secLineContainer} >
                            <Text>{lic.license_system_name}  </Text>
                        </View>
                        <View style={globalStyles.secLineContainer}>                    
                            <Text  style={globalStyles.boldText}>{lic.date_of_purchase} </Text>
                        </View> 
                        <View style={globalStyles.secLineContainer} >
                            <Text>{lic.license_reg_email}</Text>
                        </View>
                                       
                    </View> 
                    <View style={globalStyles.secLineItemContainer50}>
                        <View style={globalStyles.secLineContainer} >
                            <Icon name="delete" size={30} style={globalStyles.deleteIcon} onPress={() => delLicense(lic)}/>  
                            <Icon name="edit" size={30} style={globalStyles.editIcon} onPress={() => setEditLicenseModalOpen(true)}  /> 
                        </View>                           
                    </View>   
                </View>
            </TouchableOpacity> 
            <Modal visible={editLicenseModalOpen}>
                <EditLicense editLicense={editLicense} setEditLicenseModalOpen={setEditLicenseModalOpen} lic={lic} />
            </Modal>           
        </View>
    )
}



export default LicenseList;