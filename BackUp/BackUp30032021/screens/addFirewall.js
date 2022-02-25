import React from "react";
import { Keyboard, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import globalStyles from "../styles/global";
import AddFirewallModal from "../components/AddFirewallModal";
import CloseModalButton from "../shared/CloseModalButton";

const Firewall = ({setFirewallModal , addFirewall, site_id}) =>{
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
            <View style={globalStyles.container}>
                <ScrollView>
                    <CloseModalButton closeModal = {setFirewallModal}/>
                    <AddFirewallModal site_id={site_id} setFirewallModal={setFirewallModal} addFirewall={addFirewall}/>                    
                </ScrollView>
            </View>
            
            
        </TouchableWithoutFeedback>
    )
}

export default Firewall;