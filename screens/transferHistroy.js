import React from "react";
import { View, ScrollView, Text } from "react-native";
import TransferHistModal from "../components/TransferHistModal";
import globalStyles from "../styles/global";
import CloseModalButton from "../shared/CloseModalButton";

const TransferHistory = ({category, device, setTransferHistModalOpen}) => {
    return(
        <View style={globalStyles.container}>
            
                <CloseModalButton closeModal={setTransferHistModalOpen}/>
                <Text style={globalStyles.errorText}>Transfer History</Text>
                <TransferHistModal category={category}  device={device}/>
                       
        </View>
    )
}

export default TransferHistory