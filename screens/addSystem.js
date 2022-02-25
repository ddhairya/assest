import React from "react";
import { Keyboard, ScrollView,TouchableWithoutFeedback, View } from "react-native";
import globalStyles from "../styles/global";
import CloseModalButton from "../shared/CloseModalButton";
import AddSystemModal from "../components/AddSystemModal";

const AddSystem = ({setSystemModal , addSystem, site_id}) => {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
            <View style={globalStyles.container}>
                <ScrollView>
                    <CloseModalButton closeModal = {setSystemModal}/>
                    <AddSystemModal setSystemModal={setSystemModal} addSystem={addSystem} site_id={site_id}/>
                </ScrollView>
            </View>
            
            
        </TouchableWithoutFeedback>
    )
}

export default AddSystem;