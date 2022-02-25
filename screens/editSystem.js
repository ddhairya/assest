import React from "react";
import { View, ScrollView } from "react-native";
import globalStyles from "../styles/global";
import CloseModalButton from "../shared/CloseModalButton";
import EditSystemModal from "../components/EditSystemModal";
const EditSystem = ({sys, editSystem, setEditSystemModalOpen}) => {
    return(
        <View style={globalStyles.container}>
            <ScrollView>
                <CloseModalButton closeModal={setEditSystemModalOpen}/>
                <EditSystemModal setEditSystemModalOpen={setEditSystemModalOpen} editSystem={editSystem} sys={sys}/>
            </ScrollView>
            
        </View>
    )
}

export default EditSystem