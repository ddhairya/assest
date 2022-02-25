import React from "react";
import { View, ScrollView } from "react-native";
import CloseModalButton from "../shared/CloseModalButton";
import EditLicenseModal from "../components/EditLicenseModal";
import globalStyles from "../styles/global";

const EditLicense = ({lic, editLicense, setEditLicenseModalOpen}) => {
    return(
        <View style={globalStyles.container}>
            <ScrollView>
                <CloseModalButton closeModal={setEditLicenseModalOpen}/>
                <EditLicenseModal setEditLicenseModalOpen={setEditLicenseModalOpen} editLicense={editLicense} lic={lic}/>
            </ScrollView>
            
        </View>
    )
}

export default EditLicense