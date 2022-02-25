import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Modal } from "react-native";
import globalStyles from "../styles/global";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/FontAwesome";
import TransferDevice from "../screens/transferDevice";
import TransferHistory from "../screens/transferHistroy";


const TransferSystemList = ({sys,transferDevice, category}) => {
    const [transferDeviceModalOpen, setTransferDeviceModalOpen] = useState(false)
    const [transferHistModalOpen, setTransferHistModalOpen] = useState(false)
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
                            <Icon name="export" size={30} style={globalStyles.transferIcon} onPress={() => setTransferDeviceModalOpen(true)}/>  
                            <Icon2 name="history" size={30} style={globalStyles.editIcon} onPress={() => setTransferHistModalOpen(true)}  /> 
                        </View> 
                          
                    </View>     
                </View>
            </TouchableOpacity> 
            <Modal visible={transferDeviceModalOpen}>
                <TransferDevice transferDevice={transferDevice} setTransferDeviceModalOpen={setTransferDeviceModalOpen} device={sys} />
            </Modal>
            <Modal visible={transferHistModalOpen}>
                <TransferHistory category={category}  setTransferHistModalOpen={setTransferHistModalOpen} device={sys} />
            </Modal>
        </View>
    )
}

export default TransferSystemList;