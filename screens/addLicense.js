import React from "react";
import { Keyboard, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import globalStyles from "../styles/global";
import CloseModalButton from "../shared/CloseModalButton";
import AddLicenseModal from "../components/AddLicenseModal";

const License = ({site_id, setLicenseModal, addLicense}) => {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
            <View style={globalStyles.container}>
                <ScrollView>
                    <CloseModalButton closeModal = {setLicenseModal}/>
                    <AddLicenseModal site_id={site_id} setLicenseModal={setLicenseModal} addLicense={addLicense}/>                                        
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default License;