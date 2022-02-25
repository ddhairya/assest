import React from "react";
import { View, ScrollView } from "react-native";
import CloseModalButton from "../shared/CloseModalButton";
import EditFirewallModal from "../components/EditFirewallModal";
import globalStyles from "../styles/global";

const EditFirewall = ({fw, editFirewall, setEditFirewallModalOpen}) => {
    return(
        <View style={globalStyles.container}>
            <ScrollView>
                <CloseModalButton closeModal={setEditFirewallModalOpen}/>
                <EditFirewallModal setEditFirewallModalOpen={setEditFirewallModalOpen} editFirewall={editFirewall} fw={fw}/>
            </ScrollView>
            
        </View>
    )
}

export default EditFirewall