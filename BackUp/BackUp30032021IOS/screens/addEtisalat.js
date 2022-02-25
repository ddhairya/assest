import React from "react";
import { Keyboard, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import globalStyles from "../styles/global";
import CloseModalButton from "../shared/CloseModalButton";
import AddEtisalatModal from "../components/AddEtisalatModal";

const Etisalat = ({site_id, setEtisalatModal, addEtisalat}) => {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
            <View style={globalStyles.container}>
                <ScrollView>
                    <CloseModalButton closeModal = {setEtisalatModal}/>
                    <AddEtisalatModal site_id={site_id} setEtisalatModal={setEtisalatModal} addEtisalat={addEtisalat}/>                                        
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Etisalat;