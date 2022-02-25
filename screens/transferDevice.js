import React from "react";
import { View, ScrollView, Text } from "react-native";
import TransferDeviceModal from "../components/TransferDeviceModal";
import globalStyles from "../styles/global";
import CloseModalButton from "../shared/CloseModalButton";

const TransferDevice = ({device, transferDevice, setTransferDeviceModalOpen}) => {
    return(
        <View style={globalStyles.container}>
            
                <CloseModalButton closeModal={setTransferDeviceModalOpen}/>
                <Text style={globalStyles.errorText}>Transfer to Site</Text>
                <TransferDeviceModal setTransferDeviceModalOpen={setTransferDeviceModalOpen} transferDevice={transferDevice} device={device}/>
                       
        </View>
    )
}

export default TransferDevice