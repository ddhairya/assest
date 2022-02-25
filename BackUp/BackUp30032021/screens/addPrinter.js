import React from "react";
import { Keyboard, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import globalStyles from "../styles/global";
import AddPrinterModal from "../components/AddPrinterModal";
import CloseModalButton from "../shared/CloseModalButton";

const Printer = ({site_id, setPrinterModal, addprinter}) => {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
            <View style={globalStyles.container}>
                <ScrollView>
                    <CloseModalButton closeModal = {setPrinterModal}/>
                    <AddPrinterModal site_id={site_id} setPrinterModal={setPrinterModal} addprinter={addprinter}/>

                </ScrollView>
            </View>
            
            
        </TouchableWithoutFeedback>
    )
}

export default Printer;