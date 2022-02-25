import React from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import globalStyles from '../styles/global'
import AddSiteModal from "../components/AddSiteModal";
import CloseModalButton from "../shared/CloseModalButton";

const AddSite = ({setModalOpen, addSite}) => {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.container}>
                <ScrollView>
                    <CloseModalButton closeModal = {setModalOpen}/>
                    <AddSiteModal setModalOpen={setModalOpen} addSite={addSite}/>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

// const styles = StyleSheet.create({
//     closeModal:{
//         alignSelf:'center',
//         color:'black',       
//         padding:20,
//     }
// });

export default AddSite;