import React from "react";
import { View, ScrollView } from "react-native";
import EditPrinterModal from "../components/EditPrinterModal";
import globalStyles from "../styles/global";
import CloseModalButton from "../shared/CloseModalButton";

const EditPrinter = ({print, editPrinter, setEditPrinterModalOpen}) => {
    return(
        <View style={globalStyles.container}>
            <ScrollView>
                <CloseModalButton closeModal={setEditPrinterModalOpen}/>
                <EditPrinterModal setEditPrinterModalOpen={setEditPrinterModalOpen} editPrinter={editPrinter} print={print}/>
            </ScrollView>
            
        </View>
    )
}

export default EditPrinter