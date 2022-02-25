import React from "react";
import { View, ScrollView } from "react-native";
import CloseModalButton from "../shared/CloseModalButton";
import EditEtisalatModal from "../components/EditEtisalatModal";
import globalStyles from "../styles/global";

const EditEtisalat = ({netwrk, editEtisalat, setEditEtisalatModalOpen}) => {
    return(
        <View style={globalStyles.container}>
            <ScrollView>
                <CloseModalButton closeModal={setEditEtisalatModalOpen}/>
                <EditEtisalatModal setEditEtisalatModalOpen={setEditEtisalatModalOpen} editEtisalat={editEtisalat} netwrk={netwrk}/>
            </ScrollView>
            
        </View>
    )
}

export default EditEtisalat