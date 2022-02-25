import React from "react";
import { ScrollView, Text, View } from "react-native";
import globalStyles from "../styles/global";
import CloseModalButton from "../shared/CloseModalButton";
import EditSiteModal from "../components/EditSiteModal";

const EditSite = ({setEditSiteModalOpen, item, editSite}) => {
    return(
        <View style={globalStyles.container}>
            <ScrollView>
                <CloseModalButton closeModal={setEditSiteModalOpen}/>
                <EditSiteModal setEditSiteModalOpen={setEditSiteModalOpen} editSite={editSite} item={item}/>
            </ScrollView>
            
        </View>
    )
}

export default EditSite