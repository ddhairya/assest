import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Modal } from "react-native";
import globalStyles from "../styles/global";
import Icon from "react-native-vector-icons/AntDesign";
import EditPrinter from "../screens/editPrinter";

 const PrinterList = ({print, editPrinter, delPrinter}) => {
    const [editPrinterModalOpen, setEditPrinterModalOpen] = useState(false)
    return(
        <View>
            <TouchableOpacity>
                <View style={[globalStyles.secContainer]} >
                    <View style={globalStyles.secLineItemContainer50}>
                        
                        <View style={globalStyles.secLineContainer}>                    
                            <Text style={globalStyles.boldText}>{print.printer_alias_name} - </Text>
                            <Text>{print.printer_details}</Text>  
                        </View> 
                        <View style={globalStyles.secLineContainer} >
                            <Text>{print.printer_model}  </Text>
                            <Text>{print.date_of_purchase}</Text>
                        </View>
                         
                    </View> 
                    <View style={globalStyles.secLineItemContainer50}>
                        <View style={globalStyles.secLineContainer} >
                            <Icon name="delete" size={30} style={globalStyles.deleteIcon} onPress={() => delPrinter(print)}/>  
                            <Icon name="edit" size={30} style={globalStyles.editIcon} onPress={() => setEditPrinterModalOpen(true)}  /> 
                        </View> 
                          
                    </View>   
                </View> 

                      
            </TouchableOpacity> 
            <Modal visible={editPrinterModalOpen}>
                <EditPrinter editPrinter={editPrinter} setEditPrinterModalOpen={setEditPrinterModalOpen} print={print} />
            </Modal>           
        </View>
    )
}

const styles = StyleSheet.create({
    cont : {
        width:'50%',
        marginTop:10,
        justifyContent:'space-evenly',
        padding:10,
        borderBottomWidth:0.6,

        
    },
    red: {
        //backgroundColor: 'red',
    },
})

export default PrinterList;
